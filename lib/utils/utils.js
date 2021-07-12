export function formatName(name) {
  const words = name.split(' ');
  const lowerCase = words[0].toLowerCase().charAt(0).toUpperCase() + words[0].slice(1);
  const lowerCase2 = words[1].toLowerCase().charAt(0).toUpperCase() + words[1].slice(1);
  console.log(lowerCase, lowerCase2);
  const newName = lowerCase + ' ' + lowerCase2;
  return newName;
}
