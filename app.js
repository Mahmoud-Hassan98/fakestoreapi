class Product {
    constructor(title, price, description, image) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }
  
  const products = [];
  
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const product = new Product(
          item.title,
          item.price,
          item.description,
          item.image
        );
        products.push(product);
      });
      renderProducts();
    })
    .catch(error => console.log(error));
  
  function renderProducts() {
    const main = document.querySelector("main");
    const productCards = products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p class="price">$${product.price}</p>
      </div>
    `);
    main.innerHTML = productCards.join("");
  }
  