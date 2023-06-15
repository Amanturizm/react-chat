import React, { FormEvent, useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputLabel, TextareaAutosize } from "@mui/material";

interface Props {
	addMessage: (message: IMessage) => void;
}

const ChatForm: React.FC<Props> = ({ addMessage }) => {
	const [formData, setFormData] = useState({
		author: '',
		message: ''
	});

	const changeFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		setFormData(prevState => ({ ...prevState, [name]: value }));
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		addMessage({ ...formData });
	};

	return (
		<form onSubmit={onSubmit}>
			<FormControl className="w-100">
				<FormLabel htmlFor="my-input">Author:</FormLabel>
				<input
					type="text"
					className="form-control mb-4"
					id="my-input"
					name="author"
					value={formData.author}
					onChange={changeFormData}
				/>

				<FormLabel htmlFor="my-input">Message:</FormLabel>
				<TextareaAutosize
					className="form-control mb-4"
					id="my-input"
					name="message"
					value={formData.message}
					onChange={changeFormData}
				/>

				<Button type="submit" variant="contained">Send</Button>
			</FormControl>
		</form>
	);
};

export default ChatForm;