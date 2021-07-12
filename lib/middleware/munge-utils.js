export function formatQuotes(persons) {
  return persons.map(person => {
    return {
      name: person.persons,
      quote: person.quoteTextOnly
    };
  });
}

