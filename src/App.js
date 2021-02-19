import React, {BrowserRouter, useEffect, Component, useContext} from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";

import Home from "./Components/MainPages/Home";
import ReactGa from "react-ga"
import {AuthContext, AuthProvider} from "./util/Auth";
import firebase  from "./util/firebase";
import LogIn from "./Components/Auth/LogIn"
import PrivateRoute from "./Components/Auth/PrivateRoute";
import {Button} from "@material-ui/core";
import app from "./util/firebase"

function App() {

	return (
		<AuthProvider>
			<Router>
				<div>
					<PrivateRoute exreact path={"/schoolCompass/"} component={Home}/>
					<Route exact path={"/login"} component={LogIn}/>
				</div>
			</Router>
			{/*<Button onClick={() => firebase.auth().signOut()}>выйти</Button>*/}
		</AuthProvider>
	)

}

export default App;