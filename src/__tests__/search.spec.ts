import { search } from '..';
import { Params } from '../types/Params';
import { Query } from '../types/Query';

test('search is defined', () => {
	expect(search).toBeDefined();
});

test('search for q only, returns results', async () => {
	const query = { q: 'Atomic Habits' };
	const res = await search(query);

	expect(res).toBeDefined();
	expect(res.kind).toMatchInlineSnapshot(`"books#volumes"`);
	expect(res.items).toBeDefined();
	expect(res.items?.length).toBe(10);
});

test('search for q and params, returns results', async () => {
	const query: Query = { q: 'Atomic Habits' };
	const params: Params = { maxResults: 1 };
	const res = await search(query, params);

	expect(res).toBeDefined();
	expect(res.kind).toMatchInlineSnapshot(`"books#volumes"`);
	expect(res.items).toBeDefined();
	expect(res.items?.length).toBe(1);
});

test('q can be empty string', async () => {
	const query: Query = { q: '', intitle: 'Atomic Habits' };
	const params: Params = { maxResults: 1 };
	const res = await search(query, params);

	expect(res).toBeDefined();
	expect(res.kind).toMatchInlineSnapshot(`"books#volumes"`);
	expect(res.items).toBeDefined();
	expect(res.items?.length).toBe(1);
});
