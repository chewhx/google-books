import * as gbooks from '../src/index';

describe('Test gbooks()', () => {
	it('Is successful, return maxResults of 5', () => {
		return gbooks.query({ q: 'habits' }, { maxResults: 5 }).then((data) => {
			expect(Object.keys(data)).toMatchObject(['kind', 'totalItems', 'items']);
			expect(data.items.length).toBe(5);
		});
	});
});

describe('Test gbooks.query()', () => {
	it('Is successful, return maxResults of 5', () => {
		return gbooks.search('habits', {}, { maxResults: 5 }).then((data) => {
			expect(Object.keys(data)).toMatchObject(['kind', 'totalItems', 'items']);
			expect(data.items.length).toBe(5);
		});
	});
});

describe('Test gbooks.simple()', () => {
	it('Is successful and items are simple data', () => {
		return gbooks.simple('habits', {}, { maxResults: 6 }).then((data) => {
			expect(Object.keys(data)).toMatchObject(['kind', 'totalItems', 'items']);
			expect(data.items.length).toBe(6);
			expect(Object.keys(data.items[0])).toMatchObject([
				'id',
				'title',
				'subtitle',
				'authors',
				'description',
				'image',
				'categories',
			]);
		});
	});
});

describe('Test gbooks.bookId()', () => {
	it('Is successful', () => {
		return gbooks.bookId('lFhbDwAAQBAJ').then((data) => {
			expect(data.id).toBe('lFhbDwAAQBAJ');
			expect(data.selfLink).toBe(
				'https://www.googleapis.com/books/v1/volumes/lFhbDwAAQBAJ'
			);
		});
	});
});
