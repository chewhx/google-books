import books from '../src/index';

describe('Test search', () => {
  const search = books.search;
  const volumeId = books.volumeId;

  it('Is defined', () => {
    expect(search).toBeDefined();
  });

  it('Search returns results', async () => {
    const res = await search({ q: 'Atomic Habits' });
    expect(Object.keys(res)).toMatchObject(['kind', 'totalItems', 'items']);
  });

  it('Search for book by volume id', async () => {
    const res = await volumeId('lFhbDwAAQBAJ');
    expect(res.id).toBe('lFhbDwAAQBAJ');
    expect(res.selfLink).toBe(
      'https://www.googleapis.com/books/v1/volumes/lFhbDwAAQBAJ'
    );
  });
});
