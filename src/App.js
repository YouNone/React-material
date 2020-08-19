import React from 'react';
import './App.scss';
import {
	// Switch, 
	Route
} from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import About from './About/About'
import User from './User/User'
import Auth from './Auth/Auth';


class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div><NavBar /></div>
				<div className="main">
					<Route exact path="/" component={Home} />
					<Route path="/users" component={User} />
					<Route path="/about" component={About} />
					<Route path="/auth" component={Auth} />
				</div>
			</div >
		);
	}
}

export default App;
