import parseIntoQueryString from '../../helpers/parseIntoQueryString';
import { ApiQueryParameters } from '../../types/ApiQueryParameters';
import { StandardQueryParamaters } from '../../types/StandardQueryParamaters';
import api from '../api';

export default async (
	q: string = '',
	standardQueryParams?: StandardQueryParamaters,
	apiQueryParams?: ApiQueryParameters
) => {
	if (!standardQueryParams) {
		standardQueryParams = {};
	}
	const queryString: string = parseIntoQueryString(standardQueryParams) || '';

	const { data } = await api(q + '+' + queryString, apiQueryParams || {});
	return data;
};
