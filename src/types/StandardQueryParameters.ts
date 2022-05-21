export type StandardQueryParameters = {
  q: string;
  intitle?: string;
  inauthor?: string[] | string;
  inpublisher?: string[] | string;
  subject?: string[] | string;
  isbn?: string[] | string;
  lccn?: string[] | string;
  oclc?: string[] | string;
};
