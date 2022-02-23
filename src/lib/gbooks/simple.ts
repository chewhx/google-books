import { ApiQueryParameters } from '../../types/ApiQueryParameters';
import { StandardQueryParamaters } from '../../types/StandardQueryParamaters';
import query from './search';

export default async (
	q: string = '',
	standardQueryParams?: StandardQueryParamaters,
	apiQueryParams?: ApiQueryParameters
) => {
	const data = await query(q, standardQueryParams, apiQueryParams);
	const newItems = data.items.map((each: any) => ({
		id: each.id,
		title: each.volumeInfo.title || '',
		subtitle: each.volumeInfo.subtitle || '',
		authors: each.volumeInfo.authors || [],
		description: each.volumeInfo.description || '',
		image: `https://books.google.com/books/publisher/content/images/frontcover/${each.id}?fife=h1000`,
		categories: each.volumeInfo.categories,
	}));

	return { ...data, items: newItems };
};
