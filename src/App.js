import React from 'react';
import './App.css';
import {
	// Switch, 
	Route
} from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import About from './About/About'


class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div><NavBar /></div>
				<div className="main">
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</div>
			</div >
		);
	}
}

export default App;
