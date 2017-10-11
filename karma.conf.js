// Karma configuration
// Generated on Mon Oct 09 2017 22:51:35 GMT+0300 (EEST)
module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks:  ['jasmine'],
		plugins: [
			'karma-chrome-launcher',
			'karma-html2js-preprocessor',
			'karma-jasmine',
		],


		// list of files / patterns to load in the browser
		files: [
			'dist/example/jquery.min.js',
			'dist/index.html',
			'dist/wed.sql.js',
			'dist/example/example.js',
			'test/test.*.js',
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'**/*.html': ['html2js']
		},
		html2JsPreprocessor: {
			// strip this from the file path
			stripPrefix: 'public/',

			// prepend this to the file path
			prependPrefix: 'served/',

			// or define a custom transform function
			processPath: function (filePath) {
				// Drop the file extension
				return filePath.replace(/\.html$/, '');
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['dots'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,
		// plugins: ['karma-jquery']
	})
}
