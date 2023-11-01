import { Schema$Volume2 } from '../types/Resource';
import { Params } from '../types/Params';
import { Query } from '../types/Query';

const url = new URL('https://www.googleapis.com/books/v1/volumes');

/**
 *  Perform a volumes search on Google Books API
 */
export async function search(
	{ q, intitle, inauthor, inpublisher, subject, isbn, lccn, oclc }: Query,
	params?: Params
): Promise<Schema$Volume2> {
	if (intitle) {
		q += `intitle:${intitle}`;
	}

	if (inauthor) {
		q += `inauthor:${inauthor}`;
	}
	if (inpublisher) {
		q += `inpublisher:${inpublisher}`;
	}

	if (subject) {
		q += `subject:${subject}`;
	}

	if (isbn) {
		q += `isbn:${isbn}`;
	}

	if (lccn) {
		q += `lccn:${lccn}`;
	}

	if (oclc) {
		q += `oclc:${oclc}`;
	}

	url.searchParams.set('q', q);

	if (params) {
		const arrayOfParams = Object.entries(params);
		arrayOfParams.forEach(([key, value]) => {
			url.searchParams.set(key, String(value));
		});
	}

	const res = await fetch(url, { method: 'GET' });

	const json = await res.json();

	return json;
}
