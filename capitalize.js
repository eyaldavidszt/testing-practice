export default function capitalize(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
