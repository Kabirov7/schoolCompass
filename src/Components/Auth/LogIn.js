import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router";
import app, {signInWithGoogle} from "../../util/firebase";
import {AuthContext} from "../../util/Auth";
import {Button} from "@material-ui/core";

const LogIn = ({history}) => {

	const {currentUser} = useContext(AuthContext);

	if(currentUser){
		return <Redirect to={"/schoolCompass/"}/>
	}

	return (
		<div className="buttons">
		<button onClick={() => signInWithGoogle()}>Авторизоваться</button>
			</div>
	)
}

export default LogIn;