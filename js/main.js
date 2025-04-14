import fetchProducts from "./api.js";
import { addToCart } from "./cart.js";
import {
  displayCartTotal,
  getFromLocalStorage,
  updateCartIcon,
} from "./helper.js";
import { elements, renderCartItems, renderProducts } from "./ui.js";

elements.menuIcon.addEventListener("click", () => {
  elements.menu.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", () => {
  // Bu projede  kullanıcı ana sayfada ise api'dan verileri almalı ve arayüzü renderlamalıyız ama eğer sepet sayfasında isek sepetteki ürünleri renderlamalıyız.Bu sebeple hangi sayfada olduğumuza karar vermeliyiz.

  // Localstorage'dan sepetteki ürünleri al
  const cart = getFromLocalStorage();

  // ? Hangi sayfadayız ?
  if (window.location.pathname.includes("/cart.html")) {
    // * Sepet Sayfası İşlemleri

    renderCartItems(cart);
    // Sepetteki toplam ürün fiyatını renderla
    displayCartTotal(cart);
  } else {
    // * Ana Sayfa İşlemleri
    fetchProducts()
      .then((products) => {
        renderProducts(products, (e) => {
          addToCart(e, products);
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  // Sepet ikonu yanıdaki miktarı render et
  updateCartIcon(cart);
});