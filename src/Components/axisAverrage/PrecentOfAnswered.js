import React, {useEffect} from "react";
import "../../App.css"


export default function PrecentOfAnswered(props){
	const lengthQuestion = props.lenQuestions
	const current = props.currentQuestions;

	const precentOfAnswered = (current*100)/lengthQuestion
	return(
		<div style={{textAlign:"center"}}>
			<h4 id="precentOfAnswered" className="question_title">
				Вы заполнили компас на {Math.ceil(precentOfAnswered)}%
			</h4>
		</div>
	)
}