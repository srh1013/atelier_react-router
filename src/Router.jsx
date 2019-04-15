import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home.jsx';
import HtmlDefinition from './components/HtmlDefinition.jsx';
import CssDefinition from './components/CssDefinition.jsx';
import JsDefinition from './components/JsDefinition.jsx';

const MyRouter = () => {
	const navBar = {
		display: 'flex',
		justifyContent: 'space-around',
		marginTop: '2%',
		marginBottom: '4%'
	};
	return (
		<Router>
			<div>
				<nav style={navBar}>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/html'>HTML</NavLink>
					<NavLink to='/css'>CSS</NavLink>
					<NavLink to='/js'>Javascript</NavLink>
				</nav>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/html' exact component={HtmlDefinition} />
					<Route path='/css' exact component={CssDefinition} />
					<Route path='/js' exact component={JsDefinition} />
				</Switch>
			</div>
		</Router>
	);
};

export default MyRouter;
