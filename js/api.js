const fetchProducts = async () => {
    try {
      // Api'a istek at
      const res = await fetch("../db.json");
  
      // Gelen veriyi js nesnesine çevir
      const data = await res.json();
      // Veriyi fonksiyon çağırıldığında return et
      return data;
    } catch (err) {
      alert(`Error: ${err}`);
  
      // Eğer hata varsa boş bir dizi return et
      return [];
    }
  };
  
  export default fetchProducts;