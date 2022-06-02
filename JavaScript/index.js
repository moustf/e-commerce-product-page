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
  addCartToLS("isCartAdded", isAddedToCart);
}

// ? Added the event listener to the addToCartBtn element.
addToCartBtn.addEventListener("click", addToCart);

// ? Creating the function which is responsible for adding the isAddedToCart var to local storage.
function addCartToLS(item, isAdded) {
  localStorage.setItem(item, isAdded);
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
  addPriceToLS("price", priceObj);
}

// ? Adding the event listener to the addToCart button to apply the updateCartPriceInfo function.
addToCartBtn.addEventListener("click", updateCartPriceInfo);

// ? Creating the function which is responsible for adding the price to local storage.
function addPriceToLS(item, obj) {
  localStorage.setItem(item, JSON.stringify(obj));
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
  addCartToLS("isCartAdded", isAddedToCart);
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

// ? Targeting the large images and their container.
const largeImagesOneCont = document.querySelector(
  ".inpage-gallery .large-images"
);
const largeImagesOne = document.querySelectorAll(
  ".inpage-gallery .large-images img"
);

// ? Targeting the small images and their container.
const smallImagesOneCont = document.querySelector(
  ".inpage-gallery .small-images"
);
const smallImagesOne = document.querySelectorAll(
  ".inpage-gallery .small-images img"
);

// ? Adding the event listener and the functionality for the showImageBigger functionality.

smallImagesOne.forEach((image) => {
  image.addEventListener("click", (e) => {
    const bigger = largeImagesOneCont.querySelector(
      `[data-img='${e.target.dataset.img}']`
    );
    largeImagesOne.forEach((img) => (img.style.zIndex = "0"));
    bigger.style.zIndex = "1";
  });
});

// ? Targeting the outer gallery.
const outerGallery = document.getElementsByClassName("outer-gallery")[0];

// ? Creating the function that will show the outer gallery.
function showOuterGallery() {
  outerGallery.classList.toggle("hidden");
}

// ? Adding the event listener to the large images div.
largeImagesOneCont.addEventListener("click", showOuterGallery);

// ? Targeting the close icon in the outer gallery.
const outerCloseIcon = document.querySelector(".close-icons");

// ? ADding the function which will close the outer gallery.
function closeOuterGallery() {
  outerGallery.classList.add("hidden");
}

// ? Adding the event listener to the close icon.
outerCloseIcon.addEventListener("click", closeOuterGallery);

// ? Targeting the large images and their container in the outer gallery.
const largeImagesTwoCont = document.querySelector(
  ".outer-gallery .large-images"
);
const largeImagesTwo = document.querySelectorAll(
  ".outer-gallery .large-images img"
);

// ? Targeting the small images and their container in the outer gallery.
const smallImagesTwoCont = document.querySelector(
  ".outer-gallery .small-images"
);
const smallImagesTwo = document.querySelectorAll(
  ".outer-gallery .small-images img"
);

// ? adding the event listener to the small images of the outer gallery.
smallImagesTwo.forEach((image) => {
  image.addEventListener("click", (e) => {
    const bigger = largeImagesTwoCont.querySelector(
      `[data-img='${e.target.dataset.img}']`
    );
    largeImagesTwo.forEach((img) => (img.style.zIndex = "0"));
    bigger.style.zIndex = "1";
  });
});

// ? Targeting the previous and next arrows in the outer gallery.
const outerPreviousArrows = document.querySelector(
  ".outer-gallery .previous-arrows"
);
const outerNextArrows = document.querySelector(".outer-gallery .next-arrows");

// ? Creating the second index for the outer gallery.
let indexTwo = 0;

// ? Creating the next image function for the outer gallery.
function nextImageOuter() {
  if (indexTwo < 4) {
    console.log(indexTwo);
    largeImagesTwo.forEach((img) => (img.style.zIndex = "0"));
    largeImagesTwo[indexTwo].style.zIndex = "5";
    indexTwo++;
  }
}

// ? Adding event listener to the outerNextArrows.
outerNextArrows.addEventListener("click", nextImageOuter);

// ? Creating the previous image function for the outer gallery.
function previousImageOuter() {
  if (indexTwo === 4) {
    largeImagesTwo.forEach((img) => (img.style.zIndex = "0"));
    largeImagesTwo[indexTwo - 2].style.zIndex = "5";
    indexTwo -= 2;
  } else if (indexTwo > 0 && indexTwo < 4) {
    indexTwo--;
    largeImagesTwo.forEach((img) => (img.style.zIndex = "0"));
    largeImagesTwo[indexTwo].style.zIndex = "5";
  }
}
// ? Adding event listener to the outerPreviousArrows.
outerPreviousArrows.addEventListener("click", previousImageOuter);

// ? Targeting the plus desktop icon, the minus desktop icon, and the inner number.
const desktopPlusIcon = document.querySelector(
  ".qun-and-btn .quantity .plus-img"
);
const desktopMinusIcon = document.querySelector(
  ".qun-and-btn .quantity .minus-img"
);
const desktopQunNumber = document.querySelector(
  ".qun-and-btn .quantity .number"
);

// ? Creating the increase quantity function.
function increaseQuantityDesk() {
  let numberOfItems = Number(desktopQunNumber.textContent);
  desktopQunNumber.textContent = ++numberOfItems;
}

// ? Creating the decrease quantity function.
function decreaseQuantityDesk() {
  let numberOfItems = Number(desktopQunNumber.textContent);
  if (numberOfItems > 0) desktopQunNumber.textContent = --numberOfItems;
}

// ? Adding the event listener to the plus desktop icon.
desktopPlusIcon.addEventListener("click", increaseQuantityDesk);

// ? Adding the event listener to the minus desktop icon.
desktopMinusIcon.addEventListener("click", decreaseQuantityDesk);

// ? Targeting the add to cart desktop button.
const AddToCartDeskBtn = document.querySelector(
  ".qun-and-btn .add-to-cart-btn"
);
const cartTextInfoDesk = document.querySelector(
  ".cart-box-desktop .cart-products"
);
const cartEmptyTextDesk = document.querySelector(
  ".cart-box-desktop .cart-box-info .cart-empty-text"
);

// ? Added the boolean value to save on local storage.
let isAddedToCartTwo = false;

// ? Added the function that is responsible for adding to cart.
function addToCartDesktop() {
  cartEmptyTextDesk.style.display = "none";
  cartTextInfoDesk.style.display = "flex";
  isAddedToCartTwo = true;
  addCartToLS("isCartAddedTwo", isAddedToCartTwo);
}

// ? Adding the event listener to the add to cart button.
AddToCartDeskBtn.addEventListener("click", addToCartDesktop);

// ? Checking if the local storage have an isCartAddedTwo item to display the cart.
if (localStorage.getItem(`isCartAddedTwo`) === "true") {
  addToCartDesktop();
}

// ? Targeting the quantity number and the total price.
const numberOfProductsD = document.querySelector(
  ".cart-box-desktop .cart-products .text-info .number"
);
const totalPriceD = document.querySelector(
  ".cart-box-desktop .cart-products .text-info .total"
);

// ? creating the function which is responsible for calculating the total price in the desktop cart.
function getTotalPriceDesk() {
  let quantity = +desktopQunNumber.textContent;
  return `$${(quantity * 125).toFixed(2)}`;
}
