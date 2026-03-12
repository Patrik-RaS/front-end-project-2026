// PRODUCT PAGE FUNCTIONALITY

let shoppingCartArray;

if (localStorage.getItem("shoppingcart")) {
  shoppingCartArray = JSON.parse(localStorage.getItem("shoppingcart"));
} else {
  shoppingCartArray = [];
}

// Add to cart buttons
const buttonAddToCart = document.querySelectorAll(".btn-buy");

for (let i = 0; i < buttonAddToCart.length; i++) {
  buttonAddToCart[i].addEventListener("click", addToCart);
}

function addToCart(event) {
  const button = event.target;
  const product = button.closest(".product-page");
  const picture = product.querySelector("#mainImage").src;
  const name = product.querySelector(".name-of-product").innerText;
  const price = parseInt(
    product.querySelector(".price").innerText.replace("€", ""),
  );

  let productObject = {
    image: picture,
    name: name,
    price: price,
    quantity: 1,
  };

  //not adding duplicates to the cart...
  for (let i = 0; i < shoppingCartArray.length; i++) {
    if (picture === shoppingCartArray[i].image) {
      shoppingCartArray.splice(i, 1);
      alert("This item is already in the cart");
      return;
    }
  }

  shoppingCartArray.push(productObject);

  localStorage.setItem("shoppingcart", JSON.stringify(shoppingCartArray));

  updateCartCount();
}

let cartItemCount = 0;

function updateCartCount() {
  const cartItemCountBadge = document.querySelector(".cart-item-count");

  if (!cartItemCountBadge) return;

  let cart = JSON.parse(localStorage.getItem("shoppingcart")) || [];

  cartItemCount = 0;

  for (let i = 0; i < cart.length; i++) {
    cartItemCount += cart[i].quantity;
  }

  if (cartItemCount > 0) {
    cartItemCountBadge.style.visibility = "visible";
    cartItemCountBadge.textContent = cartItemCount;
  } else {
    cartItemCountBadge.style.visibility = "hidden";
    cartItemCountBadge.textContent = "";
  }
}
updateCartCount();
