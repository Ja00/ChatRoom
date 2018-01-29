import React from 'react';
import './Input.css';

const input = (props) => {

	return (
		<div className="Input">
			<input type='text' onKeyUp={props.change}/>
			<button className="Button" onClick={props.click} >Submit</button>
		</div>
		);
}

export default input;