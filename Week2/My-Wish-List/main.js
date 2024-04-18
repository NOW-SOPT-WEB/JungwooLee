import { shoppingList } from "./constants.js";

const cartList = sessionStorage.getItem("cartList")
  ? JSON.parse(sessionStorage.getItem("cartList"))
  : [];

console.log(cartList);

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
    const heartSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    heartSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    heartSVG.setAttribute("viewBox", "0 0 512 512");
    const heartPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    heartPath.setAttribute(
      "d",
      "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
    );
    heartSVG.appendChild(heartPath);
    heartButton.appendChild(heartSVG);

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
      console.log(item);
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
  console.log(filteredList);
  renderShoppingList(filteredList);

  const sectionHeaderTitle = document.querySelector(".section_header_title");
  sectionHeaderTitle.textContent =
    document.getElementById(category).textContent;
};

console.log(filterButtons);

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
