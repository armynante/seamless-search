import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home';
import Page from './components/page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default (
	<Route path='/' component={MuiThemeProvider}>
		<IndexRoute component={Home} />
		<Route path='page' component={Page} />
	</Route>
);
