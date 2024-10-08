export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the Map
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100); // Update the quantity to 100 if it's 1
    }
  }
}
