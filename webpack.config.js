require('babel-register');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: __dirname +"/src/DBSQL.js",
	output: {
		path: __dirname + "/dist",
		filename: "wed.sql.js"
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
	devServer: {
		port : 3001,
		host : 'localhost',
		contentBase :`${__dirname}/dist`
	}
	
};
