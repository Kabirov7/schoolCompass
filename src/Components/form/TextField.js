import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: '40ch',
		},
	},

}));


function BasicTextFields(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const {index, response} = props

	useEffect(() => {
		if (response) {
			setValue(response)
		}
	}, [response])

	const handleChange = (event) => {
		setValue(event.target.value)
		props.returnAnswer(event.target.value, index, event.target.value)
	};

	return (
		<div>
			<form noValidate autoComplete="off">
				<h4>{props.title}</h4>
				<TextField
					className={classes.root}
					id={"inputBox" + index}
					label="Мой id"
					value={value}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default BasicTextFields