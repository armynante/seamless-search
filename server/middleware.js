import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import reducers from '../src/reducers';
import routes from '../src/routes';
import { Main, buildMuiTheme} from '../src/materialTheme.js'


export default (req, res) => {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if(error) {
			res.status(500).send(error.message);
		} else if(redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if(renderProps) {

      global.navigator = {
        userAgent: req.headers['user-agent']
      };

      const muiTheme = buildMuiTheme(req.headers['user-agent']);

      if(process.env.NODE_ENV == 'development') {
				res.status(200).send(`
					<!doctype html>
					<html>
						<header>
							<title>App</title>
						</header>
						<body>
							<div id='app'></div>
							<script src='bundle.js'></script>
						</body>
					</html>
				`);
			} else if(process.env.NODE_ENV == 'production') {
        console.log(muiTheme);
				res.status(200).send(`
					<!doctype html>
					<html>
						<header>
							<title>App</title>
							<link rel='stylesheet' href='bundle.css'>
						</header>
						<body>
							<div id='app'>${renderToString(
                <Main theme={muiTheme}>
  								<Provider store={createStore(reducers)}>
  									<RouterContext {...renderProps} />
  								</Provider>
                </Main>
							)}</div>
							<script src='bundle.js'></script>
						</body>
					</html>
				`);
			}
		} else {
			res.status(404).send('Not found');
		}
	});
};
