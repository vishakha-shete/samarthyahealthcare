// Simple Add to Cart Simulation
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
      alert("Product added to cart!");
    });
  });
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img) {
  cart.push({ name, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" width="80">
        <p>${item.name} - ₹${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

function checkout() {
  alert("Proceeding to checkout...");
}

updateCartCount();
displayCart();
