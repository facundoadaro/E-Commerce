import axios from "axios";

export function getBasketTotal(basket) {
  return basket?.reduce((amount, product) => product.price + amount, 0);
}


export async function postPurchase(purchaseTotal) {
    try {
      let purchasePay = await axios.post("http://localhost:8080/checkout", purchaseTotal);
      return purchasePay;
    } catch (error) {
      alert(error.response.data);
    }
}
