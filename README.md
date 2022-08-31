# @chewhx/google-books

NodeJS Wrapper to search for books on [Google Books API](https://developers.google.com/books/docs/overview).

## Installation

```bash
  npm install @chewhx/google-books
```

## Report issues or bugs

Create a new issue [here](https://github.com/chewhx/google-books/issues). Set the label to "bug".

## Imports

```javascript
const gbooks = require('@chewhx/google-books');
// OR
import gbooks from '@chewhx/google-books'
```

## How to use

All methods returns a promise.

### Search for a book 

```javascript
gbooks.search('atomic habits').then((res)=>console.log(res))
```
### Search for a book with [standard parameters](#standard-parameters)

```javascript
gbooks.search('atomic habits', {inauthor:'James Clear'}).then((res)=>console.log(res))
```
### Search for a book with [standard parameters](#standard-parameters) and [api parameters](#api-parameters)

```javascript
gbooks.search('atomic habits', {inauthor:'James Clear'}, {maxResults: 10}).then((res)=>console.log(res))
```

### Search for a book with ONLY [standard parameters](#standard-parameters), and [api parameters](#api-parameters)

```javascript
gbooks.standard({intitle: 'atomic habits', inauthor:'James Clear'}, {maxResults: 10}).then((res)=>console.log(res))
```

### Search for book with google books id

```javascript
gbooks.id("lFhbDwAAQBAJ").then((res)=>console.log(res))
```

### Search for book with only title 

```javascript
gbooks.title("atomic habits").then((res)=>console.log(res))
```

### Search for book with only author 

```javascript
gbooks.author("james clear").then((res)=>console.log(res))
```

### Search for book with only isbn 

```javascript
gbooks.isbn("978-0735211292").then((res)=>console.log(res))
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
	langRestrict?:| 'aa'| 'ab'| 'ae'| 'af'| 'ak'| 'am'| 'an'| 'ar'| 'as'| 'av'| 'ay'| 'az'| 'ba'| 'be'| 'bg'| 'bh'| 'bi'| 'bm'| 'bn'| 'bo'| 'br'| 'bs'| 'ca'| 'ce'| 'ch'| 'co'| 'cr'| 'cs'| 'cu'| 'cv'| 'cy'| 'da'| 'de'| 'dv'| 'dz'| 'ee'| 'el'| 'en'| 'eo'| 'es'| 'et'| 'eu'| 'fa'| 'ff'| 'fi'| 'fj'| 'fo'| 'fr'| 'fy'| 'ga'| 'gd'| 'gl'| 'gn'| 'gu'| 'gv'| 'ha'| 'he'| 'hi'| 'ho'| 'hr'| 'ht'| 'hu'| 'hy'| 'hz'| 'ia'| 'id'| 'ie'| 'ig'| 'ii'| 'ik'| 'io'| 'is'| 'it'| 'iu'| 'ja'| 'jv'| 'ka'| 'kg'| 'ki'| 'kj'| 'kk'| 'kl'| 'km'| 'kn'| 'ko'| 'kr'| 'ks'| 'ku'| 'kv'| 'kw'| 'ky'| 'la'| 'lb'| 'lg'| 'li'| 'ln'| 'lo'| 'lt'| 'lu'| 'lv'| 'mg'| 'mh'| 'mi'| 'mk'| 'ml'| 'mn'| 'mr'| 'ms'| 'mt'| 'my'| 'na'| 'nb'| 'nd'| 'ne'| 'ng'| 'nl'| 'nn'| 'no'| 'nr'| 'nv'| 'ny'| 'oc'| 'oj'| 'om'| 'or'| 'os'| 'pa'| 'pi'| 'pl'| 'ps'| 'pt'| 'qu'| 'rm'| 'rn'| 'ro'| 'ru'| 'rw'| 'sa'| 'sc'| 'sd'| 'se'| 'sg'| 'si'| 'sk'| 'sl'| 'sm'| 'sn'| 'so'| 'sq'| 'sr'| 'ss'| 'st'| 'su'| 'sv'| 'sw'| 'ta'| 'te'| 'tg'| 'th'| 'ti'| 'tk'| 'tl'| 'tn'| 'to'| 'tr'| 'ts'| 'tt'| 'tw'| 'ty'| 'ug'| 'uk'| 'ur'| 'uz'| 've'| 'vi'| 'vo'| 'wa'| 'wo'| 'xh'| 'yi'| 'yo'| 'za'| 'zh'| 'zu';
	maxResults?: number;
	orderBy?: 'relevance' | 'newest';
	printType?: 'all' | 'books' | 'magazines';
	projection?: 'full' | 'lite';
	startIndex?: number;
	volumeId?: string;
};
```


