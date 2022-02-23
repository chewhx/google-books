# @chewhx/google-books

NodeJS Wrapper to search for books on [Google Books API](https://developers.google.com/books/docs/overview).

## Installation

```bash
  npm i @chewhx/google-books
```

## Demo

Search for 'atomic habits', by a specific author, and return maximum of 10 results.

```javascript
const { search } = require('@chewhx/google-books');

/*
search (
	q: string,
	standardQueryParams?: StandardQueryParamaters,
	apiQueryParams?: ApiQueryParameters
) {}
*/
search('atomic habits', { inauthor: 'james clear' }, { maxResults: 10 })
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

## Documentation

There are three main functions: `search`, `query` and `simple`.

They are async functions. You have to `await` and `catch` errors yourself.

### Require syntax

```javascript
// Import all three functions
const gbooks = require('@chewhx/google-books');

// Import specific functions
const { search, query, simple } = require('@chewhx/google-books');
```

### Import syntax

```javascript
// Import all three functions
import * as gbooks from '@chewhx/google-books';

// Import specific functions
import { search, query, simple } from '@chewhx/google-books';
```

### `search`

Search for general keywords.

Options: standard parameters and api specific parameters.

```typescript
search(
	q: string,
	standardQueryParams?: StandardQueryParameters,
	apiQueryParams?: ApiQueryParameters
)
.then((res) => console.log(res))
.catch((err) => console.log(err))

```

### `query`

Almost the same as `search`, except it assumes you would like to search or query with more details. You must provide standard query parameters.

```typescript
query(
	standardQueryParams: StandardQueryParameters,
	apiQueryParams?: ApiQueryParameters
)
.then((res) => console.log(res))
.catch((err) => console.log(err))

```

### `simple`

Same as `search`, but returns concise results.

```typescript
simple(
	q: string,
	standardQueryParams?: StandardQueryParameters,
	apiQueryParams?: ApiQueryParameters
)
.then((res) => console.log(res))
.catch((err) => console.log(err))
```

Results

```json
{
	"id": "lFhbDwAAQBAJ",
	"title": "Atomic Habits",
	"subtitle": "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
	"authors": ["James Clear"],
	"description": "The #1 New York Times bestseller. Over 3 million copies sold! Tiny Changes, Remarkable Results...",
	"image": "https://books.google.com/books/publisher/content/images/frontcover/lFhbDwAAQBAJ?fife=h1000",
	"categories": ["Business & Economics"]
}
```
