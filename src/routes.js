import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home';
import Page from './components/page';
import Main from './materialTheme.js'

export default (
	<Route path='/' component={Main}>
		<IndexRoute component={Home} />
		<Route path='page' component={Page} />
	</Route>
);
