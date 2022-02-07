/*global __dirname */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './src/ts/Game.ts'
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	externals: {
		phaser: 'Phaser'
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public')
	},
	devtool: "source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './node_modules/phaser/dist/phaser.min.js',
					to: 'lib'
				},
				{
					from: './src/*.html',
					to: '[name][ext]'
				},
				{
					from: './src/*.css',
					to: '[name][ext]'
				},
				{
					from: './src/*.ico',
					to: '[name][ext]'
				},
				{
					from: './src/assets',
					to: 'assets',
					globOptions: {
						ignore: [ '*.md' ]
					}
				}
			]
		})
	],
	performance: {
		assetFilter: function(assetFilename) {
			let customExclusions = ['lib/phaser.min.js'];
			if (customExclusions.includes(assetFilename)) {
				return false;
			}
			return !/\.map$/.test(assetFilename);
		}
	},
	devServer: {
		open: true
	}
};
