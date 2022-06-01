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

// ? Create the function which is responsible for moving the images forward.
function nextImage() {
  if (index < 4) {
    carouselImages.forEach((img) => (img.style.zIndex = "0"));
    carouselImages[index].style.zIndex = "5";
    index++;
  }
}

// ? Adding the event listener to apply the nextImage function on click.
nextArrow.addEventListener("click", nextImage);

// ? Added the function which is responsible for moving the images backwards.
function previousImage() {
  if (index === 4) {
    carouselImages.forEach((img) => (img.style.zIndex = "0"));
    carouselImages[index - 2].style.zIndex = "5";
    index -= 2;
  } else if (index > 0 && index < 4) {
    index--;
    carouselImages.forEach((img) => (img.style.zIndex = "0"));
    carouselImages[index].style.zIndex = "5";
  }
}

// ? Adding the event listener to apply previousImage function.
previousArrow.addEventListener("click", previousImage);

// ? Targeting the plus and minus images and the number p in which the quantity will be held.
const plusImage = document.querySelector(".quantity .plus-img");
const minusImage = document.querySelector(".quantity .minus-image");
const quantityNum = document.querySelector(".quantity .number");

// ? Creating the function which is responsible for increasing the quantity.
function increaseQuantity() {
  let numberOfItems = Number(quantityNum.textContent);
  quantityNum.textContent = ++numberOfItems;
}

// ? Adding the event listener to the plus icon.
plusImage.addEventListener("click", increaseQuantity);

// ? Creating the function which is responsible for decreasing the quantity.
function decreaseQuantity() {
  let numberOfItems = Number(quantityNum.textContent);
  if (numberOfItems > 0) quantityNum.textContent = --numberOfItems;
}

// ? Adding the event listener to the minus icon.
minusImage.addEventListener("click", decreaseQuantity);

// ? Targeting the elements needed for add to cart functionality.
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const cartEmptyText = document.querySelector(".cart-empty-text");
const cartProducts = document.querySelector(".cart-products");

// ? Added the boolean value to save on local storage.
let isAddedToCart = false;

// ? Added the function that is responsible for adding to cart.
function addToCart() {
  cartEmptyText.style.display = "none";
  cartProducts.style.display = "flex";
  isAddedToCart = true;
  addCartToLS(isAddedToCart);
}

// ? Added the event listener to the addToCartBtn element.
addToCartBtn.addEventListener("click", addToCart);

// ? Creating the function which is responsible for adding the isAddedToCart var to local storage.
function addCartToLS(isAdded) {
  localStorage.setItem("isCartAdded", isAdded);
}

// ? Testing if local storage has items, then render them onto the page.
if (localStorage.getItem("isCartAdded") === "true") {
  addToCart();
}

// ? Targeting the cart price elements.
const singlePrice = document.querySelector(".inner-text .price .single");
const numberOfProducts = document.querySelector(".inner-text .price .number");
const totalPrice = document.querySelector(".inner-text .price .total");

// ? creating the function which is responsible for calculating the total price.
function getTotalPrice() {
  let quantity = +quantityNum.textContent;
  return `$${(quantity * 125).toFixed(2)}`;
}

// ? Creating the function which is responsible for updating the price info in the cart box.
function updateCartPriceInfo() {
  numberOfProducts.textContent = quantityNum.textContent;
  totalPrice.textContent = getTotalPrice();
  const priceObj = {
    num: +quantityNum.textContent,
    total: +quantityNum.textContent * 125,
  };
  addPriceToLS(priceObj);
}

// ? Adding the event listener to the addToCart button to apply the updateCartPriceInfo function.
addToCartBtn.addEventListener("click", updateCartPriceInfo);

// ? Creating the function which is responsible for adding the price to local storage.
function addPriceToLS(obj) {
  localStorage.setItem("price", JSON.stringify(obj));
}

// ? Get price data form local storage.
function getPriceFromLS() {
  if (localStorage.getItem("price")) {
    let data = JSON.parse(localStorage.getItem("price"));
    numberOfProducts.textContent = data.num;
    totalPrice.textContent = `$${(data.num * 125).toFixed(2)}`;
  }
}
getPriceFromLS();

// ? Targeting the delete image in the cart.
const deleteImg = document.querySelector(".text-info .delete-img");

// ? Creating the function which is responsible for deleting form cart.
function removeCartProducts() {
  cartEmptyText.style.display = "block";
  cartProducts.style.display = "none";
  isAddedToCart = false;
  addCartToLS(isAddedToCart);
}

// ? Adding the event listener to the delete image.
deleteImg.addEventListener("click", removeCartProducts);

// ? If the isCartAdded item in local storage is false, hide the product info from ls
if (localStorage.getItem("isCartAdded") === "false") {
  cartEmptyText.style.display = "block";
  cartProducts.style.display = "none";
}

// ? Targeting the desktop cart icon and the cart box in the header section.
const cartDesktop = document.querySelector(".desktop-cont .head .cart-icon");
const cartBoxDesktop = document.querySelector(
  ".desktop-cont .head .cart-box-desktop"
);

// ? Adding the function which is responsible for toggling the hidden class.
function showDesktopCart() {
  cartBoxDesktop.classList.toggle("hidden");
}

// ? Adding the event listener to the cart icon.
cartDesktop.addEventListener("click", showDesktopCart);
