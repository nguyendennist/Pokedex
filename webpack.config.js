const {getIfUtils} = require('webpack-config-utils');

module.exports = env => {
	const {ifProd, ifNotProd} = getIfUtils(env);
	const dist = '/dist';
	const loaders = ['babel-loader'];
	const path = __dirname + dist;

	if (env.dev) {
		loaders.push('eslint-loader');
	}

	const config = {
		entry: './src/index.js',
		devtool: ifProd('source-map', 'eval'),
		module: {
			rules: [
				{
					exclude: /node_modules/,
					test: /\.jsx?$/,
					use: loaders
				}
			]
		},
		output: {
			filename: 'bundle.js',
			path: path,
			pathinfo: ifNotProd(),
			publicPath: dist
		},
		resolve: {
			modules: ['node_modules', 'src']
		}
	};

	return config;
};
