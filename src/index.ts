import makeQueryString from "./helpers/makeQueryString";
import api, { apiGetWithParams } from "./lib/api";
import { ApiQueryParameters } from "./types/ApiQueryParameters";
import { StandardQueryParameters } from "./types/StandardQueryParameters";

export { standard, search, id, title, author, isbn };

async function standard(
  standardParams: StandardQueryParameters,
  apiParams?: ApiQueryParameters
): Promise<any> {
  const q = makeQueryString(standardParams);
  const params = { q, ...apiParams };
  const { data } = await apiGetWithParams(params);
  return data;
}

async function id(volumeId: string): Promise<any> {
  const { data } = await api({ method: "get", url: `/${volumeId}` });
  return data;
}

async function search(
  searchTerm: string,
  standardParams?: Omit<StandardQueryParameters, "q">,
  apiParams?: ApiQueryParameters
) {
  const _standardParams: StandardQueryParameters = {
    q: searchTerm,
    ...standardParams
  };
  const q = makeQueryString(_standardParams);
  const params = { q, ...apiParams };
  const { data } = await apiGetWithParams(params);
  return data;
}

async function title(searchTitle: string, apiParams?: ApiQueryParameters) {
  const q = makeQueryString({ q: searchTitle, intitle: searchTitle });
  const params = { q, ...apiParams };
  const { data } = await apiGetWithParams(params);
  return data;
}

async function author(searchAuthor: string, apiParams?: ApiQueryParameters) {
  const q = makeQueryString({ q: searchAuthor, inauthor: searchAuthor });
  const params = { q, ...apiParams };
  const { data } = await apiGetWithParams(params);
  return data;
}

async function isbn(searchIsbn: string, apiParams?: ApiQueryParameters) {
  const q = makeQueryString({ q: searchIsbn, isbn: searchIsbn });
  const params = { q, ...apiParams };
  const { data } = await apiGetWithParams(params);
  return data;
}
