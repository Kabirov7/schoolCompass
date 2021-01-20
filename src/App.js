import React, {useEffect, Component} from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";

import Home from "./Components/auth/Home";
import Result from "./Components/auth/Result";
import ReactGa from "react-ga"

function App(){

		return (
			<div>
					<Router>
						<div>
							<Route exact path={"/schoolCompass/"} component={Home}/>
							<Route exact path={"/schoolCompass/myRes"} component={Result}/>
						</div>
					</Router>
			</div>
		)

}

export default App;