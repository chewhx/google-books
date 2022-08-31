import { StandardQueryParameters } from "../types/StandardQueryParameters";
type queryString = string;
export default (standardParams: StandardQueryParameters): queryString => {
  const q = Object.entries(standardParams)
    .filter(([, value]) => !!value)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}:${value.join(" ")}`;
      }
      return `${key}:${value}`;
    })
    .join("+")
    // remove 'q:'
    .slice(2);

  return q;
};
