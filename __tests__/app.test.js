import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';



describe('demo routes', () => {

  const agent = request.agent(app);

  beforeEach(async () => {
    await setup(pool);
  });

  it.skip('creates a quote via Post', async () => {
    const res = await agent
      .post('/api/lclquotes')
      .send({
        quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
        quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
        personsId: 1
      });

    expect(res.body).toEqual({
      id: expect.any(String),
      quoteText: 'Pete Martell: She\'s dead... Wrapped in plastic.',
      quoteTextOnly: 'She\'s dead... Wrapped in plastic.',
      personsId: '1'
    });
  });

  it('finds all quotes via GET', async () => {
    const quoteOne = {
      id: '70',
      quoteText: 'Dale Cooper: Harry, when Albert finishes up at the Great Northern we’ll meet back at the station. I’m ready to lay the whole thing out. Sheriff Truman: Rocks and bottles? Dale Cooper: Chalk and blackboard will be just fine. Sheriff Truman: Jelly donuts? Dale Cooper: Harry, that goes without saying.',
      quoteTextOnly: 'Harry, when Albert finishes up at the Great Northern we’ll meet back at the station. I’m ready to lay the whole thing out. Rocks and bottles? Chalk and blackboard will be just fine. Jelly donuts? Harry, that goes without saying.',
      personsId: '6'
    };
    const quoteTwo = {
      id: '64',
      quoteText: 'Dr. Jacoby: It was her you see. The necklace, a divided heart. Laura was, in fact... well she was living a double life. Two people. Yeah, but then, then when I saw her that last time she, I don’t know, she seemed to have reached a kind of peace with herself. Now I believe that what she had in fact arrived at was a decision to end her life. Sheriff Truman: Are you saying Laura wanted to die? Dale Cooper: Doctor, Laura Palmer did not commit suicide. Dr. Jacoby: No, no, but maybe she allowed herself to be killed.',
      quoteTextOnly: 'It was her you see. The necklace, a divided heart. Laura was, in fact... well she was living a double life. Two people. Yeah, but then, then when I saw her that last time she, I don’t know, she seemed to have reached a kind of peace with herself. Now I believe that what she had in fact arrived at was a decision to end her life. Are you saying Laura wanted to die? Doctor, Laura Palmer did not commit suicide. No, no, but maybe she allowed herself to be killed.',
      personsId: '3'
    };
    const quoteThree = {
      id: '40',
      quoteText: 'Deputy Hawk: One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      quoteTextOnly: 'One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      personsId: '13'
    };

    const res = await request(app)
      .get('/api/lclquotes');

    expect(res.body).toEqual(expect.arrayContaining([quoteOne, quoteTwo, quoteThree]));
  });

  it('gets a quote with id via GET', async () => {
    const quote = {
      id: '40',
      quoteText: 'Deputy Hawk: One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      quoteTextOnly: 'One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      personsId: '13'
    };
    const res = await request(app).get('/api/lclquotes/40');
    expect(res.body).toEqual(quote);

  });

  it('gets a quote by persons name via GET', async () => {
    const quote = {
      id: '137',
      quoteText: 'Pete: I owe it all to the immortal Master: José Raúl Capablanca. If there\'s chessboards in heaven, you\'ll find Jose sittin\' across from the Lord.',
      quoteTextOnly: 'I owe it all to the immortal Master: José Raúl Capablanca. If there\'s chessboards in heaven, you\'ll find Jose sittin\' across from the Lord.',
      personsId: '35'
    };
    const quoteTwo = {
      id: '418',
      quoteText: 'Pete: I owe it all to the immortal Master: José Raúl Capablanca. If there\'s chessboards in heaven, you\'ll find Jose sittin\' across from the Lord.',
      quoteTextOnly: 'I owe it all to the immortal Master: José Raúl Capablanca. If there\'s chessboards in heaven, you\'ll find Jose sittin\' across from the Lord.',
      personsId: '35'
    };
    const res = await request(app).get('/api/characters/Pete');
    expect(res.body).toEqual([quote, quoteTwo]);
  });

});
