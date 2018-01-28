import React from 'react';
import './Button.css';
const button = (props) => {
	return (
		<button className="Button" onClick={props.click} >Submit</button>
		);
}

export default button;