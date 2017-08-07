const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: ['babel-polyfill', './client/index.js'],
	output: {
		path: path.resolve('build'),
		filename: 'app.bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
		],
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'css/index.css',
			to: 'css/index.css'
		}]),
		HtmlWebpackPluginConfig,
		new HtmlWebpackIncludeAssetsPlugin({
			assets: ['css/index.css'],
			append: true
		})
	]
};
