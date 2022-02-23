import { ApiQueryParameters } from '../../types/ApiQueryParameters';
import { StandardQueryParameters } from '../../types/StandardQueryParameters';
import parseIntoQueryString from '../../helpers/parseIntoQueryString';
import api from '../api';

export default async (
	standardQueryParams: { q: string } & StandardQueryParameters,
	apiQueryParams?: ApiQueryParameters
) => {
	const queryString = parseIntoQueryString(standardQueryParams);
	const { data } = await api(
		standardQueryParams.q + '+' + queryString,
		apiQueryParams || {}
	);
	return data;
};
