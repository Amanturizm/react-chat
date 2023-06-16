import React, { useEffect, useState } from 'react';
import { Alert, Container } from "@mui/material";
import ChatForm from "../../components/ChatForm/ChatForm";
import ChatBody from "../../components/ChatBody/ChatBody";
import ChatBodyItem from "../../components/ChatBody/ChatBodyItem/ChatBodyItem";
import axios from "axios";
import './Alert.css';

const url: string = 'http://146.185.154.90:8000/messages';

const ChatBuilder = () => {
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [isAlert, setIsAlert] = useState<IAlert>({ type: '', show: false });
	const [isPreloader, setIsPreloader] = useState<boolean>(false);

	useEffect(() => {
		setMessages([]);
		setIsPreloader(true);

		let lastDate: string = '';

		(async () => {
			try {
				const { data }: {data: IMessage[]} = await axios.get(url);
				lastDate = data[data.length - 1].datetime!;
				setMessages(data);
			} catch (e) {
				console.error(e);
			} finally {
				setIsPreloader(false);
			}
		})()
			.catch(err => console.error(err));

		const interval = setInterval(() => {
			(async () => {
				try {
					const { data }: { data: IMessage[] } = await axios.get(`${url}?datetime=${lastDate}`);

					if (data.length > 0 && data[data.length - 1].datetime !== lastDate) {
						lastDate = data[data.length - 1].datetime!;

						setMessages(prevState => {
							const newMessages: IMessage[] = [ ...prevState ];
							newMessages.splice(0, data.length);
							newMessages.push(...data);
							return newMessages;
						});
					}
				} catch (e) {
					console.error(e);
				}
			})().catch(err => console.error(err));
		}, 3000);

		return () => {
			clearInterval(interval);
		}
	}, []);

	const showAlert = (type: string): void => {
		if (!isAlert.show) {
		  setIsAlert({ type, show: true });

			setTimeout(() => {
				setIsAlert({ type: '', show: false });
			}, 5000);
		}
	};

	const addMessage = async (message: IMessage) => {
		const data = new URLSearchParams();
		data.set('message', message.message);
		data.set('author', message.author);

		await axios
			.post(url, data)
			.catch(err => console.error(err));
	};

	const alert: React.ReactNode = (
		<Alert
			style={{ animation: 'showAndHideAlert 5s linear' }}
			className="position-fixed top-0 end-0 mt-4 mx-4"
			variant="filled"
			severity="error"
		>
			{ isAlert.type === 'author' ? 'Введите автора!' : 'Сообщение не может быть пустым!' }
		</Alert>
	);

	return (
		<Container sx={{ width: '45%' }} className="bg-dark rounded my-5 p-4">
			{ isAlert.show && alert }
			<ChatBody messages={messages} isPreloader={isPreloader} />
			<ChatForm addMessage={addMessage} showAlert={showAlert} />
		</Container>
	);
};

export default ChatBuilder;