import React, { useEffect, useRef } from 'react';
import { Container } from "@mui/material";
import ChatBodyItem from "./ChatBodyItem/ChatBodyItem";
import './ChatBodyScrollBar.css';
import '../../Preloader.css';

interface Props {
	messages: IMessage[];
	isPreloader: boolean;
}

const ChatBody: React.FC<Props> = ({ messages, isPreloader }) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (containerRef.current) {
			const containerElement = containerRef.current;
			containerElement.scrollTop = containerElement.scrollHeight;
		}
	}, [messages]);

	return (
		<div id="chat-body">
			{isPreloader ? (
				<div id="preloader">
					<div id="loader"></div>
				</div>
			) : null}
			<Container
				ref={containerRef}
				sx={{ height: 300, backgroundColor: '#fff' }}
				className="overflow-y-scroll d-flex flex-column gap-3 border border-1 rounded p-3 mb-3"
			>
				{messages.map((message) => (
					<ChatBodyItem key={message._id} message={message} />
				))}
			</Container>
		</div>
	);
};

export default ChatBody;
