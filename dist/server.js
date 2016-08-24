'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('./src/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

if (process.env.NODE_ENV === 'development') {
	var config = require('./webpack.config.dev');
	var compiler = (0, _webpack2.default)(config);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, 'src')));
} else if (process.env.NODE_ENV === 'production') {
	app.use(_express2.default.static(_path2.default.resolve(__dirname, 'dist')));
}

app.get('*', _middleware2.default);

app.listen(8000, '0.0.0.0', function (err) {
	if (err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:8000');
	}
});

//# sourceMappingURL=server.js.map