export default function caesar(string, key) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string.charCodeAt(i));
  }
  const arr2 = arr.map((a) => shift(a, key));
  return String.fromCharCode(...arr2);
}

function shift(a, key) {
  // if lowercase:
  if (122 >= a && a >= 97) {
    if (a + (key % 26) > 122) {
      return a + (key % 26) - 26;
    }
    if (a + (key % 26) < 97) {
      return a + (key % 26) + 26;
    } else return a + (key % 26);
  }
  if (90 >= a && a >= 65) {
    if (a + (key % 26) > 90) {
      return a + (key % 26) - 26;
    }
    if (a + (key % 26) < 65) {
      return a + (key % 26) + 26;
    } else return a + (key % 26);
  } else return a;
}
