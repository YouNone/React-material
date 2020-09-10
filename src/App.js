import React from 'react';
import './App.scss';
import {
	Route, Switch, Redirect
} from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import About from './About/About'
import User from './User/User'
import Auth from './Auth/Auth';
import { connect } from 'react-redux';
import Logout from './Logout/Logout';

class App extends React.Component {
	render() {
		let isAuth // = this.props.isAuthenticated;
		let token = localStorage.getItem('token')
		if (token) {
			console.log(token);
			isAuth = true
		}

		// console.log('App', this.props.isAuthenticated);
		let routes = (
			<div className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/users" component={User} />
					<Route path="/about" component={About} />
					<Route path="/auth" component={Auth} />
				</Switch>
			</div>
		)

		if (isAuth) {
			routes = (
				<div className="main">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/users" component={User} />
						<Route path="/about" component={About} />
						<Route path="/logout" component={Logout} />
						<Redirect to="/" />
					</Switch>
				</div>
			)
		} else {
			routes = (
				<div className="main">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/auth" component={Auth} />
					</Switch>
				</div>
			)
		}

		return (
			<div className="App">
				<div><NavBar isAuthenticated={isAuth} /></div>
				{routes}
			</div >
		);
	}
}
function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.auth.token
	}
}

export default connect(mapStateToProps)(App);
