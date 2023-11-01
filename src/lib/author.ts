import { Schema$Volume2 } from '../types/Resource';

/**
 *  Perform an author search on Google Books API
 */
export async function author(author: string): Promise<Schema$Volume2> {
	const url = new URL('https://www.googleapis.com/books/v1/volumes');
	url.searchParams.set('q', `inauthor:${author}`);
	const res = await fetch(url, { method: 'GET' });
	const json = await res.json();
	return json;
}
