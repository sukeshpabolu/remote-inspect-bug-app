import { query } from '$app/server';

export const getItem = query(() => {
	return {
		x: "Hello World"
	}
});
