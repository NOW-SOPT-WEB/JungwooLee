import { shoppingList } from "./constants.js";

const cartList = sessionStorage.getItem("cartList")
  ? JSON.parse(sessionStorage.getItem("cartList"))
  : [];

const addToCart = (item) => {
  const idx = cartList.findIndex((cartItem) => cartItem.id === item.id);

  if (idx === -1) {
    cartList.push(item);
    sessionStorage.setItem("cartList", JSON.stringify(cartList));
  } else {
    alert("이미 장바구니에 담긴 상품입니다!");
  }
};

const renderShoppingList = (shoppingList) => {
  const sectionItems = document.querySelector(".section_items");

  sectionItems.innerHTML = "";

  shoppingList.forEach((item) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section_item " + item.category;

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name + " 이미지";
    img.className = "section_item_img";

    const heartButton = document.createElement("button");
    heartButton.type = "button";
    heartButton.className = "heart_button";

    const heartImage = document.createElement("img");
    heartImage.src = "./assets/svg/ic_heart.svg";
    heartImage.alt = "Heart icon";

    heartButton.appendChild(heartImage);

    console.log(heartImage);

    const productName = document.createElement("p");
    productName.textContent = item.name;
    productName.className = "product_name";

    const productPrice = document.createElement("p");
    productPrice.textContent = item.price.toLocaleString();
    productPrice.className = "product_price";

    sectionItem.appendChild(img);
    sectionItem.appendChild(heartButton);
    sectionItem.appendChild(productName);
    sectionItem.appendChild(productPrice);

    sectionItem.addEventListener("click", () => {
      confirm(`${item.name} 장바구니에 담으시겠습니까?`) && addToCart(item);
    });

    sectionItems.appendChild(sectionItem);
  });
};

const filterButtons = document.querySelectorAll(".nav_button");

const filterShoppingList = (category) => {
  const filteredList =
    category === "entire"
      ? shoppingList
      : shoppingList.filter((item) => item.category === category);
  renderShoppingList(filteredList);

  const sectionHeaderTitle = document.querySelector(".section_header_title");
  sectionHeaderTitle.textContent =
    document.getElementById(category).textContent;
};

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.id;
    filterShoppingList(category);
  });
});

const homeButton = document.querySelector(".home_button");
homeButton.addEventListener(
  "click",
  () => (window.location.href = "./index.html")
);

const rightMenuModal = document.querySelector(".right_menu_modal");

const openModal = () => {
  rightMenuModal.classList.remove("modal_hide");
  rightMenuModal.classList.add("modal_show");
};

const closeModal = () => {
  rightMenuModal.classList.remove("modal_show");
  rightMenuModal.classList.add("modal_hide");
};

const hamburgerButton = document.querySelector(".hamburger_button");
hamburgerButton.addEventListener("click", openModal);

const closeModalButton = document.querySelector(".close_modal_button");
closeModalButton.addEventListener("click", closeModal);

//초기 렌더링

renderShoppingList(shoppingList);
