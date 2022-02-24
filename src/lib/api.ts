import axios from 'axios';
import { ApiQueryParameters } from '../types/ApiQueryParameters';

const googleApiUrl = 'https://www.googleapis.com/books/v1/volumes';

export const url = new URL(googleApiUrl);

export default (searchParams: string, apiParams: ApiQueryParameters) => {
	const url = new URL(googleApiUrl);
	url.searchParams.append('q', searchParams);

	return axios({
		method: 'get',
		url: url.href,
		params: apiParams || {},
	});
};
