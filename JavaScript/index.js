// ? Targeting the burger icon element.
const burgerMenuImg = document.querySelector(".burger-menu-mob");

// ? Targeting the parent of the nav and the wrapper.
const navAndWrapper = document.querySelector(".nav-and-wrapper");

// ? Creating the function that responsible for making the nav element and the wrapper visible.
function showNav() {
  navAndWrapper.style.display = "flex";
}

// ? Adding the click event listener to the burger menu.
burgerMenuImg.addEventListener("click", showNav);

// ? Targeting the close icon image.
const closeIconImg = document.querySelector(".close-img-mob");

// ? Creating the function which is responsible for hiding the nav and the wrapper.
function hideNav() {
  navAndWrapper.style.display = "none";
}

// ? Adding the click event listener to the burger menu to hide the nav and the wrapper.
closeIconImg.addEventListener("click", hideNav);

// ? Targeting the cart icon img and cart box.
const cartIconImg = document.querySelector(".cart-img-mob");
const cartBox = document.querySelector(".cart-box-mob");

// ? Creating the function which is responsible for toggling the hidden class.
function showCartBox() {
  cartBox.classList.toggle("hidden");
}

// ? Adding the click event listener to the cartIconImg variable.
cartIconImg.addEventListener("click", showCartBox);

// ? Style the body and the containers with low z index to make the arrows on top of the elements.
document.body.style.position = "relative";
document.body.style.zIndex = "-1";
document.querySelector(".container").style.position = "relative";
document.querySelector(".container").style.zIndex = "-1";
document.querySelector(".mobile-cont").style.position = "relative";
document.querySelector(".mobile-cont").style.zIndex = "-1";

// ? Targeting the images in images carousel section.
const carouselImages = [...document.querySelectorAll(".carousel .image")];

// ? Targeting the arrows of the images carousel.
const previousArrow = document.querySelector(".carousel .arrow-left");
const nextArrow = document.querySelector(".carousel .arrow-right");

// ? Create the index which we will move the images upon it.
let index = 0;
