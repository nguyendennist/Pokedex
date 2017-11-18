const {getIfUtils} = require('webpack-config-utils');

module.exports = env => {
	const {ifProd, ifNotProd} = getIfUtils(env);
	const dist = '/dist';
	const path = __dirname + dist;
	const config = {
		entry: './src/index.js',
		devtool: ifProd('source-map', 'eval'),
		module: {
			rules: [
				{
					exclude: /node_modules/,
					test: /\.jsx?$/,
					use: ['babel-loader', 'eslint-loader']
				}
			]
		},
		output: {
			filename: 'bundle.js',
			path: path,
			pathinfo: ifNotProd(),
			publicPath: dist
		}
	};

	return config;
};
