interface IMessage {
	_id?: string;
	author: string;
	message: string;
	datetime?: string;
}

interface IAlert {
	type: string;
	show: boolean;
}