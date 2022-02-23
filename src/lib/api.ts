import axios from 'axios';
import { ApiQueryParameters } from '../types/ApiQueryParameters';

export default (searchParams: string, apiParams: ApiQueryParameters) => {
	const url = new URL('https://www.googleapis.com/books/v1/volumes');

	url.searchParams.append('q', searchParams);

	return axios({
		method: 'get',
		url: url.href,
		params: apiParams || {},
	});
};
