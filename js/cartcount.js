let cartItemCount = 0;

function updateCartCount(){

    const cartItemCountBadge = document.querySelector(".cart-item-count");

    if(!cartItemCountBadge) return;

    let cart = JSON.parse(localStorage.getItem("shoppingcart")) || [];

    cartItemCount = 0;

    for(let i = 0; i < cart.length; i++){
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