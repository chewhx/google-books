# @chewhx/google-books - v4

- Javascript Wrapper to search for books on [Google Books API](https://developers.google.com/books/docs/overview).
- Promise-based
- Requires NodeJS 18+
- No dependencies. Uses native `fetch` api.
- No authentication or API Key needed.
- More info: https://developers.google.com/books/docs/v1/using

> [!NOTE]
> From experience, the results for each api call might differ slightly, even with the same parameters.

## Installation

```bash
  npm install @chewhx/google-books
```

## Imports

Note: All methods a promise.

```javascript
import { search, title, id, author, isbn } from '@chewhx/google-books';
```

## Types

```typescript
import { Query, Params } from '@chewhx/google-books';
```

- [Query](https://github.com/chewhx/google-books/blob/develop-4.0/src/types/Query.ts)
- [Params](https://github.com/chewhx/google-books/blob/develop-4.0/src/types/Params.ts)

## `search`

- Takes in `query` and `params` argument
- The first argument `query` is required.
- `query.q` is a required field

```javascript
// search(query, params)
search({ q: 'Atomic Habits' });
```

### `search` - [special keywords](https://developers.google.com/books/docs/v1/using#PerformingSearch)

```javascript
search({ q: 'Atomic Habits', inauthor: 'James Clear' });
```

- intitle: Returns results where the text following this keyword is found in the title.
- inauthor: Returns results where the text following this keyword is found in the author.
- inpublisher: Returns results where the text following this keyword is found in the publisher.
- subject: Returns results where the text following this keyword is listed in the category list of the volume.
- isbn: Returns results where the text following this keyword is the ISBN number.
- lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
  oclc: Returns results where the text following this keyword is the Online Computer Library Center number.

### `search` - `q` can be empty string.

```javascript
search({ q: '', intitle: 'Atomic Habits', inauthor: 'James Clear' });
```

### `search` - specific parameters

Read more about [API-specific query parameters](https://developers.google.com/books/docs/v1/using#api_params)

```javascript
search({ q: 'Atomic Habits' }, { maxResults: 2 });
search({ q: 'Atomic Habits' }, { download: 'epub' });
```

### `id`

Search for book with google books volume id

```javascript
id('lFhbDwAAQBAJ');
```

### `title`

Search for book with only title

```javascript
title('atomic habits');
```

### `author`

Search for book with only author

```javascript
author('James Clear');
```

### `isbn`

Search for book with only isbn

```javascript
isbn('978-0735211292');
```
