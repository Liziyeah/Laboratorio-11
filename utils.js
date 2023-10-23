export const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

export class ItemShop {
  constructor(id, title, price, description, category, image, rating) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }

  render() {
    const item = document.createElement("div");
    item.id = "item";

    const img = document.createElement("img");
    img.id = "img";
    img.src = this.image;

    const texto = document.createElement("div");
    texto.id = "texto";

    const title = document.createElement("div");
    title.id = "nombre";
    title.innerHTML = `Title: ${this.title}`;

    const precio = document.createElement("div");
    precio.id = "precio";
    precio.innerHTML = "$" + this.price;

    const comprar = document.createElement("div");
    comprar.id = "comprar";
    comprar.innerHTML = "Comprar";

    const buyButton = document.createElement("button");
    buyButton.classList.add("product-item__button");
    buyButton.textContent = "Buy Now";
    buyButton.setAttribute("data-product-id", item.id);

    item.appendChild(img);
    item.appendChild(texto);
    item.appendChild(buyButton);

    texto.appendChild(title);
    texto.appendChild(precio);
    texto.appendChild(comprar);

    return item;
  }
}
