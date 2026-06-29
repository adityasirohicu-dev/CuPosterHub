const posters = [
    {
        id: "AN001",
        name: "Naruto",
        cat: "Anime",
        img: "https://picsum.photos/400/600?1"
    },
    {
        id: "AN002",
        name: "One Piece",
        cat: "Anime",
        img: "https://picsum.photos/400/600?2"
    },
    {
        id: "MV001",
        name: "Batman",
        cat: "Movies",
        img: "https://picsum.photos/400/600?3"
    },
    {
        id: "MV002",
        name: "Avengers",
        cat: "Movies",
        img: "https://picsum.photos/400/600?4"
    },
    {
        id: "CR001",
        name: "Supra",
        cat: "Cars",
        img: "https://picsum.photos/400/600?5"
    },
    {
        id: "GM001",
        name: "Minecraft",
        cat: "Gaming",
        img: "https://picsum.photos/400/600?6"
    }
];

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

const grid = document.getElementById("grid");
const count = document.getElementById("count");

function render(list = posters) {
    grid.innerHTML = "";

    list.forEach(p => {
        grid.innerHTML += `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <div class="p">
                <h3>${p.name}</h3>
                <p><strong>ID:</strong> ${p.id}</p>
                <p>${p.cat}</p>
                <button onclick="add('${p.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
        `;
    });
}

function save() {
    localStorage.setItem("cart", JSON.stringify(cart));
    count.textContent = cart.length;
}

function add(id) {
    if (!cart.includes(id)) {
        cart.push(id);
    }

    save();
    renderCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("hidden");
}

document.getElementById("cartBtn").onclick = toggleCart;

function renderCart() {

    const items = document.getElementById("cartItems");
    const codes = document.getElementById("codes");

    items.innerHTML = "";
    codes.innerHTML = "";

    cart.forEach(id => {

        const poster = posters.find(p => p.id === id);

        items.innerHTML += `
            <p>
                ${poster.name} - ${poster.id}
                <button onclick="removeItem('${id}')">
                    Remove
                </button>
            </p>
        `;

        codes.innerHTML += `
            <div>${poster.id}</div>
        `;
    });

    save();
}

function removeItem(id) {

    cart = cart.filter(item => item !== id);

    renderCart();
}

document.getElementById("search").addEventListener("input", function (e) {

    const query = e.target.value.toLowerCase();

    const filtered = posters.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query)
    );

    render(filtered);
});

document.querySelectorAll("#filters button").forEach(button => {

    button.addEventListener("click", function () {

        const category = this.dataset.cat;

        if (category === "All") {
            render(posters);
        } else {
            render(
                posters.filter(p => p.cat === category)
            );
        }
    });

});

render();
renderCart();