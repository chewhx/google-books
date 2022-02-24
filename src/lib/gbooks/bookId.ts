import { url } from '../api';
import axios from 'axios';

export default async (bookId: string, dataType?: 'simple' | 'original') => {
	let { data } = await axios({ method: 'get', url: `${url.href}/${bookId}` });

	if (dataType === 'simple') {
		const newData = {
			id: data.id,
			title: data.volumeInfo.title || '',
			subtitle: data.volumeInfo.subtitle || '',
			authors: data.volumeInfo.authors || [],
			description: data.volumeInfo.description || '',
			image: `https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=h1000`,
			categories: data.volumeInfo.categories,
		};
		data = newData;
	}
	return data;
};
