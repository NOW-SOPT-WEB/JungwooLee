const buyList = [];

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
    remarksTd.appendChild(removeButton);
    tr.appendChild(remarksTd);

    tbody.appendChild(tr);
  });
};

const cartList = JSON.parse(sessionStorage.getItem("cartList"))
  ? JSON.parse(sessionStorage.getItem("cartList"))
  : [];

console.log(cartList);

renderCartItems(cartList);
