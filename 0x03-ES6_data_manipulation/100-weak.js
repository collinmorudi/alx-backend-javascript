// /* eslint-disable prefer-const */
// export const weakMap = new WeakMap();

// export function queryAPI(endpoint) {
//   let count = weakMap.get(endpoint) || 0;

//   if (count >= 5) {
//     throw new Error('Endpoint load is high');
//   }

//   weakMap.set(endpoint, count + 1);
// }

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!(endpoint instanceof Object)) {
    throw new Error('Cannot process');
  }

  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize the count to 0
  }

  const count = weakMap.get(endpoint) + 1; // Increment the count
  weakMap.set(endpoint, count); // Update the count in the WeakMap

  if (count >= 5) {
    throw new Error('Endpoint load is high'); // Throw error if count >= 5
  }
}
