import { id } from '../lib/id';

test('id returns results of a book', async () => {
	const res = await id('rruOEAAAQBAJ');
	expect(res).toBeDefined();
	expect(res).not.toHaveProperty('items');
	expect(res).not.toHaveProperty('nextPageToken');
});
