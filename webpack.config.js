require('babel-register');
const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
	entry: __dirname +"/src/WebSQL.js",
	output: {
		path: __dirname + "/dist",
		filename: "wed.sql.min.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				include: [
					path.resolve(__dirname, "src"),
				],
				test: /\.js$/,
				// Options to configure babel with
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0', 'react'],
				}
			}
		]
	},
	plugins: [
		new MinifyPlugin()
	],
	devServer: {
		port : 3002,
		host : 'localhost',
		contentBase :`${__dirname}/dist`
	}
	
};
