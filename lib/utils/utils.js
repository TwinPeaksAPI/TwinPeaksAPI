export function formatName(name) {
  const words = name.split(' ');
  if (words.length === 1) {
    const lowerCase = words[0].toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.toLowerCase().slice(1);
  }
  else {
    const lowerCase = words[0].toLowerCase();
    const lowerCase2 = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    const lowerCase3 = words[1].toLowerCase();
    const lowerCase4 = lowerCase3.charAt(0).toUpperCase() + lowerCase3.slice(1);
    const newName = lowerCase2 + ' ' + lowerCase4;
    return newName;
  }
}



