const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: [
			'app/tests/**/*.test.jsx',
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/foundation-sites/dist/js/foundation.min.js'
			],
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		},
		plugins: [
			'karma-chrome-launcher',
			'karma-sourcemap-loader',
			'karma-webpack',
			'karma-mocha',
			'karma-mocha-reporter'
		]
	});
};