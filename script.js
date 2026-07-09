/* ==========================================================
   CU POSTER HUB
   VERSION 3
========================================================== */

/* ==========================================================
   HERO SLIDER
========================================================== */

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".hero-prev");
const nextBtn = document.querySelector(".hero-next");

let currentHero = 0;
let heroInterval;

function showHero(index){

    heroSlides.forEach(slide=>{
        slide.classList.remove("active");
    });

    heroDots.forEach(dot=>{
        dot.classList.remove("active");
    });

    heroSlides[index].classList.add("active");
    heroDots[index].classList.add("active");

}

function nextHero(){

    currentHero++;

    if(currentHero >= heroSlides.length){

        currentHero = 0;

    }

    showHero(currentHero);

}

function previousHero(){

    currentHero--;

    if(currentHero < 0){

        currentHero = heroSlides.length-1;

    }

    showHero(currentHero);

}

function startHero(){

    heroInterval = setInterval(nextHero,5000);

}

function resetHero(){

    clearInterval(heroInterval);

    startHero();

}

if(heroSlides.length){

    showHero(0);

    startHero();

}

nextBtn?.addEventListener("click",()=>{

    nextHero();

    resetHero();

});

prevBtn?.addEventListener("click",()=>{

    previousHero();

    resetHero();

});

heroDots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentHero=index;

        showHero(currentHero);

        resetHero();

    });

});

// ==========================================================
// CART
// ==========================================================

const cartButton = document.querySelector(".cart-btn");

const cartDrawer = document.getElementById("cartDrawer");

const closeCart = document.getElementById("closeCart");

if(cartButton){

    cartButton.addEventListener("click",()=>{

        cartDrawer.classList.add("open");

    });

}

if(closeCart){

    closeCart.addEventListener("click",()=>{

        cartDrawer.classList.remove("open");

    });

}

// ==========================================================
// CLOSE CART WHEN CLICKING OUTSIDE
// ==========================================================

document.addEventListener("click", (e) => {

    if (!cartDrawer || !cartButton) return;

    const clickedInsideCart = e
        .composedPath()
        .includes(cartDrawer);

    const clickedCartButton = e
        .composedPath()
        .includes(cartButton);

    if (
        cartDrawer.classList.contains("open") &&
        !clickedInsideCart &&
        !clickedCartButton
    ) {

        cartDrawer.classList.remove("open");

    }

});

// ==========================================================
// CART COUNT
// ==========================================================

let cart = [];

const cartCount = document.getElementById("cartCount");

function updateCartCount(){

    if(cartCount){

        cartCount.textContent = cart.length;

    }

}

updateCartCount();

// ==========================================================
// SMOOTH SCROLL
// ==========================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==========================================================
// NAVBAR ACTIVE LINK
// ==========================================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

// ==========================================================
// SCROLL EFFECT
// ==========================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        navbar.style.background="rgba(47,47,51,.92)";

    }

    else{

        navbar.style.background="rgba(47,47,51,.82)";

    }

});


// ==========================================================
// FUTURE FEATURES
// ==========================================================

// Posters
// Categories
// Search
// Filters
// Add To Cart
// Checkout
// Order Form
// WhatsApp Integration
/* ==========================================================
   FEATURED POSTERS
========================================================== */



const posters = [

{
    id:1,
    name:"Naruto Poster 1",
    image:"images/anime/naruto/AN-NAR-0001-A3.webp",
    category:"Anime",
    badge:"🔥 Best Seller"
},

{
    id:2,
    name:"Naruto Poster 2",
    image:"images/anime/naruto/AN-NAR-0002-A3.webp",
    category:"Anime",
    badge:"⭐ Trending"
},

{
    id:3,
    name:"Naruto Poster 3",
    image:"images/anime/naruto/AN-NAR-0003-A2.webp",
    category:"Anime",
    badge:"🔥 Popular"
},

{
    id:4,
    name:"Naruto Poster 4",
    image:"images/anime/naruto/AN-NAR-0004-A4.webp",
    category:"Anime",
    badge:"✨ New"
},

{
    id:5,
    name:"Naruto Poster 5",
    image:"images/anime/naruto/AN-NAR-0005-A4.webp",
    category:"Anime",
    badge:"🔥 Best Seller"
},

{
    id:6,
    name:"Naruto Poster 6",
    image:"images/anime/naruto/AN-NAR-0006-A3.webp",
    category:"Anime",
    badge:"⭐ Trending"
},

{
    id:7,
    name:"Naruto Poster 7",
    image:"images/anime/naruto/AN-NAR-0007-A2.webp",
    category:"Anime",
    badge:"🔥 Popular"
},

{
    id:8,
    name:"Naruto Poster 8",
    image:"images/anime/naruto/AN-NAR-0008-A3.webp",
    category:"Anime",
    badge:"✨ New"
},

{
    id:9,
    name:"Naruto Poster 9",
    image:"images/anime/naruto/AN-NAR-0009-A4.webp",
    category:"Anime",
    badge:"🔥 Best Seller"
},

{
    id:10,
    name:"Naruto Poster 10",
    image:"images/anime/naruto/AN-NAR-0010-A4.webp",
    category:"Anime",
    badge:"⭐ Trending"
}

];

const row1=document.querySelector(".row1");
const row2=document.querySelector(".row2");

function createPosterCard(poster){

return `

<div class="poster-card" data-id="${poster.id}">

<div class="poster-image poster-open">

<img
    src="${poster.image}"
    alt="${poster.name}"
    loading="lazy"
    decoding="async"
>

<div class="poster-badge">

${poster.badge}

</div>

<div class="poster-category">

${poster.category}

</div>

</div>

<div class="poster-info">

<h3 class="poster-title">

${poster.name}

</h3>

<div class="poster-price">

<del>₹100</del>

<span>Starting ₹15</span>

</div>

<p class="poster-note">

Click "Add To Cart" to select poster size.

</p>

<button
class="poster-btn add-cart-btn"
data-name="${poster.name}"
data-image="${poster.image}"
>

🛒 Add To Cart

</button>

</div>

</div>

`;

}

posters.slice(0,5).forEach(p=>{

row1.innerHTML+=createPosterCard(p);

});

posters.slice(5,10).forEach(p=>{

row2.innerHTML+=createPosterCard(p);

});

/* =========================
SLIDER
========================= */

document.querySelector(".row1-right").onclick=()=>{

row1.scrollBy({

left:900,

behavior:"smooth"

});

};

document.querySelector(".row1-left").onclick=()=>{

row1.scrollBy({

left:-900,

behavior:"smooth"

});

};

document.querySelector(".row2-right").onclick=()=>{

row2.scrollBy({

left:900,

behavior:"smooth"

});

};

document.querySelector(".row2-left").onclick=()=>{

row2.scrollBy({

left:-900,

behavior:"smooth"

});

};
/* ==========================================================
   SIZE POPUP
========================================================== */

const sizeModal = document.getElementById("sizeModal");

const closeSizeModal = document.getElementById("closeSizeModal");

const modalPosterImage = document.getElementById("modalPosterImage");

const modalPosterName = document.getElementById("modalPosterName");

const confirmAddCart = document.getElementById("confirmAddCart");

const sizeOptions = document.querySelectorAll(".size-option");

let selectedPoster = null;

let selectedSize = null;

let selectedPrice = null;


/* ===========================
OPEN POPUP
=========================== */

document.addEventListener("click",(e)=>{

    const button=e.target.closest(".add-cart-btn");

    if(!button) return;
    console.log("Button clicked");
console.log(button.dataset.name);
console.log(button.dataset.image);
console.log(sizeModal);

    selectedPoster={

        name:button.dataset.name,

        image:button.dataset.image

    };

    modalPosterImage.src=selectedPoster.image;

    modalPosterName.textContent=selectedPoster.name;

    sizeModal.classList.add("active");

});


/* ===========================
CLOSE
=========================== */

closeSizeModal.addEventListener("click",()=>{

    sizeModal.classList.remove("active");

});

sizeModal.addEventListener("click",(e)=>{

    if(e.target===sizeModal){

        sizeModal.classList.remove("active");

    }

});


/* ===========================
SIZE SELECT
=========================== */

sizeOptions.forEach(option=>{

    option.addEventListener("click",()=>{

        sizeOptions.forEach(o=>{

            o.classList.remove("active");

        });

        option.classList.add("active");

        selectedSize=option.dataset.size;

        selectedPrice=option.dataset.price;

    });

});


/* ===========================
ADD TO CART
=========================== */

confirmAddCart.addEventListener("click", () => {

    if (!selectedSize) {

        alert("Please select a poster size.");

        return;

    }

    const existingItem = cart.find(item =>

        item.name === selectedPoster.name &&
        item.size === selectedSize

    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            name: selectedPoster.name,

            image: selectedPoster.image,

            size: selectedSize,

            price: Number(selectedPrice),

            quantity: 1

        });

    }

    updateCart();

    sizeModal.classList.remove("active");

    sizeOptions.forEach(option => {

        option.classList.remove("active");

    });

    selectedSize = null;

    selectedPrice = null;

});


/* ==========================================================
RENDER CART
========================================================== */

const cartItems = document.getElementById("cartItems");

function updateCart() {

    updateCartCount();

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>Your cart is empty</h3>

                <p>Add posters to see them here.</p>

            </div>

        `;

        return;

    }

    let cartHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        totalPrice += itemTotal;

        cartHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image"
                >

                <div class="cart-item-details">

                    <h3>${item.name}</h3>

                    <span class="cart-item-size">
                        Size: ${item.size}
                    </span>

                    <p class="cart-item-price">
                        ₹${item.price}
                    </p>

                    <div class="cart-item-actions">

                        <div class="quantity-control">

                            <button onclick="decreaseQuantity(${index})">
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button onclick="increaseQuantity(${index})">
                                +
                            </button>

                        </div>

                        <button
                            class="remove-cart-item"
                            onclick="removeCartItem(${index})"
                        >

                            <i class="fa-solid fa-trash"></i>

                            Remove

                        </button>

                    </div>

                </div>

                <strong class="cart-item-total">

                    ₹${itemTotal}

                </strong>

            </div>

        `;

    });

    cartHTML += `

        <div class="cart-summary">

            <div>

                <span>Total Items</span>

                <strong>

                    ${cart.reduce(
                        (total, item) => total + item.quantity,
                        0
                    )}

                </strong>

            </div>

            <div class="cart-total">

                <span>Total Price</span>

                <strong>

                    ₹${totalPrice}

                </strong>

            </div>

        </div>

    `;

    cartItems.innerHTML = cartHTML;

}


/* ==========================================================
QUANTITY CONTROLS
========================================================== */

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


/* ==========================================================
REMOVE CART ITEM
========================================================== */

function removeCartItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* ==========================================================
INITIAL CART
========================================================== */

updateCart();

/* ==========================================================
PROCEED TO CHECKOUT
========================================================== */

const checkoutButton =

document.querySelector(

".checkout-btn"

);


checkoutButton.addEventListener(

"click",

()=>{


if(cart.length === 0){


alert(

"Your cart is empty."

);


return;


}


localStorage.setItem(

"cuPosterCart",

JSON.stringify(cart)

);


window.location.href =

"checkout.html";


});

console.log("CU Poster Hub Version 3 Loaded Successfully 🚀");