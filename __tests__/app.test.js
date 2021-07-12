import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import { formatName } from '../lib/utils/utils.js';




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
      id: '45',
      quoteText: 'Dale Cooper: Harry, when Albert finishes up at the Great Northern we’ll meet back at the station. I’m ready to lay the whole thing out. Sheriff Truman: Rocks and bottles? Dale Cooper: Chalk and blackboard will be just fine. Sheriff Truman: Jelly donuts? Dale Cooper: Harry, that goes without saying.',
      quoteTextOnly: 'Harry, when Albert finishes up at the Great Northern we’ll meet back at the station. I’m ready to lay the whole thing out. Rocks and bottles? Chalk and blackboard will be just fine. Jelly donuts? Harry, that goes without saying.',
    };
    const quoteTwo = {
      id: '42',
      quoteText: 'Dr. Jacoby: It was her you see. The necklace, a divided heart. Laura was, in fact... well she was living a double life. Two people. Yeah, but then, then when I saw her that last time she, I don’t know, she seemed to have reached a kind of peace with herself. Now I believe that what she had in fact arrived at was a decision to end her life. Sheriff Truman: Are you saying Laura wanted to die? Dale Cooper: Doctor, Laura Palmer did not commit suicide. Dr. Jacoby: No, no, but maybe she allowed herself to be killed.',
      quoteTextOnly: 'It was her you see. The necklace, a divided heart. Laura was, in fact... well she was living a double life. Two people. Yeah, but then, then when I saw her that last time she, I don’t know, she seemed to have reached a kind of peace with herself. Now I believe that what she had in fact arrived at was a decision to end her life. Are you saying Laura wanted to die? Doctor, Laura Palmer did not commit suicide. No, no, but maybe she allowed herself to be killed.',
    };
    const quoteThree = {
      id: '26',
      quoteText: 'Deputy Hawk: One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      quoteTextOnly: 'One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
    };

    const res = await request(app)
      .get('/api/lclquotes');

    expect(res.body).toEqual(expect.arrayContaining([quoteOne, quoteTwo, quoteThree]));
  });

  it('gets a quote with id via GET', async () => {
    const quote = {
      id: '26',
      quoteText: 'Deputy Hawk: One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      quoteTextOnly: 'One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
    };
    const res = await request(app).get('/api/lclquotes/26');
    expect(res.body).toEqual(quote);

  });

  it('gets a quote by persons name via GET', async () => {
    const quote = {
      id: '17',
      quoteText: '[Cooper\'s dream, sitting in a chair in the red room. The Man from Another Place twitches uncontrollably with his back to Cooper. Cooper stares at a smiling Laura Palmer.] The Man from Another Place: [Claps hands together, speaking in a strangely paced, distorted voice] Let\'s rock! I\'ve got good news. That gum you like is going to come back in style. [about Laura] She\'s my cousin. But doesn\'t she look almost exactly like Laura Palmer? Dale Cooper: But... it is Laura Palmer. Are you Laura Palmer? Laura Palmer: [speaking in a similarly distorted voice] I feel like I know her, but sometimes my arms bend back. The Man from Another Place: She\'s filled with secrets. Where we\'re from, the birds sing a pretty song, and there\'s always music in the air.',
      quoteTextOnly: '[Cooper\'s dream, sitting in a chair in the red room. The Man from Another Place twitches uncontrollably with his back to Cooper. Cooper stares at a smiling Laura Palmer.] The Man from Another Place: [Claps hands together, speaking in a strangely paced, distorted voice] Let\'s rock! I\'ve got good news. That gum you like is going to come back in style. [about Laura] She\'s my cousin. But doesn\'t she look almost exactly like Laura Palmer? But... it is Laura Palmer. Are you Laura Palmer? [speaking in a similarly distorted voice] I feel like I know her, but sometimes my arms bend back. The Man from Another Place: She\'s filled with secrets. Where we\'re from, the birds sing a pretty song, and there\'s always music in the air.',
    };
    const quoteTwo = {
      id: '36',
      quoteText: 'Laura Palmer: [On tape] What’s up doc? Just a few words before I go to sleep. I feel like I’m going to dream tonight. Big bad ones. You know, the kind you like. Its easier talking into the recorder. I guess I feel I can say anything. All my secrets. The naked ones. I know you like those doc. I know you like me too. That’ll be my little secret, okay? Just like your coconut. Why is it so easy to make men like me? And I don’t even have to try very hard. Maybe, if it was harder...',
      quoteTextOnly: '[On tape] What’s up doc? Just a few words before I go to sleep. I feel like I’m going to dream tonight. Big bad ones. You know, the kind you like. Its easier talking into the recorder. I guess I feel I can say anything. All my secrets. The naked ones. I know you like those doc. I know you like me too. That’ll be my little secret, okay? Just like your coconut. Why is it so easy to make men like me? And I don’t even have to try very hard. Maybe, if it was harder...',
    };
    const quoteThree = {
      id: '39',
      quoteText: 'Laura Palmer: [On tape] Hey, what’s up, doc? Its Laura, in case you haven’t guessed. It’s Thursday the twenty-third and I’m so bored. Actually, I’m in kind of a weird mood. God, James is sweet, but he’s so dumb, and right now I can only take so much of sweet. Hey, remember that mystery man I told you about? Well, if I tell you his name then you’re gonna be in trouble. He wouldn’t be such a mystery man anymore but you might be history, man. I think a couple of times he’s tried to kill me. But guess what? As you know, I sure got off on it. Hmm, isn’t sex weird? This guy can really light my F-I-R-E as in red corvette. Uh-oh, here comes mom with milk and cookies.',
      quoteTextOnly: '[On tape] Hey, what’s up, doc? Its Laura, in case you haven’t guessed. It’s Thursday the twenty-third and I’m so bored. Actually, I’m in kind of a weird mood. God, James is sweet, but he’s so dumb, and right now I can only take so much of sweet. Hey, remember that mystery man I told you about? Well, if I tell you his name then you’re gonna be in trouble. He wouldn’t be such a mystery man anymore but you might be history, man. I think a couple of times he’s tried to kill me. But guess what? As you know, I sure got off on it. Hmm, isn’t sex weird? This guy can really light my F-I-R-E as in red corvette. Uh-oh, here comes mom with milk and cookies.',
    };
    const quoteFour = {
      id: '124',
      quoteText: 'Laura Palmer: Hello, Agent Cooper. I\'ll see you again in 25 years.',
      quoteTextOnly: 'Hello, Agent Cooper. I\'ll see you again in 25 years.',
    };
    const quoteFive = {
      id: '128',
      quoteText: 'Laura Palmer: Hello, Agent Cooper. You can go out now. Do you recognize me? Dale Cooper: Are you Laura Palmer? Laura Palmer: I feel like I know her, but sometimes my arms bend back. Dale Cooper: Who are you? Laura Palmer: I am Laura Palmer. Dale Cooper: But Laura Palmer is dead. Laura Palmer: I am dead. Yet I live.',
      quoteTextOnly: 'Hello, Agent Cooper. You can go out now. Do you recognize me? Are you Laura Palmer? I feel like I know her, but sometimes my arms bend back. Who are you? I am Laura Palmer. But Laura Palmer is dead. I am dead. Yet I live.',
    };
    const res = await request(app).get('/api/characters/laura palmer');
    expect(res.body).toEqual([quote, quoteTwo, quoteThree, quoteFour, quoteFive]);
  });

  it('can search for quotes by letters in words via GET', async () => {
    const quote = {
      id: '26',
      quoteText: 'Deputy Hawk: One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      quoteTextOnly: 'One woman can make you fly like an eagle, another can give you the strength of a lion, but only one in the cycle of life can fill your heart with wonder and the wisdom that you have known a singular joy. I wrote that for my girlfriend.',
      name: 'Deputy Hawk'
    };
    const res = await request(app).get('/api/lclquotes/search/eagle');
    expect(res.body).toEqual([quote]);
  });

  it('formats a name to lowercase and then uppercases the first letter', async () => {
    const actual = formatName('hELLO');
    expect(actual).toEqual('Hello');

    const actualTwo = formatName('hELLO RFSKJJS');
    expect(actualTwo).toEqual('Hello Rfskjjs');
  });

  it('grabs a random quote VIA GET', async () => {

    const res = await request(app).get('/api/random');

    expect(res.body).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      quoteText: expect.any(String),
      quoteTextOnly: expect.any(String)
    });
  });

  it('limits number of quotes via GET', async () => {

    const res = await request(app).get('/api/lclquotes/limit/1');
console.log(res.body);
    expect(res.body.length).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      quoteText: expect.any(String),
      quoteTextOnly: expect.any(String)
    });
  });

});
