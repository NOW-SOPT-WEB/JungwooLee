let buyList = [];

let cartList = JSON.parse(sessionStorage.getItem("cartList"))
  ? JSON.parse(sessionStorage.getItem("cartList"))
  : [];

const renderCartItems = (cartItems) => {
  const tbody = document.querySelector(".cart_table_body");
  tbody.innerHTML = "";

  cartItems.forEach((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("cart_table_tr");

    const checkboxTd = document.createElement("td");
    checkboxTd.classList.add("cart_table_td");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox_item");
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        buyList.push(item);
      } else {
        buyList = buyList.filter((buyItem) => buyItem.id !== item.id);
      }
      console.log(buyList);
    });

    checkboxTd.appendChild(checkbox);
    tr.appendChild(checkboxTd);

    const imgTd = document.createElement("td");
    imgTd.classList.add("cart_table_td");
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("cart_item_img_wrapper");
    const img = document.createElement("img");
    img.classList.add("cart_item_img");
    img.src = item.img;
    img.alt = item.name + " 사진";
    imgWrapper.appendChild(img);
    imgTd.appendChild(imgWrapper);
    tr.appendChild(imgTd);

    const nameTd = document.createElement("td");
    nameTd.classList.add("cart_table_td");
    nameTd.textContent = item.name;
    tr.appendChild(nameTd);

    const priceTd = document.createElement("td");
    priceTd.classList.add("cart_table_td");
    priceTd.textContent = item.price.toLocaleString() + "원";
    tr.appendChild(priceTd);

    const categoryTd = document.createElement("td");
    categoryTd.classList.add("cart_table_td");
    categoryTd.textContent = item.category;
    tr.appendChild(categoryTd);

    const remarksTd = document.createElement("td");
    remarksTd.classList.add("cart_table_td");

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove_button");
    removeButton.type = "button";
    removeButton.textContent = "삭제";
    removeButton.addEventListener("click", () => {
      cartList = cartList.filter((cartItem) => cartItem.id !== item.id);
      sessionStorage.setItem("cartList", JSON.stringify(cartList));
      renderCartItems(cartList);
    });

    remarksTd.appendChild(removeButton);
    tr.appendChild(remarksTd);

    tbody.appendChild(tr);
  });
};

const allCheckbox = document.querySelector(".checkbox_all");

allCheckbox.addEventListener("change", function () {
  const checkboxes = document.querySelectorAll(".checkbox_item");
  buyList = [];
  if (this.checked) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });

    cartList.map((cartItem) => buyList.push(cartItem));
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  console.log(buyList);
});

const buyModal = document.querySelector(".buy_modal");

const modalXButton = document.querySelector(".modal_x_button");
const cancelButton = document.querySelector(".cancel_button");
const buyModalShowButton = document.querySelector(".buy_modal_show_button");

const closeBuyModal = () => {
  buyModal.style.display = "none";
};

const openBuyModal = () => {
  renderBuyItems(buyList);
  buyModal.style.display = "block";
};

modalXButton.addEventListener("click", () => {
  closeBuyModal();
});

cancelButton.addEventListener("click", () => {
  closeBuyModal();
});

buyModalShowButton.addEventListener("click", () => {
  buyList.length === 0
    ? alert("구매를 원하는 제품을 선택해주세요!!")
    : openBuyModal();
});

const buyItemsList = document.querySelector(".buy_items_list");
const totalPriceSpan = document.querySelector(".total_price");

const renderBuyItems = (items) => {
  buyItemsList.innerHTML = "";

  let totalPrice = 0;

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("buy_item");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name + " 사진";
    img.classList.add("buy_item_img");

    const name = document.createElement("h3");
    name.classList.add("buy_item_name");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("buy_item_price");
    price.textContent = item.price.toLocaleString() + "원";
    totalPrice += item.price;

    listItem.appendChild(img);
    listItem.appendChild(name);
    listItem.appendChild(price);

    buyItemsList.appendChild(listItem);
  });

  totalPriceSpan.textContent = totalPrice.toLocaleString();
};

const homeButtons = document.querySelectorAll(".home_button");

console.log(homeButtons);

homeButtons.forEach((homeButton) => {
  homeButton.addEventListener(
    "click",
    () => (window.location.href = "./index.html")
  );
});

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

const buyButton = document.querySelector(".buy_button");

buyButton.addEventListener("click", () => {
  buyList.forEach((buyItem) => {
    cartList = cartList.filter((cartItem) => cartItem.id !== buyItem.id);
  });

  sessionStorage.setItem("cartList", JSON.stringify(cartList));

  closeBuyModal();

  renderCartItems(cartList);

  buyList = [];
});

console.log(cartList);

renderCartItems(cartList);
