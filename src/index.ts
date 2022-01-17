import RequestParams from "./models/RequestParams";
import { IQuery } from "./models/Query";
import parseOptions from "./utils/options";
import { Method } from "axios";
import api from "./utils/api";

const googleBooks: (
  _query: string | IQuery,
  _options?: IQuery
) => Promise<Record<string, any>> = async (_query, _options) => {
  let queryString: string = "";
  let requestParams: RequestParams = new RequestParams({ q: "" });
  let method: Method = "GET";

  if (typeof _query === "string") {
    // process the options and add to query
    queryString += _query;
    if (_options) {
      queryString += parseOptions(_options);
    }
    requestParams = new RequestParams({
      q: queryString,
      ..._options,
    });
  }

  if (typeof _query === "object") {
    queryString += parseOptions(_query);
    requestParams = new RequestParams({
      q: queryString,
      ..._query,
    });
  }

  const { data } = await api({ method, params: requestParams });
  return data;
};

export default googleBooks;

googleBooks("james clear", { maxResults: 3 })
  .then((res) => console.log(res.items))
  .catch((e) => console.error(e));
