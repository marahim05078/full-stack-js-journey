/**
 * 9 Functional Programming concepts
 * 1. Immutability
 * 2. Function Composition
 * 3. Deterministic Funciton
 * 4. Pure Function
 *      a. Side effect
 *      b. Shared State (Stateless)
 * 5. Fisrt Class citizen or Higher Order Function
 * 6. Arity
 * 7. Curried Function
 * 8. Functors
 * 9. Monads
 * 10. Recursions instead of loop
 * 11.
 */

// Immutability
const cartProducts = [
  {
    name: "Nintendo Switch",
    price: 320.0,
    currency: "EUR",
  },
  {
    name: "Play station 4",
    price: 350.0,
    currency: "USD",
  },
];
// Adding currancy symbol without mutating the original code. Just adding another property.
cartProducts.forEach((item) => {
  let currancySymbol = item.currency === "USD" ? "$" : "€";
  item["currancySymbol"] = currancySymbol;
});

console.log(
  "The price of",
  cartProducts[0].name,
  "is",
  cartProducts[0].price,
  cartProducts[0].currancySymbol,
);
console.log(cartProducts);

// Adding currancy symbol mutating the original code.
cartProducts.forEach((item) => {
  let currancySymbol = item.currency === "USD" ? "$" : "€";
  item["currency"] = currancySymbol;
});

console.log(
  "The price of",
  cartProducts[0].name,
  "is",
  cartProducts[0].price,
  cartProducts[0].currency,
);
