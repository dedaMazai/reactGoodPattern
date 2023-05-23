const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");
const path = require("path");
const distName = "dist";

/**
 * npm i -D image-minimizer-webpack-plugin imagemin
 * npm i -D imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo
 * const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
 */

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.join(__dirname, distName),
		filename: "bundle.[contenthash:8].js",
		assetModuleFilename: path.join("assets", "images", "[name].[contenthash][ext]"),
	},
	devServer: {
		watchFiles: path.join(__dirname, "src"),
		port: 4000,
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(js|jsx)?$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.ts(x)?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.module.css$/,
				use: [
					"style-loader",
					"css-loader",
					{
						options: {
							esModule: true,
							modules: {
								namedExport: true,
							},
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require.resolve("sass"),
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				exclude: /node_modules/,
			},
			{
				test: /\.svg$/,
				type: "asset/resource",
				generator: {
					filename: path.join("icons", "[name].[contenthash][ext]"),
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: "asset/resource",
				exclude: /node_modules/,
			},
		],
		// loaders: [
		//   {test : /\.css$/, loader: 'style!css!'}
		// ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
			filename: "index.html",
		}),
		new ESLintPlugin(),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: [distName],
				},
				onEnd: {
					copy: [
						{
							source: path.join(__dirname, "public"),
							destination: distName,
						},
					],
				},
			},
		}),
		new ModuleFederationPlugin({
			name: "Host",
			//library: { type: 'var', name: 'Host' },
			remotes: {
				Aodb: `Aodb@http://localhost:3011/moduleEntry.js?v=...`, // ENV...
			},
			shared: {
				...dependencies,
				react: { eager: true, singleton: true, requiredVersion: dependencies["react"] },
				"react-dom": { eager: true, singleton: true, requiredVersion: dependencies["react-dom"] },
				"react-router-dom": { eager: true, singleton: true, requiredVersion: dependencies["react-router-dom"] },
				history: { eager: true, singleton: true, requiredVersion: dependencies["history"] },
				axios: { eager: true, singleton: true, requiredVersion: dependencies["axios"] },
				antd: { eager: true, singleton: true, requiredVersion: dependencies["antd"] },
				echarts: { eager: true, singleton: true, requiredVersion: dependencies["echarts"] },
			},
		}),
	],
	// optimization: {
	//   minimizer: [
	//     new ImageMinimizerPlugin({
	//       minimizer: {
	//         implementation: ImageMinimizerPlugin.imageminMinify,
	//         options: {
	//           plugins: [
	//             ['gifsicle', {interlaced: true}],
	//             ['jpegtran', {progressive: true}],
	//             ['optipng',  {optimizationLevel: 5}],
	//             ['svgo',     {name: 'preset-default'}],
	//           ]
	//         }
	//       }
	//     })
	//   ]
	// }
};
