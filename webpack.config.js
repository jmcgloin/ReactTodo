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
		alias: {
			//AliasName: path.resolve(__dirname, './alias/path'),
			Main: 				path.resolve(__dirname, './app/component/Main'),
			Nav: 				path.resolve(__dirname, './app/component/Nav'),
			applicationStyles: 	path.resolve(__dirname, './app/styles/app.scss')
			
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
                 				path.resolve(__dirname, './node_modules/foundation-sites/scss'),
               				]
             			}
           			}
         		]
        	}
		]
	},
	devtool: "eval-source-map"
}