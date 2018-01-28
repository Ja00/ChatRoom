import React from 'react';
import './Chats.css';
import Chat from './Chat/Chat';


const chats = (props) => {

	let append = null;

	append = props.chats.map((chat, index) => {
		return <Chat text={chat} key = {index}/>
	});

	return (
		<div className="Chats">
			<h1>This is the chat room!!!</h1>
			{append}
		</div>
		);
}

export default chats;