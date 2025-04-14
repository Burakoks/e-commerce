import { elements } from "./ui.js";

// Localstorage'a ekleme yapan fonksiyon
const saveToLocalStorage = (cart) => {
  // Dışarıdan verilen elemanı  JSON.stringify ile stringe çevir ve localstorage'a ekle
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Localstorage'dan eleman alan fonksiyon
const getFromLocalStorage = () => {
  // LocalStorage'daki cart key'ine sahip elemanları localstorage'dan al
  const strData = localStorage.getItem("cart");

  // Eğer localstorage'da veri varsa bunu JSON.parse ile dönüştür ve return et ama yoksa boş bir dizi return et
  return strData ? JSON.parse(strData) : [];
};

// Sepetteki ürün miktarını sepet ikonu yanında render edecek fonksiyon
const updateCartIcon = (cart) => {
  // Sepet ikonuna eriş
  const cartIcon = document.querySelector("#cart-icon");

  // Sepetteki toplam ürün miktarına eriş
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Sepet ikonu yanında toplam ürün miktarını render et
  cartIcon.setAttribute("data-quantity", totalQuantity);
};

// Sepetteki toplam fiyatı hesaplayan fonksiyon

const calculateCartTotal = (cart) => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

// Sepetteki toplam ürün fiyatını renderlayan fonksiyon

const displayCartTotal = (cart) => {
  // Toplam ürün fiyatını hesaplayan fonksiyonu çalıştır
  const total = calculateCartTotal(cart);

  // Sepetteki toplam ürün fiyatını render et (ekrana bastır)
  elements.cartTotal.textContent = `Total: $ ${total.toFixed(2)}`;
};

export {
  saveToLocalStorage,
  getFromLocalStorage,
  updateCartIcon,
  calculateCartTotal,
  displayCartTotal,
};