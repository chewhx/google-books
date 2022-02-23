import parseIntoQueryString from '../../helpers/parseIntoQueryString';
import { ApiQueryParameters } from '../../types/ApiQueryParameters';
import { StandardQueryParameters } from '../../types/StandardQueryParameters';
import api from '../api';

export default async (
	q: string = '',
	standardQueryParams?: StandardQueryParameters,
	apiQueryParams?: ApiQueryParameters
) => {
	if (!standardQueryParams) {
		standardQueryParams = {};
	}
	const queryString: string = parseIntoQueryString(standardQueryParams) || '';

	const { data } = await api(q + '+' + queryString, apiQueryParams || {});
	return data;
};
