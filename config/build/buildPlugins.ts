import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const ESLintPlugin = require("eslint-webpack-plugin");
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {
        paths,
        isDev,
        apiUrl,
        project,
    } = options;
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
		new ESLintPlugin(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
            ],
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
		// new FileManagerPlugin({
		// 	events: {
		// 		onStart: {
		// 			delete: [distName],
		// 		},
		// 		onEnd: {
		// 			copy: [
		// 				{
		// 					source: path.join(__dirname, "public"),
		// 					destination: distName,
		// 				},
		// 			],
		// 		},
		// 	},
		// }),
		// new ModuleFederationPlugin({
		// 	name: "Host",
		// 	//library: { type: 'var', name: 'Host' },
		// 	remotes: {
		// 		Aodb: `Aodb@http://localhost:3011/moduleEntry.js?v=...`, // ENV...
		// 	},
		// 	shared: {
		// 		...dependencies,
		// 		react: { eager: true, singleton: true, requiredVersion: dependencies["react"] },
		// 		"react-dom": { eager: true, singleton: true, requiredVersion: dependencies["react-dom"] },
		// 		"react-router-dom": { eager: true, singleton: true, requiredVersion: dependencies["react-router-dom"] },
		// 		history: { eager: true, singleton: true, requiredVersion: dependencies["history"] },
		// 		axios: { eager: true, singleton: true, requiredVersion: dependencies["axios"] },
		// 		antd: { eager: true, singleton: true, requiredVersion: dependencies["antd"] },
		// 		echarts: { eager: true, singleton: true, requiredVersion: dependencies["echarts"] },
		// 	},
		// }),
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
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
        plugins.push(
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            }),
        );
    }

    return plugins;
}
