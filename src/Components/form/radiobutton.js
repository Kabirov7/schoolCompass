import React, {useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import "../../App.css"


export default function RadioButton(props) {
	const [value, setValue] = React.useState('');
	const index = props.index
	const {ans} = props

	const handleChange = (event) => {
		setValue(event.target.value)
		props.returnAnswer(event.target.value, index)
	};

	useEffect(() => {
		if (ans){
			setValue(ans)
		}
	}, {ans})

	return (
		<div id={props.id}>
			<h4 className="question_title">{props.title}</h4>
			<FormControl const='fieldset'>
				<RadioGroup aria-label={props.title}  name={props.title} value={value} onChange={handleChange}>
					{props.answers.map((el, i) => <FormControlLabel className="question_item" key={i} value={el} control={<Radio/> } label={el}/>)}
				</RadioGroup>
				<div className="chooseAnswer padding_margin">
					<p>{props.message}</p>
				</div>
			</FormControl>
		</div>
	)
		;
}