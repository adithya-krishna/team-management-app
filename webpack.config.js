const webpack = require('webpack');
const path = require('path');

const baseConfig = {
	entry: path.resolve(__dirname, 'app'),

	devServer: {
		historyApiFallback: true,
		inline: true,
		progress: true,
		contentBase: './app',
		port: 8080
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: './app.bundle.js',
		sourceMapFilename: '[file].map',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss'],
		modules: [path.resolve(__dirname, 'app'), 'node_modules']
	},

	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				use: 'source-map-loader',
				enforce: 'pre'
			},
			{
				test: /\.js[x]?$/,
				include: path.resolve(__dirname, 'app'),
				exclude: [path.resolve(__dirname, 'node_modules')],
				use: {
					loader: 'babel-loader',
					query: {
						cacheDirectory: true
					}
				}
			}
		]
	}
};

module.exports = baseConfig;
