function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  let cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  alert(name + " added to cart!");
}

function renderCart() {
  let cart = getCart();
  let container = document.getElementById("cart-items");
  let total = 0;

  if (!container) return; // Only run on cart page

  container.innerHTML = "";
  cart.forEach((item, i) => {
    total += item.price;
    container.innerHTML += `<p>${item.name} - $${item.price} 
      <button onclick="removeItem(${i})">Remove</button></p>`;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

function removeItem(i) {
  let cart = getCart();
  cart.splice(i, 1);
  saveCart(cart);
  renderCart();
}

function checkout() {
  alert("Thank you for your purchase!");
  localStorage.removeItem("cart");
  renderCart();
}

// Run on cart page load
window.onload = renderCart;
