# @chewhx/google-books

NodeJS Wrapper to search for books on [Google Books API](https://developers.google.com/books/docs/overview).

## Installation

```bash
  npm install @chewhx/google-books
```

## Report issues or bugs

Create a new issue [here](https://github.com/chewhx/google-books/issues). Set the label to "bug".

## Usage 

```javascript
const books = require('@chewhx/google-books');

books.search({
  q: 'atomic habits',
  inauthor: 'James Clear'
})

books.volumeId("lFhbDwAAQBAJ")

```

## API

### book.volumeId(string) => Promise\<any>

### book.search(standardParams: StandardQueryParameters, apiParams?: ApiQueryParameters) => Promise\<any>

`standardParams` is an object containing the follow properties. 
See full definition [here](https://github.com/chewhx/google-books/blob/master/src/types/StandardQueryParameters.ts).

Refer to [docs](https://developers.google.com/books/docs/v1/using#PerformingSearch) for more detail
```
 {
  q: string; 
  intitle?: string;
  inauthor?: string[] | string;
  inpublisher?: string[] | string;
  subject?: string[] | string;
  isbn?: string[] | string;
  lccn?: string[] | string;
  oclc?: string[] | string;
};

```

`apiParams` (optional) is an object containing the following properties. 
See full definition [here](https://github.com/chewhx/google-books/blob/master/src/types/ApiQueryParameters.ts).

Refer to [docs](https://developers.google.com/books/docs/v1/using#api_params) for more details

```
{
	download?: 'epub';
	filter?: 'partial' | 'full' | 'free-ebooks' | 'paid-ebooks' | 'ebooks';
	langRestrict?: ...,
	maxResults?: number;
	orderBy?: 'relevance' | 'newest';
	printType?: 'all' | 'books' | 'magazines';
	projection?: 'full' | 'lite';
	startIndex?: number;
	volumeId?: string;
};

```


## Demo

Search for 'atomic habits', by a specific author, and return maximum of 10 results.

```javascript
const { search } = require('@chewhx/google-books');

search({ q: 'atomic habits', inauthor: 'james clear' }, { maxResults: 10 })
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
```

Results

```json
{
	"kind": "books#volume",
	"id": "lFhbDwAAQBAJ",
	"etag": "pzN/90UcotY",
	"selfLink": "https://www.googleapis.com/books/v1/volumes/lFhbDwAAQBAJ",
	"volumeInfo": {
		"title": "Atomic Habits",
		"subtitle": "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
		"authors": ["James Clear"],
		"publisher": "Penguin",
		"publishedDate": "2018-10-16",
		"description": "...",
	  ...
	},
	"saleInfo": {...},
	"accessInfo": {...},
	"searchInfo": {
		"textSnippet": "Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an ..."
	}
}
```
