import { Container } from "@mui/material";
import React from 'react';
import ChatBodyItem from "./ChatBodyItem/ChatBodyItem";

interface Props {
	messages: IMessage[];
}

const ChatBody: React.FC<Props> = ({ messages }) => {
	return (
		<Container
			sx={{ height: 300 }}
			className="d-flex flex-column gap-3 overflow-y-scroll border border-1 border-black rounded p-3 mb-3">
			{
				messages.map(message => <ChatBodyItem key={message.id} message={message} />)
			}
		</Container>
	);
};

export default ChatBody;