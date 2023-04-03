import { prisma } from '~/lib/db';
import type { Actions, PageServerLoad } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const content = data.get('content') as string;
		await prisma.notes.create({
			data: {
				id: 'a',
				user_id: 'newt',
				title: '',
				content
			}
		});
	}
} satisfies Actions;

export const load = (async () => {
	const notes = await prisma.notes.findMany();
	return {
		notes
	};
}) satisfies PageServerLoad;
