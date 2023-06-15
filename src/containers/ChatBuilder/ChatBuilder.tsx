import React, { useState } from 'react';
import { Alert, Container } from "@mui/material";
import ChatBody from "../../components/ChatBody/ChatBody";
import ChatBodyItem from "../../components/ChatBody/ChatBodyItem/ChatBodyItem";
import ChatForm from "../../components/ChatForm/ChatForm";
import './Alert.css';

const ChatBuilder = () => {
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [isAlert, setIsAlert] = useState<IAlert>({ type: '', show: false });

	const showAlert = (response: IAlert): void => {
		setIsAlert(response);
		setTimeout(() => {
			setIsAlert({ type: '' , show: false });
		}, 5000);
	};

	const addMessage = (message: IMessage) => {
		setMessages(prevState => [ ...prevState, { ...message } ]);
	};

	const alert = (
		<Alert
			style={{ animation: 'showAndHideAlert 5s linear' }}
			className="position-absolute top-0 end-0 mt-4 mx-4"
			variant="filled"
			severity="error"
		>
			{ isAlert.type === 'author' ? 'Введите автора!' : 'Сообщение не может быть пустым!' }
		</Alert>
	);

	return (
		<Container maxWidth="sm" className="border border-2 border-black rounded my-5 p-3">
			{ isAlert.show ? alert : null }
			<ChatBody messages={messages} />
			<ChatForm addMessage={addMessage} showAlert={showAlert} />
		</Container>
	);
};

export default ChatBuilder;