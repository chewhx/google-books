# @chewhx/google-books

NodeJS Wrapper to search for books on [Google Books API](https://developers.google.com/books/docs/overview).

> [!NOTE]
> From experience, the results return for each api call might differ slightly, even with the same parameters.

## Installation

```bash
  npm install @chewhx/google-books
```

## Imports

Note: All methods a promise.

```javascript
import { search, title, id, author, isbn } from '@chewhx/google-books';
```

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

## API

### Standard Parameters

`standardParams` is an object containing the follow properties.
See full definition [here](https://github.com/chewhx/google-books/blob/master/src/types/StandardQueryParameters.ts).

Refer to [docs](https://developers.google.com/books/docs/v1/using#PerformingSearch) for more detail

```typescript
type StandardQueryParameters = {
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

### API Parameters

`apiParams` is an object containing the following properties.
See full definition [here](https://github.com/chewhx/google-books/blob/master/src/types/ApiQueryParameters.ts).

Refer to [docs](https://developers.google.com/books/docs/v1/using#api_params) for more details

```typescript
type ApiQueryParameters = {
	download?: 'epub';
	filter?: 'partial' | 'full' | 'free-ebooks' | 'paid-ebooks' | 'ebooks';
	langRestrict?:
		| 'aa'
		| 'ab'
		| 'ae'
		| 'af'
		| 'ak'
		| 'am'
		| 'an'
		| 'ar'
		| 'as'
		| 'av'
		| 'ay'
		| 'az'
		| 'ba'
		| 'be'
		| 'bg'
		| 'bh'
		| 'bi'
		| 'bm'
		| 'bn'
		| 'bo'
		| 'br'
		| 'bs'
		| 'ca'
		| 'ce'
		| 'ch'
		| 'co'
		| 'cr'
		| 'cs'
		| 'cu'
		| 'cv'
		| 'cy'
		| 'da'
		| 'de'
		| 'dv'
		| 'dz'
		| 'ee'
		| 'el'
		| 'en'
		| 'eo'
		| 'es'
		| 'et'
		| 'eu'
		| 'fa'
		| 'ff'
		| 'fi'
		| 'fj'
		| 'fo'
		| 'fr'
		| 'fy'
		| 'ga'
		| 'gd'
		| 'gl'
		| 'gn'
		| 'gu'
		| 'gv'
		| 'ha'
		| 'he'
		| 'hi'
		| 'ho'
		| 'hr'
		| 'ht'
		| 'hu'
		| 'hy'
		| 'hz'
		| 'ia'
		| 'id'
		| 'ie'
		| 'ig'
		| 'ii'
		| 'ik'
		| 'io'
		| 'is'
		| 'it'
		| 'iu'
		| 'ja'
		| 'jv'
		| 'ka'
		| 'kg'
		| 'ki'
		| 'kj'
		| 'kk'
		| 'kl'
		| 'km'
		| 'kn'
		| 'ko'
		| 'kr'
		| 'ks'
		| 'ku'
		| 'kv'
		| 'kw'
		| 'ky'
		| 'la'
		| 'lb'
		| 'lg'
		| 'li'
		| 'ln'
		| 'lo'
		| 'lt'
		| 'lu'
		| 'lv'
		| 'mg'
		| 'mh'
		| 'mi'
		| 'mk'
		| 'ml'
		| 'mn'
		| 'mr'
		| 'ms'
		| 'mt'
		| 'my'
		| 'na'
		| 'nb'
		| 'nd'
		| 'ne'
		| 'ng'
		| 'nl'
		| 'nn'
		| 'no'
		| 'nr'
		| 'nv'
		| 'ny'
		| 'oc'
		| 'oj'
		| 'om'
		| 'or'
		| 'os'
		| 'pa'
		| 'pi'
		| 'pl'
		| 'ps'
		| 'pt'
		| 'qu'
		| 'rm'
		| 'rn'
		| 'ro'
		| 'ru'
		| 'rw'
		| 'sa'
		| 'sc'
		| 'sd'
		| 'se'
		| 'sg'
		| 'si'
		| 'sk'
		| 'sl'
		| 'sm'
		| 'sn'
		| 'so'
		| 'sq'
		| 'sr'
		| 'ss'
		| 'st'
		| 'su'
		| 'sv'
		| 'sw'
		| 'ta'
		| 'te'
		| 'tg'
		| 'th'
		| 'ti'
		| 'tk'
		| 'tl'
		| 'tn'
		| 'to'
		| 'tr'
		| 'ts'
		| 'tt'
		| 'tw'
		| 'ty'
		| 'ug'
		| 'uk'
		| 'ur'
		| 'uz'
		| 've'
		| 'vi'
		| 'vo'
		| 'wa'
		| 'wo'
		| 'xh'
		| 'yi'
		| 'yo'
		| 'za'
		| 'zh'
		| 'zu';
	maxResults?: number;
	orderBy?: 'relevance' | 'newest';
	printType?: 'all' | 'books' | 'magazines';
	projection?: 'full' | 'lite';
	startIndex?: number;
	volumeId?: string;
};
```
