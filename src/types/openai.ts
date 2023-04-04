export type OpenAIResponse = {
	error?: {
		code: null;
		message: string;
		param: null;
		type: 'insufficient_quota' | string;
	};
	choices: { message: { content: string } }[];
};
