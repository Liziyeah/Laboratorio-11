import { getData, ItemShop } from "./utils.js";

const handleBuyButtonClick = (productId) => {
  window.location.href = `productos.html?productID=${productId}`;
};

const render = async () => {
  const data = await getData();

  const container = document.querySelector("#container");
  const buyButton = document.querySelector("#button");

  for (const product of data) {
    const item = new ItemShop(
      product.id,
      product.title,
      product.price,
      product.description,
      product.category,
      product.image,
      product.rating
    );

    const divProduct = item.render();

    container.appendChild(divProduct);

    // buyButton.addEventListener("click", () => {
    //   handleBuyButtonClick(item.id);
    // });
  }
};

window.onload = async () => {
  await render();
};
