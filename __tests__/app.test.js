import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Quote from '../lib/models/Quote.js';


describe('demo routes', () => {

  const agent = request.agent(app);

  beforeEach(() => {
    setup(pool);
  });


  it('creates a quote via Post', async () => {
    const res = await agent
      .post('/api/lclquotes')
      .send({
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

  it('finds all quotes via GET', async () => {
    const quoteOne = await Quote.insert({
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    });

    const quoteTwo = await Quote.insert({
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    });

    const quoteThree = await Quote.insert({
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    });

    const res = await request(app).get('/api/lclquotes');

    expect(res.body).toEqual([quoteOne, quoteTwo, quoteThree]);
  });
});
