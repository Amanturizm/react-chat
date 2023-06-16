import { Avatar, Box, Card, Divider, Stack, Typography } from "@mui/material";
import React, {useEffect} from 'react';

interface Props {
	message: IMessage;
}

const ChatBodyItem: React.FC<Props> = ({ message }) => {
	return (
		<Card className="bg-dark rounded" sx={{ overflow: 'visible' }}>
			<Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
				<Avatar variant="rounded" />
				<Stack spacing={0.5}>
					<Typography className="text-light" fontSize={22} fontWeight={700}>{ message.author }</Typography>
					<Typography className="text-light" variant="body2">
						{ message.datetime }
					</Typography>
				</Stack>
			</Box>
			<hr className="m-0 text-white" />
			<Stack sx={{ m: 2 }} className="text-light">
				{ message.message }
			</Stack>
		</Card>
	);
};

export default ChatBodyItem;