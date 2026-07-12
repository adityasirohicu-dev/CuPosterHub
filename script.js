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

function showHero(index) {

    heroSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    heroDots.forEach(dot => {
        dot.classList.remove("active");
    });

    heroSlides[index].classList.add("active");
    heroDots[index].classList.add("active");

}

function nextHero() {

    currentHero++;

    if (currentHero >= heroSlides.length) {

        currentHero = 0;

    }

    showHero(currentHero);

}

function previousHero() {

    currentHero--;

    if (currentHero < 0) {

        currentHero = heroSlides.length - 1;

    }

    showHero(currentHero);

}

function startHero() {

    heroInterval = setInterval(nextHero, 5000);

}

function resetHero() {

    clearInterval(heroInterval);

    startHero();

}

if (heroSlides.length) {

    showHero(0);

    startHero();

}

nextBtn?.addEventListener("click", () => {

    nextHero();

    resetHero();

});

prevBtn?.addEventListener("click", () => {

    previousHero();

    resetHero();

});

heroDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentHero = index;

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

if (cartButton) {

    cartButton.addEventListener("click", () => {

        cartDrawer.classList.add("open");

    });

}

if (closeCart) {

    closeCart.addEventListener("click", () => {

        cartDrawer.classList.remove("open");

    });

}

// ==========================================================
// CLOSE CART WHEN CLICKING OUTSIDE
// ==========================================================

document.addEventListener("click", (e) => {

    if (!cartDrawer || !cartButton) return;

    const clickedInsideCart =
        e.composedPath().includes(cartDrawer);

    const clickedCartButton =
        e.composedPath().includes(cartButton);

    const clickedAddToCart =
        e.target.closest(
            ".add-cart-btn, .product-add-cart-btn, #confirmAddCart"
        );

    if (
        cartDrawer.classList.contains("open") &&
        !clickedInsideCart &&
        !clickedCartButton &&
        !clickedAddToCart
    ) {

        cartDrawer.classList.remove("open");

    }

});

// ==========================================================
// CART COUNT
// ==========================================================

let cart = [];
let tapeAdded =

    localStorage.getItem("cuPosterTapeAdded") === "true";

const cartCount = document.getElementById("cartCount");

function updateCartCount() {

    if (cartCount) {

        cartCount.textContent = cart.length;

    }

}

updateCartCount();

// ==========================================================
// SMOOTH SCROLL
// ==========================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==========================================================
// NAVBAR ACTIVE LINK
// ==========================================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

// ==========================================================
// SCROLL EFFECT
// ==========================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background = "rgba(47,47,51,.92)";

    }

    else {

        navbar.style.background = "rgba(47,47,51,.82)";

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
        id: 1,
        name: "Naruto Poster 1",
        image: "images/anime/naruto/AN-NAR-0001-A3.webp",
        category: "Anime",
        series: "Naruto",
        badge: "🔥 Best Seller"
    },

    {
        id: 2,
        name: "Naruto Poster 2",
        image: "images/anime/naruto/AN-NAR-0002-A3.webp",
        category: "Anime",
        series: "Naruto",
        badge: "⭐ Trending"
    },

    {
        id: 3,
        name: "Naruto Poster 3",
        image: "images/anime/naruto/AN-NAR-0003-A2.webp",
        category: "Anime",
        series: "Naruto",
        badge: "🔥 Popular"
    },

    {
        id: 4,
        name: "Naruto Poster 4",
        image: "images/anime/naruto/AN-NAR-0004-A4.webp",
        category: "Anime",
        series: "Naruto",
        badge: "✨ New"
    },

    {
        id: 5,
        name: "Naruto Poster 5",
        image: "images/anime/naruto/AN-NAR-0005-A4.webp",
        category: "Anime",
        series: "Naruto",
        badge: "🔥 Best Seller"
    },

    {
        id: 6,
        name: "Naruto Poster 6",
        image: "images/anime/naruto/AN-NAR-0006-A3.webp",
        category: "Anime",
        series: "Naruto",
        badge: "⭐ Trending"
    },

    {
        id: 7,
        name: "Naruto Poster 7",
        image: "images/anime/naruto/AN-NAR-0007-A2.webp",
        category: "Anime",
        series: "Naruto",
        badge: "🔥 Popular"
    },

    {
        id: 8,
        name: "Naruto Poster 8",
        image: "images/anime/naruto/AN-NAR-0008-A3.webp",
        category: "Anime",
        series: "Naruto",
        badge: "✨ New"
    },

    {
        id: 9,
        name: "Naruto Poster 9",
        image: "images/anime/naruto/AN-NAR-0009-A4.webp",
        category: "Anime",
        series: "Naruto",
        badge: "🔥 Best Seller"
    },

    {
        id: 10,
        name: "Naruto Poster 10",
        image: "images/anime/naruto/AN-NAR-0010-A4.webp",
        category: "Anime",
        series: "Naruto",
        badge: "⭐ Trending"
    }

];

const row1 = document.querySelector(".row1");

const row2 = document.querySelector(".row2");

const allPostersGrid = document.getElementById("allPostersGrid");

function createPosterCard(poster) {

    return `

<div
    class="poster-card"
    data-id="${poster.id}"
>

    <a
        href="product.html?id=${poster.id}"
        class="poster-image poster-open"
    >

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

    </a>


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
            type="button"
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

/* ==========================================================
   SHOW POSTERS ON HOME PAGE
========================================================== */

if (row1 && row2) {

    posters.slice(0, 5).forEach(poster => {

        row1.innerHTML += createPosterCard(poster);

    });


    posters.slice(5, 10).forEach(poster => {

        row2.innerHTML += createPosterCard(poster);

    });

}


/* ==========================================================
   SHOW POSTERS ON ALL POSTERS PAGE
========================================================== */

if (allPostersGrid) {

    posters.forEach(poster => {

        allPostersGrid.innerHTML += createPosterCard(poster);

    });


    const visiblePosterCount =

        document.getElementById("visiblePosterCount");


    if (visiblePosterCount) {

        visiblePosterCount.textContent = posters.length;

    }

}

/* =========================
SLIDER
========================= */

document.querySelector(".row1-right")?.addEventListener("click", () => {

    row1.scrollBy({

        left: 900,

        behavior: "smooth"

    });

});

document.querySelector(".row1-left")?.addEventListener("click", () => {

    row1.scrollBy({

        left: -900,

        behavior: "smooth"

    });

});

document.querySelector(".row2-right")?.addEventListener("click", () => {

    row2.scrollBy({

        left: 900,

        behavior: "smooth"

    });

});

document.querySelector(".row2-left")?.addEventListener("click", () => {

    row2.scrollBy({

        left: -900,

        behavior: "smooth"

    });

});
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

document.addEventListener("click", (e) => {

    const button = e.target.closest(".add-cart-btn");

    if (!button) return;
    console.log("Button clicked");
    console.log(button.dataset.name);
    console.log(button.dataset.image);
    console.log(sizeModal);

    selectedPoster = {

        name: button.dataset.name,

        image: button.dataset.image

    };

    if (!sizeModal || !modalPosterImage || !modalPosterName) {
        console.error("Size popup HTML is missing from this page.");
        return;
    }

    modalPosterImage.src = selectedPoster.image;

    modalPosterName.textContent = selectedPoster.name;

    sizeModal.classList.add("active");

});


/* ===========================
CLOSE
=========================== */

closeSizeModal?.addEventListener("click", () => {

    sizeModal.classList.remove("active");

});

sizeModal?.addEventListener("click", (e) => {

    if (e.target === sizeModal) {

        sizeModal.classList.remove("active");

    }

});


/* ===========================
SIZE SELECT
=========================== */

sizeOptions.forEach(option => {

    option.addEventListener("click", () => {

        sizeOptions.forEach(o => {

            o.classList.remove("active");

        });

        option.classList.add("active");

        selectedSize = option.dataset.size;

        selectedPrice = option.dataset.price;

    });

});


/* ===========================
ADD TO CART
=========================== */

confirmAddCart?.addEventListener("click", () => {

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

    setTimeout(() => {

        if (cartDrawer) {
            cartDrawer.classList.add("open");
        }

    }, 100);

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

    if (!cartItems) return;

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
    if (tapeAdded) {

        totalPrice += 60;

    }

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
    /* DOUBLE-SIDED POSTER TAPE ADD-ON */

    cartHTML += `

    <div class="cart-addon">

        <div class="cart-addon-heading">

            <span>COMPLETE YOUR SETUP</span>

            <h3>Mount Your Posters Easily</h3>

        </div>


        <div class="cart-addon-product">

            <div class="cart-addon-icon">

                <i class="fa-solid fa-tape"></i>

            </div>


            <div class="cart-addon-details">

                <h4>Double-Sided Poster Tape</h4>

                <p>
                    Easy and secure poster mounting.
                </p>

                <strong>₹60</strong>

            </div>


            <button
    type="button"
    class="add-tape-btn ${tapeAdded ? "added" : ""}"
    onclick="togglePosterTape()"
>

    <i class="fa-solid ${tapeAdded ? "fa-check" : "fa-plus"}"></i>

    ${tapeAdded ? "Added" : "Add"}

</button>

        </div>

    </div>

`;

    cartHTML += `

        <div class="cart-summary">

            <div>

                <span>Total Items</span>

                <strong>

                    ${cart.reduce(

        (total, item) =>

            total + item.quantity,

        0

    ) + (tapeAdded ? 1 : 0)

        }

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
DOUBLE-SIDED POSTER TAPE
========================================================== */

function togglePosterTape() {

    tapeAdded = !tapeAdded;

    localStorage.setItem(
        "cuPosterTapeAdded",
        tapeAdded
    );

    updateCart();

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


checkoutButton?.addEventListener(

    "click",

    () => {


        if (cart.length === 0) {


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
/* ==========================================================
   ALL POSTERS PAGE — SEARCH
========================================================== */

const posterSearch =

    document.getElementById("posterSearch");


const clearPosterSearch =

    document.getElementById("clearPosterSearch");


const noPostersFound =

    document.getElementById("noPostersFound");





/* ==========================================================
   FILTER POSTERS USING SEARCH
========================================================== */

function searchAllPosters() {

    if (!posterSearch || !allPostersGrid) {

        return;

    }


    const searchText =

        posterSearch.value
            .toLowerCase()
            .trim();


    const posterCards =

        allPostersGrid
            .querySelectorAll(".poster-card");


    let matchingPosters = 0;


    posterCards.forEach(card => {


        const posterName =

            card
                .querySelector(".poster-title")
                ?.textContent
                .toLowerCase() || "";


        const posterCategory =

            card
                .querySelector(".poster-category")
                ?.textContent
                .toLowerCase() || "";


        const posterMatches =

            posterName.includes(searchText) ||

            posterCategory.includes(searchText);


        if (posterMatches) {

            card.style.display = "";

            matchingPosters++;

        }

        else {

            card.style.display = "none";

        }

    });


    /* UPDATE POSTER COUNT */

    if (visiblePosterCount) {

        visiblePosterCount.textContent =

            matchingPosters;

    }


    /* SHOW OR HIDE CLEAR BUTTON */

    if (clearPosterSearch) {

        clearPosterSearch.classList.toggle(

            "visible",

            searchText.length > 0

        );

    }


    /* SHOW NO RESULTS MESSAGE */

    if (noPostersFound) {

        noPostersFound.classList.toggle(

            "active",

            matchingPosters === 0

        );

    }

}


/* ==========================================================
   SEARCH WHILE USER TYPES
========================================================== */

if (posterSearch) {

    posterSearch.addEventListener(

        "input",

        searchAllPosters

    );

}


/* ==========================================================
   CLEAR SEARCH
========================================================== */

if (clearPosterSearch) {

    clearPosterSearch.addEventListener(

        "click",

        () => {


            posterSearch.value = "";


            searchAllPosters();


            posterSearch.focus();


        }

    );

}

/* ==========================================================
   CATEGORY PAGE SYSTEM
========================================================== */

const categoriesPageSection =
    document.querySelector(".categories-page-section");

const individualCategoryView =
    document.getElementById("individualCategoryView");

const categoryPageParameters =
    new URLSearchParams(window.location.search);

const selectedCategory =
    categoryPageParameters.get("category");


if (
    categoriesPageSection &&
    individualCategoryView &&
    selectedCategory
) {

    categoriesPageSection.style.display = "none";

    individualCategoryView.style.display = "block";


    if (selectedCategory === "anime") {

        individualCategoryView.innerHTML = `

        <section class="individual-category-hero">

            <div class="container">


                <a
                    href="categories.html"
                    class="back-to-categories"
                >

                    <i class="fa-solid fa-arrow-left"></i>

                    All Categories

                </a>


                <span class="featured-tag">

                    <i class="fa-solid fa-fire"></i>

                    ANIME COLLECTION

                </span>


                <h1>

                    Anime Posters

                </h1>


                <p>

                    Explore posters from your favourite
                    anime series and characters.

                </p>


            </div>

        </section>

        <!-- ANIME SUBCATEGORIES -->

<section class="anime-collection-section">

    <div class="container">

        <div class="anime-section-heading">

            <div>

                <span class="section-eyebrow">

                    EXPLORE ANIME

                </span>

                <h2>

                    Browse by Anime

                </h2>

                <p>

                    Choose your favourite anime series
                    and discover its poster collection.

                </p>

            </div>

        </div>


        <div class="anime-filter-buttons">

            <button
                class="anime-filter-btn active"
                data-anime="all"
            >

                <i class="fa-solid fa-layer-group"></i>

                All Anime

            </button>


            <button
                class="anime-filter-btn"
                data-anime="naruto"
            >

                Naruto

            </button>


            <button
                class="anime-filter-btn"
                data-anime="one-piece"
            >

                One Piece

            </button>


            <button
                class="anime-filter-btn"
                data-anime="demon-slayer"
            >

                Demon Slayer

            </button>


            <button
                class="anime-filter-btn"
                data-anime="jujutsu-kaisen"
            >

                Jujutsu Kaisen

            </button>


            <button
                class="anime-filter-btn"
                data-anime="attack-on-titan"
            >

                Attack on Titan

            </button>


            <button
                class="anime-filter-btn"
                data-anime="dragon-ball"
            >

                Dragon Ball

            </button>


            <button
                class="anime-filter-btn"
                data-anime="bleach"
            >

                Bleach

            </button>


            <button
                class="anime-filter-btn"
                data-anime="haikyuu"
            >

                Haikyuu

            </button>


            <button
                class="anime-filter-btn"
                data-anime="blue-lock"
            >

                Blue Lock

            </button>

            <button class="anime-filter-btn" data-anime="death-note">
    Death Note
</button>

<button class="anime-filter-btn" data-anime="solo-leveling">
    Solo Leveling
</button>

<button class="anime-filter-btn" data-anime="tokyo-ghoul">
    Tokyo Ghoul
</button>

<button class="anime-filter-btn" data-anime="chainsaw-man">
    Chainsaw Man
</button>

<button class="anime-filter-btn" data-anime="tokyo-revengers">
    Tokyo Revengers
</button>

<button class="anime-filter-btn" data-anime="black-clover">
    Black Clover
</button>

<button class="anime-filter-btn" data-anime="vinland-saga">
    Vinland Saga
</button>

<button class="anime-filter-btn" data-anime="hunter-x-hunter">
    Hunter × Hunter
</button>

<button class="anime-filter-btn" data-anime="spy-x-family">
    Spy × Family
</button>

<button class="anime-filter-btn" data-anime="my-hero-academia">
    My Hero Academia
</button>

<button class="anime-filter-btn" data-anime="berserk">
    Berserk
</button>

<button class="anime-filter-btn" data-anime="studio-ghibli">
    Studio Ghibli
</button>

<button class="anime-filter-btn" data-anime="rezero">
    Re:Zero
</button>

<button class="anime-filter-btn" data-anime="your-lie-in-april">
    Your Lie in April
</button>

        </div>

    </div>

</section>

<!-- ANIME POSTER COLLECTION -->

<section class="anime-posters-section">

    <div class="container">


        <div class="anime-posters-header">

            <div>

                <span class="section-eyebrow">

                    POSTER COLLECTION

                </span>

                <h2 id="animeCollectionTitle">

                    All Anime Posters

                </h2>

                <p id="animeCollectionDescription">

                    Browse all available posters from
                    our anime collection.

                </p>

            </div>


            <span
                class="anime-poster-count"
                id="animePosterCount"
            >

                0 Posters

            </span>

        </div>



        <div
            class="anime-posters-grid"
            id="animePostersGrid"
        >

            <!-- Anime poster cards will appear here -->

        </div>


        <div
            class="anime-empty-state"
            id="animeEmptyState"
        >

            <div class="anime-empty-icon">

                <i class="fa-solid fa-images"></i>

            </div>

            <h3>

                Posters Coming Soon

            </h3>

            <p>

                We are adding posters to this collection.
                Check back soon.

            </p>

        </div>


    </div>

</section>

    `;

    }

}

/* ==========================================================
   DISPLAY ANIME POSTERS
========================================================== */

const animePostersGrid =
    document.getElementById("animePostersGrid");

const animePosterCount =
    document.getElementById("animePosterCount");

const animeEmptyState =
    document.getElementById("animeEmptyState");


if (animePostersGrid) {

    const animePosters = posters.filter(

        poster => poster.category === "Anime"

    );


    animePosters.forEach(poster => {

        animePostersGrid.innerHTML +=
            createPosterCard(poster);

    });


    if (animePosterCount) {

        animePosterCount.textContent =
            `${animePosters.length} Posters`;

    }


    if (
        animeEmptyState &&
        animePosters.length > 0
    ) {

        animeEmptyState.style.display = "none";

    }

}



/* ==========================================================
   ANIME FILTER BUTTONS + OPEN FILTER FROM URL
========================================================== */

const animeFilterButtons =
    document.querySelectorAll(".anime-filter-btn");


const selectedAnimeFromURL =
    categoryPageParameters.get("anime") || "all";


function showSelectedAnime(selectedAnime) {

    let filteredPosters = [];


    /* SHOW ALL ANIME POSTERS */

    if (selectedAnime === "all") {

        filteredPosters = posters.filter(

            poster =>
                poster.category === "Anime"

        );

    }


    /* SHOW POSTERS FROM SELECTED ANIME */

    else {

        filteredPosters = posters.filter(

            poster =>

                poster.category === "Anime"

                &&

                poster.series
                    .toLowerCase()
                    .replaceAll(" ", "-")

                === selectedAnime

        );

    }


    /* CLEAR OLD POSTERS */

    if (animePostersGrid) {

        animePostersGrid.innerHTML = "";


        /* CREATE COMPLETE POSTER CARDS */

        filteredPosters.forEach(poster => {

            animePostersGrid.innerHTML +=

                createPosterCard(poster);

        });

    }


    /* GET SELECTED ANIME NAME */

    const selectedButton =

        document.querySelector(

            `.anime-filter-btn[data-anime="${selectedAnime}"]`

        );


    const selectedAnimeName =

        selectedButton

            ? selectedButton.textContent.trim()

            : "All Anime";


    /* CHANGE COLLECTION HEADING */

    const animeCollectionTitle =

        document.getElementById(

            "animeCollectionTitle"

        );


    const animeCollectionDescription =

        document.getElementById(

            "animeCollectionDescription"

        );


    if (animeCollectionTitle) {

        animeCollectionTitle.textContent =

            selectedAnime === "all"

                ? "All Anime Posters"

                : `${selectedAnimeName} Posters`;

    }


    if (animeCollectionDescription) {

        animeCollectionDescription.textContent =

            selectedAnime === "all"

                ? "Browse all available posters from our anime collection."

                : `Browse all available posters from our ${selectedAnimeName} collection.`;

    }


    /* UPDATE POSTER NUMBER */

    if (animePosterCount) {

        animePosterCount.textContent =

            `${filteredPosters.length} Posters`;

    }


    /* SHOW EMPTY MESSAGE */

    if (animeEmptyState) {

        animeEmptyState.style.display =

            filteredPosters.length === 0

                ? "flex"

                : "none";

    }

}


/* ==========================================================
   FILTER WHEN USER CLICKS AN ANIME
========================================================== */

animeFilterButtons.forEach(button => {

    button.addEventListener("click", () => {


        animeFilterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedAnime =

            button.dataset.anime;


        showSelectedAnime(

            selectedAnime

        );


        /* UPDATE URL WITHOUT RELOADING PAGE */

        const newURL =

            selectedAnime === "all"

                ? "categories.html?category=anime"

                : `categories.html?category=anime&anime=${selectedAnime}`;


        window.history.replaceState(

            {},

            "",

            newURL

        );

    });

});


/* ==========================================================
   AUTOMATICALLY OPEN ANIME FROM URL
========================================================== */

animeFilterButtons.forEach(button => {

    button.classList.toggle(

        "active",

        button.dataset.anime ===
        selectedAnimeFromURL

    );

});


showSelectedAnime(

    selectedAnimeFromURL

);

/* ==========================================================
   COMPLETE PRODUCT PAGE SYSTEM
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ------------------------------------------------------
       RUN ONLY ON PRODUCT.HTML
    ------------------------------------------------------ */

    if (!window.location.pathname.includes("product.html")) {
        return;
    }


    /* ------------------------------------------------------
       GET PRODUCT FROM URL
    ------------------------------------------------------ */

    const urlParams =
        new URLSearchParams(window.location.search);

    const productId =
        Number(urlParams.get("id"));

    const currentProduct =
        posters.find(function (poster) {

            return poster.id === productId;

        });


    if (!currentProduct) {

        console.error(
            "Poster not found. Product ID:",
            productId
        );

        return;

    }


    /* ------------------------------------------------------
       PRODUCT ELEMENTS
    ------------------------------------------------------ */

    const productMainImage =
        document.getElementById(
            "productMainImage"
        );

    const productName =
        document.getElementById(
            "productName"
        );

    const productBreadcrumbName =
        document.getElementById(
            "productBreadcrumbName"
        );

    const productCategory =
        document.getElementById(
            "productCategory"
        );

    const productBadge =
        document.getElementById(
            "productBadge"
        );

    const productSizeOptions =
        document.getElementById(
            "productSizeOptions"
        );

    const productSelectedPrice =
        document.getElementById(
            "productSelectedPrice"
        );

    const productAddToCart =
        document.getElementById(
            "productAddToCart"
        );


    /* ------------------------------------------------------
       SHOW PRODUCT INFORMATION
    ------------------------------------------------------ */

    if (productMainImage) {

        productMainImage.src =
            currentProduct.image;

        productMainImage.alt =
            currentProduct.name;

    }


    if (productName) {

        productName.textContent =
            currentProduct.name;

    }


    if (productBreadcrumbName) {

        productBreadcrumbName.textContent =
            currentProduct.name;

    }


    if (productCategory) {

        productCategory.textContent =
            currentProduct.category;

    }


    if (productBadge) {

        productBadge.textContent =
            currentProduct.badge;

    }


    /* ======================================================
       1. PRODUCT SIZE SELECTION
    ====================================================== */

    const productSizes = [

        {
            size: "A6",
            price: 15,
            dimensions: "10.5 × 14.8 cm"
        },

        {
            size: "A5",
            price: 25,
            dimensions: "14.8 × 21 cm"
        },

        {
            size: "A4",
            price: 35,
            dimensions: "21 × 29.7 cm"
        },

        {
            size: "A3",
            price: 55,
            dimensions: "29.7 × 42 cm"
        },

        {
            size: "A2",
            price: 95,
            dimensions: "42 × 59.4 cm"
        }

    ];


    let selectedProductSize = null;

    let selectedProductPrice = null;


    if (productSizeOptions) {

        productSizeOptions.innerHTML = "";


        productSizes.forEach(function (option) {

            const sizeButton =
                document.createElement("button");


            sizeButton.type = "button";

            sizeButton.className =
                "product-size-option";


            sizeButton.innerHTML = `

                <span>

                    ${option.size}

                </span>

                <small>

                    ${option.dimensions}

                </small>

                <strong>

                    ₹${option.price}

                </strong>

            `;


            sizeButton.addEventListener(
                "click",
                function () {


                    document
                        .querySelectorAll(
                            ".product-size-option"
                        )
                        .forEach(function (button) {

                            button.classList.remove(
                                "active"
                            );

                        });


                    sizeButton.classList.add(
                        "active"
                    );


                    selectedProductSize =
                        option.size;


                    selectedProductPrice =
                        option.price;


                    if (productSelectedPrice) {

                        productSelectedPrice
                            .textContent =

                            `${option.size} — ₹${option.price}`;

                    }

                }
            );


            productSizeOptions.appendChild(
                sizeButton
            );

        });

    }


    /* ======================================================
       2. PRODUCT PAGE ADD TO CART
    ====================================================== */

    if (productAddToCart) {

        productAddToCart.addEventListener(
            "click",
            function () {


                if (
                    !selectedProductSize ||
                    !selectedProductPrice
                ) {

                    alert(
                        "Please select a poster size."
                    );

                    return;

                }


                const existingProduct =
                    cart.find(function (item) {

                        return (

                            item.name ===
                            currentProduct.name

                            &&

                            item.size ===
                            selectedProductSize

                        );

                    });


                if (existingProduct) {

                    existingProduct.quantity++;

                }

                else {

                    cart.push({

                        name:
                            currentProduct.name,

                        image:
                            currentProduct.image,

                        size:
                            selectedProductSize,

                        price:
                            Number(
                                selectedProductPrice
                            ),

                        quantity: 1

                    });

                }


                updateCart();


                if (cartDrawer) {

                    cartDrawer.classList.add(
                        "open"
                    );

                }

            }
        );

    }


    /* ======================================================
       3. PRODUCT IMAGE THUMBNAIL
    ====================================================== */

    const productThumbnails =
        document.getElementById(
            "productThumbnails"
        );


    if (
        productThumbnails &&
        productMainImage
    ) {

        productThumbnails.innerHTML = `

            <button
                type="button"
                class="product-thumbnail active"
            >

                <img
                    src="${currentProduct.image}"
                    alt="${currentProduct.name}"
                >

            </button>

        `;


        const thumbnailButton =
            productThumbnails.querySelector(
                ".product-thumbnail"
            );


        thumbnailButton?.addEventListener(
            "click",
            function () {

                productMainImage.src =
                    currentProduct.image;

            }
        );

    }


    /* ======================================================
       4. RELATED POSTERS
    ====================================================== */

    /* ======================================================
    SMART RELATED POSTER LOGIC
 
    Priority:
    1. Same anime/series
    2. Never show current poster
    3. Show maximum four posters
 ====================================================== */

    const relatedPosters =

        posters

            .filter(function (poster) {

                return (

                    poster.id !==
                    currentProduct.id

                    &&

                    poster.series ===
                    currentProduct.series

                );

            })

            .slice(0, 4);


    const relatedSection =
        document.createElement("section");


    relatedSection.className =
        "related-products-section";


    relatedSection.innerHTML = `

        <div class="container">

            <div class="related-products-heading">

    <div>

        <span>

            YOU MAY ALSO LIKE

        </span>

        <h2>

            More From ${currentProduct.series}

        </h2>

        <p>

            Discover more posters from
            our ${currentProduct.series}
            collection.

        </p>

    </div>


    <a
        href="categories.html?category=anime&anime=${currentProduct.series
            .toLowerCase()
            .replaceAll(" ", "-")}"
        class="view-related-category"
    >

        View All ${currentProduct.series} Posters

        <i
            class="fa-solid fa-arrow-right"
        ></i>

    </a>

</div>


            <div
                class="related-products-grid"
            >

                ${relatedPosters
            .map(function (poster) {

                return `

                            <a
                                href="product.html?id=${poster.id}"
                                class="related-product-card"
                            >

                                <div
                                    class="related-product-image"
                                >

                                    <img
    src="${poster.image}"
    alt="${poster.name}"
    loading="lazy"
    decoding="async"
    width="300"
    height="424"
>

                                </div>


                                <div
                                    class="related-product-info"
                                >

                                    <h3>

                                        ${poster.name}

                                    </h3>


                                    <p>

                                        Starting ₹15

                                    </p>

                                </div>

                            </a>

                        `;

            })

            .join("")}

            </div>

        </div>

    `;


    const productMain =
        document.querySelector(
            ".product-main"
        );


    if (productMain) {

        productMain.insertAdjacentElement(
            "afterend",
            relatedSection
        );

    }


    /* ======================================================
       5. SIZE GUIDE POPUP
    ====================================================== */

    const sizeGuideButton =
        document.querySelector(
            ".product-size-guide-btn"
        );


    const sizeGuideModal =
        document.createElement("div");


    sizeGuideModal.className =
        "product-size-guide-modal";


    sizeGuideModal.innerHTML = `

        <div
            class="product-size-guide-box"
        >

            <button
                type="button"
                class="close-product-size-guide"
                aria-label="Close size guide"
            >

                <i
                    class="fa-solid fa-xmark"
                ></i>

            </button>


            <span
                class="size-guide-label"
            >

                POSTER SIZE GUIDE

            </span>


            <h2>

                Choose the Right Poster Size

            </h2>


            <p>

                Compare the dimensions below
                before choosing your poster.

            </p>


            <div
                class="size-guide-list"
            >

                ${productSizes
            .map(function (option) {

                return `

                            <div
                                class="size-guide-row"
                            >

                                <strong>

                                    ${option.size}

                                </strong>


                                <span>

                                    ${option.dimensions}

                                </span>


                                <b>

                                    ₹${option.price}

                                </b>

                            </div>

                        `;

            })

            .join("")}

            </div>

        </div>

    `;


    document.body.appendChild(
        sizeGuideModal
    );


    sizeGuideButton?.addEventListener(
        "click",
        function () {

            sizeGuideModal.classList.add(
                "active"
            );

        }
    );


    const closeSizeGuide =
        sizeGuideModal.querySelector(
            ".close-product-size-guide"
        );


    closeSizeGuide?.addEventListener(
        "click",
        function () {

            sizeGuideModal.classList.remove(
                "active"
            );

        }
    );


    sizeGuideModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                sizeGuideModal
            ) {

                sizeGuideModal.classList.remove(
                    "active"
                );

            }

        }
    );


});



console.log(
    "CU Poster Hub Version 4 Loaded Successfully 🚀"
);