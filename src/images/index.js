console.log("🚀 PRO STORE LOADED");

// ================= DATA =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const buttons = document.querySelectorAll(".product-card button");

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

const wishlistUI = document.getElementById("wishlist");

// ================= SAVE =================
function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// ================= CART =================
function addToCart(name, price){

  const item = cart.find(i => i.name === name);

  if(item){
    item.qty++;
  } else {
    cart.push({name, price, qty:1});
  }

  save();
  render();
}

// ================= WISHLIST =================
function toggleWishlist(name){

  const exists = wishlist.includes(name);

  if(exists){
    wishlist = wishlist.filter(i => i !== name);
  } else {
    wishlist.push(name);
  }

  save();
  renderWishlist();
}

// ================= RENDER CART =================
function render(){

  cartItems.innerHTML = "";

  cart.forEach(item => {

    const li = document.createElement("li");

    li.innerHTML = `
      ${item.name} × ${item.qty} = $${item.price * item.qty}
    `;

    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);

  cartTotal.textContent =
    "Total: $" + cart.reduce((s,i)=>s+i.price*i.qty,0);
}

// ================= WISHLIST RENDER =================
function renderWishlist(){

  wishlistUI.innerHTML = "";

  wishlist.forEach(item => {

    const li = document.createElement("li");
    li.textContent = "❤️ " + item;

    wishlistUI.appendChild(li);
  });

}

// ================= PRODUCTS =================
buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    const card = btn.closest(".product-card");

    const name = card.querySelector(".product-name").textContent;

    const price = Number(
      card.querySelector(".price").textContent.replace("$","")
    );

    addToCart(name, price);

  });

});

// ================= DARK MODE =================
document.getElementById("dark-toggle")
.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ================= CHECKOUT =================
document.getElementById("checkout-btn")
.addEventListener("click", () => {

  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  alert("Payment successful 🎉 (Demo)");
  cart = [];
  save();
  render();
});

// INIT
render();
renderWishlist();