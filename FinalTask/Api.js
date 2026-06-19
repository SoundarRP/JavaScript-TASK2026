// 1. Fetch Products from API

const API = "https://fakestoreapi.com/products";

const productsDiv = document.getElementById("products");
const loading = document.getElementById("loading");
const search = document.getElementById("search");
const category = document.getElementById("category");
const stats = document.getElementById("stats");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");

let products = [];

let cart = [];

// 2. Product Card Should Show
const displayProducts = (data) => {
  productsDiv.innerHTML = "";

  data.forEach((product) => {
    productsDiv.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="">
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
        <p>⭐ ${product.rating.rate}</p>

        <button onclick="addToCart(${product.id})">
          Add To Cart
        </button>
      </div>
    `;
  });
};


// 3. Search Product
search.addEventListener("keyup", () => {
  let value = search.value.toLowerCase();

  let filtered = products.filter((product) =>
    product.title.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

// 4. Category Filter
category.addEventListener("change", () => {
  let value = category.value;

  if (value === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter(
      (product) => product.category === value
    );

    displayProducts(filtered);
  }
});

// 5. Product Statistics
const showStats = () => {
  const total = products.length;

  const avg =
    products.reduce((sum, p) => sum + p.price, 0) / total;

  const highest = [...products].sort(
    (a, b) => b.price - a.price
  )[0];

  const lowest = [...products].sort(
    (a, b) => a.price - b.price
  )[0];

  stats.innerHTML = `
    Total Products : ${total}<br>
    Average Price : ${avg.toFixed(2)}<br>
    Highest Price Product : ${highest.title}<br>
    Lowest Price Product : ${lowest.title}
  `;
};

//6. Add to Cart
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  renderCart();
}

// 7. Remove From Cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    cartItems.innerHTML += `
      <div>
        ${item.title}
        <button onclick="removeFromCart(${item.id})">
          Remove
        </button>
      </div>
    `;
  });

  cartCount.textContent = cart.length;
}


// 8. Loading State
loading.innerHTML = "Loading Products...";

fetch(API)
  .then((response) => response.json())
  .then((data) => {
    products = data;
    displayProducts(products);
    showStats();
  })
  .catch((error) => {
    console.log(error);
    loading.innerHTML = "Failed to load products";
  })
  .finally(() => {
    loading.innerHTML = "Products Loaded Successfully";
  });