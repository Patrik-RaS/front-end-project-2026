// Eveline video CHANGING THE BACKGROUND COLOR and buttons...
// const redButton = document.getElementById("red-button");
// const blueButton = document.getElementById("blue-button");
// const greenButton = document.getElementById("green-button");
// const bodyElement = document.querySelector("body");

// redButton.addEventListener("click", function (event) {
//     bodyElement.style.backgroundColor = "#ff0000"
// });

// blueButton.addEventListener("click", function (event){
//     bodyElement.style.backgroundColor = "#0000ff"
// });

// greenButton.addEventListener("click", function (event){
//     bodyElement.style.backgroundColor = "#00ff00"
// });

// const headingElement = document.getElementById("heading");
// const nameElement = document.getElementById("input-name");
// const ageElement = document.getElementById("input-age");
// const buttonElement = document.getElementById("enter-button");

//Simple command using a function...WORKING WITH USER INPUT 
// buttonElement.addEventListener("click", function(event){
//     let enteredName = nameElement.value;
//     let enteredAge = ageElement.value;
//     headingElement.innerText = "Hej Hej " + enteredName + " " + enteredAge;

// });

//Making it more complicated...with IF statement, SO it shows the Hwj Hej text when there is no value typed, but button is clicked...
// buttonElement.addEventListener("click", function(event){
//     let enteredName = nameElement.value;
//     let enteredAge = ageElement.value;
//     if(enteredName !== "" || enteredAge !== ""){
//         headingElement.innerText = "Hej Hej " + enteredName + " " + enteredAge;
//     }
//     else{
//         headingElement.innerText = "What is your name and age?"
//     }
    
// });

// // Creating HTML Elements in JS
// //calling out the ul by its ID 
// const ulElement = document.getElementById("list");

// //function for creating an element
// const liElement = document.createElement("li");
// //specifying the element characteristics
// liElement.innerText = "Item";
// liElement.style.color = "Magenta";
// liElement.classList.add("bold");

// //actually applying the created element() to the parent element, in this case UL...
// ulElement.appendChild(liElement);

// // more visual specification in CSS...




// /*STRINGS*/
// // value is actual data 
// // key is name


// //STORING DATA 
// let animal = "dog";
// localStorage.animal = animal;
// //RETRIEVING DATA
// let newAnimal = localStorage.animal;
// console.log(newAnimal);


// /*NUMBERS*/
// let number = 3; 

// localStorage.number = number;

// //THIS (except retrieving the data) is also storing the number noot as a number in the string...
// // let newNumber = localStorage.number;
// // console.log(newNumber + 1); //this would not give 4 but 31...

// //Thats why we use parseInt to make it a number,//it takes the ()string and converts it back to a number..that we then store in this value --> let newNumber ...
// let newNumber = parseInt(localStorage.number);
// console.log(newNumber + 1); //this gives us 4...
// //when retrieving nnumbers we use parseInt to convert them back to numbers,

// //If it is a number/numbers with decimals f.e. 4.13, then we use parseFloat INSTEAD!!!!!!!



// /*ARRAYS*/
// let animals = ["dog", "cat", "horse"];
// //localStorage.animals = animals; //this needs to be changed....

// //when retrieving info, this returns us the whole value in a string, not an array...
// //let newAnimals = localStorage.animals;
// //console.log(newAnimal[0]); //so when f.e. like here trying to call only first word it instead calls out first letter of the whole string which is in our case d ... 

// //when retrieving value we want it returned as an array instead of string so we use: 


// //Correct version
// localStorage.animals = JSON.stringify(animals); //this takes the array, converts it to a string and then stores it into a string to let newAnimals.... 
// let newAnimals = JSON.parse(localStorage.animals); //when retrieving value this helps us to get back an array..
// console.log(newAnimals[0]); //the outcome would be the whole first animal, not only a letter....




// /*OBJECTS*/
// //This gives us only [object, object] in the local storage value...
// //let dog = {name: "Julius", breed: "Bernese" };
// //localStorage.dog = dog; 

// //storing and retrieving the object correctly:
// let dog = {name: "Julius", breed: "Bernese" };
// localStorage.dog = JSON.stringify(dog); 
// let newDog = JSON.parse(localStorage.dog);
// console.log(newDog.breed); 




// //LOCAL STORAGE AND EVENTLISTENERS AKA MAKING HTML STRUCTURE FOR TEXT AND BUTTON WORK WITH JS 
// const headerElement = document.querySelector("#header");
// const inputElement = document.getElementById("input");
// const buttonElement = document.getElementById("button");

// if(localStorage.text){
//     headerElement.innerText = localStorage.text;
// }else{
//     headerElement.text = "Change this text";
// }


// buttonElement.addEventListener("click", function(event){
//     let text = inputElement.value;
//     headerElement.innerText = text;
//     localStorage.writtenText = text;
// });





// /* Store a string */

// let product = "necklace";

// localStorage.product = product;
// sessionStorage.setItem("product", product);

// /* Retrieve a string */

// /* let necklace = localStorage.getItem("product"); */
// let necklace = localStorage.product;

// /* Removing data */

// /* localStorage.removeItem("product"); */
// localStorage.clear();


// /* Store an array */

// /* let products = ["earrings", "necklace", "watch"];

// localStorage.products = JSON.stringify(products);

// products = JSON.parse(localStorage.products);
// console.log(products); */

// /* Store an object */

// let product = {
// 	type: "earrings",
// 	color: "gold",
// 	price: 1000,
// };

// localStorage.product = JSON.stringify(product);

// product = JSON.parse(localStorage.product);
// console.log(product.color);

// let productArr = [];
// productArr.push(product);





// making the shopping cart icon responsive for the website
//
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));



//code to add products to the shopping cart //result stored in product box variable...
const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach (button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
    });
});

//var. named cartContent that contains the cart-content class...
const cartContent = document.querySelector(".cart-content"); //storing product elements added to the cart...


//add to shopping cart function
const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    //ensuring no duplicate products are in the shopping cart / warning the customer with a message
    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems) {
        if (item.textContent === productTitle) {
            alert("This item is already in the cart");
            return;
        }
    }

    const cartBox = document.createElement("div"); //created a new div element in the cartBox variable
    cartBox.classList.add("cart-box"); //the new element is given a cartbox class...
    cartBox.innerHTML = `<img src="${productImgSrc}" alt="handmade Black leather bag" class="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${productTitle}</h2>
                    <span class="cart-price">${productPrice}</span>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span class="number">1</span>
                        <button id="increment">+</button>

                    </div>
                </div>
                <i class="ri-delete-bin-2-fill cart-remove"></i>`; //populating the cartBox element with product detail... //for dynamic put of info in HTML we use `;

            //in this string, inserting some variables that were previously defined. 
            //cartContent element added to the cartBox element by the appenChild method:
            cartContent.appendChild(cartBox);
            
            //removing items from the cart
            cartBox.querySelector(".cart-remove").addEventListener("click", () => {
                cartBox.remove();
                updateCartCount(-1); //adding this to update the cartcount even when product removed...
                updateTotalPrice();//adding this to update the total price even when product removed...
                saveCart();
            });

            //choosing the number of products in the cart function
            cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
                const numberElement = cartBox.querySelector(".number");
                const decrementButton = cartBox.querySelector("#decrement");
                let quantity = numberElement.textContent; 

                if (event.target.id === "decrement" && quantity > 1) {
                    quantity--;
                    if (quantity === 1) {
                        decrementButton.style.color = "#999";
                    }
                } else if (event.target.id === "increment") {
                    quantity++;
                    decrementButton.style.color = "#333";
                }
                numberElement.textContent = quantity;
                updateTotalPrice(); //puting it also here to update the total price even when the quantity of products changes...
            });

                //adding the function to the addToCart to update the cart count each time a product is added:
                updateCartCount(1);

                //adding this updateTotalPrice function inside this addToCart function
                updateTotalPrice(); //called always when something added or taken from the cart...making sure the total price is accurate, it always runs within this fucntion addToCart...

                //saving elements/products in the localStorage
                saveCart();

};

//calculating the total price in the shopping cart 
const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box"); //all elements w this class
    let total = 0; //initializing this first
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("€", "");
        const quantity = quantityElement.textContent;
        total += price * quantity; //operation used to add to the total variable...
        });
        totalPriceElement.textContent = `€${total}`; //updated w newly calculated price here, using these symbols
};





//creating an item count badge ... 
let cartItemCount = 0;
const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if (cartItemCount > 0) {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    } else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    }
};  






//Buy Now button / w a message of purchase made and emtying the shopping cart...
const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please add items to your cart before pressing on Buy Now button.");
        return;

    }
    
    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCartCount(0);

    updateTotalPrice();

    //localStorage.removeItem("shoppingCart");
    localStorage.setItem("shoppingCart", JSON.stringify([]));

    alert("Thank you for your purchase!");
    
});





// Adding the localStorage 
// ===============================
// LOCAL STORAGE FUNCTIONS
// ===============================

const saveCart = () => {
    const cartBoxes = document.querySelectorAll(".cart-box");
    const cartArray = [];

    cartBoxes.forEach(box => {
        const img = box.querySelector("img").src;
        const title = box.querySelector(".cart-product-title").textContent;
        const price = box.querySelector(".cart-price").textContent;
        const quantity = box.querySelector(".number").textContent;

        cartArray.push({
            img,
            title,
            price,
            quantity
        });
    });

    localStorage.setItem("shoppingCart", JSON.stringify(cartArray));
};

const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("shoppingCart"));

    if (!storedCart) return;

    storedCart.forEach(item => {
        const cartBox = document.createElement("div");
        cartBox.classList.add("cart-box");

        cartBox.innerHTML = `
            <img src="${item.img}" class="cart-img">
            <div class="cart-detail">
                <h2 class="cart-product-title">${item.title}</h2>
                <span class="cart-price">${item.price}</span>
                <div class="cart-quantity">
                    <button id="decrement">-</button>
                    <span class="number">${item.quantity}</span>
                    <button id="increment">+</button>
                </div>
            </div>
            <i class="ri-delete-bin-2-fill cart-remove"></i>
        `;

        cartContent.appendChild(cartBox);

        updateCartCount(1);
    });

    updateTotalPrice();
};



//HELP OF INTERNET 
document.addEventListener("DOMContentLoaded", loadCart); //saves items, restores after refresh, clears after purchase...

