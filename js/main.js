function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = "(" + cart.length + ")";

}

updateCartCount();

/* HERO CUSTOM SETTINGS */

const heroSettings = {

title: "Discover the Beauty of Nature at Your Fingertips",

subtitle: "WELCOME TO URBAN JUNGLE CO.",

buttonText: "Shop Now",

background:
"https://images.unsplash.com/photo-1501004318641-b39e6451bec6"

};


/* APPLY SETTINGS */

document.getElementById("hero-title").innerText = heroSettings.title;

document.getElementById("hero-subtitle").innerText = heroSettings.subtitle;

document.getElementById("hero-btn").innerText = heroSettings.buttonText;

document.documentElement.style.setProperty(
"--hero-image",
`url(${heroSettings.background})`
);
