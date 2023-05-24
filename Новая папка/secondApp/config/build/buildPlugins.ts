import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CircularDependencyPlugin from "circular-dependency-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { BuildOptions } from "./types/config";

const ESLintPlugin = require("eslint-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("../../package.json");

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const {
        paths,
        isDev,
        apiUrl,
        project,
    } = options;
	const isProd = !isDev;

	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ESLintPlugin(),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: "write-references",
			},
		}),
		new ModuleFederationPlugin({
			name: "pdp",
			filename: "remoteEntry.js",
			exposes: {
				"./SecondAPP": "./src/App.tsx",
			},
			shared: {
				...dependencies,
				react: {
					singleton: true,
					requiredVersion: dependencies.react,
					eager: true,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: dependencies["react-dom"],
					eager: true,
				},
				"react-router-dom": {
					singleton: true,
					requiredVersion: dependencies["react-router-dom"],
					eager: true,
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
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

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: "css/[name].[contenthash:8].css",
				chunkFilename: "css/[name].[contenthash:8].css",
			}),
		);
		plugins.push(
			new CopyPlugin({
				patterns: [{ from: paths.locales, to: paths.buildLocales }],
			}),
		);
	}
	return plugins;
}
