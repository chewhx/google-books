import { ApiQueryParameters } from '../../types/ApiQueryParameters';
import { StandardQueryParamaters } from '../../types/StandardQueryParamaters';
import parseIntoQueryString from '../../helpers/parseIntoQueryString';
import api from '../api';

export default async (
	standardQueryParams: { q: string } & StandardQueryParamaters,
	apiQueryParams?: ApiQueryParameters
) => {
	const queryString = parseIntoQueryString(standardQueryParams);
	const { data } = await api(
		standardQueryParams.q + '+' + queryString,
		apiQueryParams || {}
	);
	return data;
};
