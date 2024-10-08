export default function groceriesList() {
  const groceries = new Map(); // Create a new Map

  // Add grocery items with their quantities
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries; // Return the Map
}
