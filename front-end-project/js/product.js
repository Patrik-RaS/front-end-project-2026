// Simple image switcher
function switchImage(src) {
    document.getElementById("mainImage").src = src;
}

// Mock "Add to Cart"
const cartBtn = document.getElementById("addToCartBtn");
const message = document.getElementById("message");

cartBtn.addEventListener("click", () => {
    message.textContent = "✔️ Added to cart!";
    message.style.color = "green";
});