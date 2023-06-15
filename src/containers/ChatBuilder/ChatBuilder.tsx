import React, { useState } from 'react';
import { Container } from "@mui/material";
import ChatForm from "../../components/ChatForm/ChatForm";

const ChatBuilder = () => {
	const [messages, setMessages] = useState<IMessage[]>([]);

	const addMessage = (message: IMessage) => {
		setMessages(prevState => [ ...prevState, { ...message } ]);
	};

	return (
		<Container maxWidth="sm" className="border border-2 border-black rounded my-5 p-3">

			<ChatForm addMessage={addMessage} />
		</Container>
	);
};

export default ChatBuilder;