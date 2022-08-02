export function getBasketTotal(basket) {
  return basket?.reduce((amount, product) => product.price + amount, 0);
}
