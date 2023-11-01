import { Schema$Volume } from '../types/Resource';

/**
 *  Perform a volume Id search on Google Books API
 */
export async function id(bookId: string): Promise<Schema$Volume> {
	const res = await fetch(
		`https://www.googleapis.com/books/v1/volumes/${bookId}`,
		{ method: 'GET' }
	);
	const json = await res.json();
	return json;
}
