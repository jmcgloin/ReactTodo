var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		"script-loader!jquery/dist/jquery.min.js",
		"script-loader!foundation-sites/dist/js/foundation.min.js",
		"./app/app.jsx"
	],
	externals: {
		jQuery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: "./public/bundle.js"
	},
	resolve: {
		modules: [
			'node_modules',
			'./app/components/',
			'./app/api',
			'./app/styles'
		],
		alias: {
			//AliasName: path.resolve(__dirname, './alias/path'),
			Main: 				path.resolve(__dirname, 'Main'),
			Nav: 				path.resolve(__dirname, 'Nav'),
			applicationStyles: 	path.resolve(__dirname, './app/styles/app.scss'),
			actions: 			path.resolve(__dirname, './app/actions/actions.jsx'),
			reducers: 			path.resolve(__dirname, './app/reducers/index.jsx'),
			store: 				path.resolve(__dirname, './app/store/configureStore.jsx')
		},
		extensions: ["*",".js",".jsx"]
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0"]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			},
       		{
         		test: /\.scss$/,
         		use: [
           			{
             			loader: 'style-loader'
           			},
           			{
             			loader: 'css-loader'
           			},
           			{
             			loader: 'sass-loader',
             			options: {
               			includePaths: [
                 				path.resolve(__dirname, './app/styles'),
                 				path.resolve(__dirname, './node_modules/foundation-sites/scss')
               				]
             			}
           			}
         		]
        	}
		]
	},
	devtool: "eval-source-map"
}