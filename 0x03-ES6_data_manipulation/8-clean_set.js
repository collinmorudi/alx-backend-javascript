export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString)) // Filter values that start with startString
    .map((value) => value.slice(startString.length)) // Get the part of the string after startString
    .join('-'); // Join the results with '-'
}
