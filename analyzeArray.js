export default function analyzeArray(array) {
  const arrSum = array.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  array.sort((a, b) => a - b);
  return {
    average: arrSum / array.length,
    min: array[0],
    max: array[array.length - 1],
    length: array.length,
  };
}
