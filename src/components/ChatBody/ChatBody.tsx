import React from 'react';
import { Container } from "@mui/material";
import ChatBodyItem from "./ChatBodyItem/ChatBodyItem";
import './ChatBodyScrollBar.css';
import '../../Preloader.css';

interface Props {
	messages: IMessage[];
	isPreloader: boolean;
}

const ChatBody: React.FC<Props> = ({ messages, isPreloader }) => {
	return (
		<div id="chat-body">
			{
				isPreloader ?
					<div id="preloader">
						<div id="loader"></div>
					</div>
					: null
			}
			<Container
				sx={{ height: 300 }}
				className="overflow-y-scroll d-flex flex-column gap-3 border border-1 border-black rounded p-3 mb-3">
				{
					messages.map(message => <ChatBodyItem key={message._id} message={message} />)
				}
			</Container>
		</div>
	);
};

export default ChatBody;