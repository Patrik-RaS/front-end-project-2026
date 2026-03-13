const sectionSpace = document.querySelector(".where-magic-happens");

let shoppingCartArray = JSON.parse(localStorage.getItem("shoppingcart")) || [];

for (let i = 0; i < shoppingCartArray.length; i++) {
  // creating MAIN CONTAINER FOR ONE PRODUCT
  let cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  // IMAGE COLUMN
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("cart-image");

  let cartProductImage = document.createElement("img");
  cartProductImage.src = shoppingCartArray[i].image;

  imageDiv.appendChild(cartProductImage);

  // INFO COLUMN
  let infoDiv = document.createElement("div");
  infoDiv.classList.add("cart-info");

  let productName = document.createElement("p");
  productName.innerText = "Name: " + shoppingCartArray[i].name;

  let productPrice = document.createElement("p");
  productPrice.innerText = "Price: " + shoppingCartArray[i].price + " €";

  //QUANTITY UI
  let quantityDiv = document.createElement("div");
  quantityDiv.classList.add("cart-quantity");

  let decrement = document.createElement("button");
  decrement.innerText = "-";

  let number = document.createElement("span");
  number.classList.add("number");
  number.innerText = shoppingCartArray[i].quantity;

  let increment = document.createElement("button");
  increment.innerText = "+";

  quantityDiv.appendChild(decrement);
  quantityDiv.appendChild(number);
  quantityDiv.appendChild(increment);

  infoDiv.appendChild(productName);
  infoDiv.appendChild(productPrice);

  infoDiv.appendChild(quantityDiv);

  //updating UI, localStorage and total price...

  quantityDiv.addEventListener("click", function (event) {
    let quantity = shoppingCartArray[i].quantity;
    // creating this if-else statement was inspired by CHATGPT - I had some struggles making this one...
    if (event.target.innerText === "-" && quantity > 1) {
      quantity--;
    } else if (event.target.innerText === "+") {
      quantity++;
    }

    shoppingCartArray[i].quantity = quantity;

    number.innerText = quantity;

    localStorage.setItem("shoppingcart", JSON.stringify(shoppingCartArray));

    updateCartCount();

    updateTotalPrice();
  });

  // DELETE COLUMN
  let deleteDiv = document.createElement("div");
  deleteDiv.classList.add("cart-delete");

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  deleteDiv.appendChild(deleteButton);

  deleteButton.addEventListener("click", deleteItem);

  function deleteItem() {
    shoppingCartArray.splice(i, 1);
    localStorage.shoppingcart = JSON.stringify(shoppingCartArray);
    location.reload(); //reloading the page afterclicking ...
    updateCartCount();
  }

  // BUILD THE STRUCTURE
  cartItem.appendChild(imageDiv);
  cartItem.appendChild(infoDiv);
  cartItem.appendChild(deleteDiv);

  sectionSpace.appendChild(cartItem);
}
//TOTAL AMOUNT Calculation and display of the price...
let totalSection = document.createElement("div");
totalSection.classList.add("total-section");

let totalPriceText = document.createElement("h2");
totalPriceText.classList.add("total-price");

totalSection.appendChild(totalPriceText);

sectionSpace.appendChild(totalSection);
updateTotalPrice();

//BUY NOW BUTTON
let buyNowButton = document.createElement("button");

buyNowButton.classList.add("btn-buy");

buyNowButton.innerText = "Buy Now";

sectionSpace.appendChild(buyNowButton);

//updating total price
function updateTotalPrice() {
  let total = 0;

  for (let i = 0; i < shoppingCartArray.length; i++) {
    total += shoppingCartArray[i].price * shoppingCartArray[i].quantity;
  }

  document.querySelector(".total-price").innerText = "Total: €" + total;
}

//BUY NOW button logic
buyNowButton.addEventListener("click", function () {
  if (shoppingCartArray.length === 0) {
    alert("Your cart is empty. Please add items first.");

    return;
  }

  shoppingCartArray = [];

  localStorage.setItem("shoppingcart", JSON.stringify(shoppingCartArray));

  alert("Thank you for your purchase!");

  location.reload();
});

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
