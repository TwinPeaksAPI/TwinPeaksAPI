import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Quote from '../lib/models/Quote.js';


describe('demo routes', () => {
  beforeEach(() => {
    setup(pool);
  });


  it('creates a quote via Post', async () => {
    const res = await Quote.insert({
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    });

    expect(res.body).toEqual({
      id: '1',
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    });
  });
});
