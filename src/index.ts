import makeQueryString from './helpers/makeQueryString';
import api from './lib/api';
import { ApiQueryParameters } from './types/ApiQueryParameters';
import { StandardQueryParameters } from './types/StandardQueryParameters';

const search = async (
  standardParams: StandardQueryParameters,
  apiParams?: ApiQueryParameters
): Promise<any> => {
  const q = makeQueryString(standardParams);
  const params = { q, ...apiParams };
  const { data } = await api({ method: 'get', params });
  return data;
};

const volumeId = async (volumeId: string): Promise<any> => {
  const { data } = await api({ method: 'get', url: `/${volumeId}` });
  return data;
};

export default { search, volumeId };
