import { Avatar, Box, Card, Divider, Stack, Typography } from "@mui/material";
import React from 'react';

interface Props {
	message: IMessage;
}

const ChatBodyItem: React.FC<Props> = ({ message }) => {
	return (
		<Card className="bg-dark rounded">
			<Box sx={{ p: 2, display: 'flex', gap: 2 }}>
				<Avatar variant="rounded" />
				<Stack spacing={0.5}>
					<Typography className="text-light" fontSize={22} fontWeight={700}>{ message.author }</Typography>
					<Typography variant="body2">
						{ message.datetime }
					</Typography>
				</Stack>
			</Box>
			<hr className="m-0 text-white" />
			<Stack sx={{ p: 2, pt: 0 }} className="text-light">
				{ message.message }
			</Stack>
		</Card>
	);
};

export default ChatBodyItem;