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
      id: expect.any(String),
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    });
  });

  it('finds all quotes via GET', async () => {
    const quoteOne = {
      id: expect.any(String),
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    };

    const quoteTwo = {
      id: expect.any(String),
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    };

    const quoteThree = {
      id: expect.any(String),
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      persons: ['Pete Martell']
    };

    const res = await request(app).get('/api/lclquotes');

    expect(res.body).toEqual(expect.arrayContaining([quoteOne, quoteTwo, quoteThree]));
  });


  it('gets a quote with id via GET', async () => {
    const quote = {
      'id': '6',
      'quoteText': 'Dale Cooper: Who\'s the lady with the log? Sheriff Truman: We call her the Log Lady. Log Lady: Shhhhhhh!',
      'quoteTextOnly': 'Who\'s the lady with the log? We call her the Log Lady. Shhhhhhh!',
      'persons': [
        'Dale Cooper',
        'Sheriff Truman',
        'Log Lady'
      ]
    };
    const res = await request(app).get('/api/lclquotes/6');
    expect(res.body).toEqual(quote);

  });
});
