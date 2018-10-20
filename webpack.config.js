const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './src/ts/Game.ts'
	},
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public')
	},
	devtool: "source-map",
	plugins: [
		new CleanWebpackPlugin(['public']),
		new CopyWebpackPlugin([{
			from: './node_modules/phaser/dist/phaser.min.js',
			to: 'lib'
		}]),
		new CopyWebpackPlugin([{
			from: './src/*.html',
			to: path.resolve(__dirname, 'public'),
			flatten: true
		}]),
		new CopyWebpackPlugin([{
			from: './src/*.css',
			to: path.resolve(__dirname, 'public'),
			flatten: true
		}]),
		new CopyWebpackPlugin([{
			from: './src/*.ico',
			to: path.resolve(__dirname, 'public'),
			flatten: true
		}]),
		new CopyWebpackPlugin([{
			from: './src/assets',
			to: 'assets',
			ignore: [ '*.md' ]
		}])
	  ]
};
