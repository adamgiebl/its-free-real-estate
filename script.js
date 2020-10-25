const container = document.querySelector("#houses");

renderHouses = (data) => {
  data.forEach((house) => {
    console.log(house);
    const template = document.querySelector("#house-template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("img").src = house.image.guid;
    clone.querySelector(".address h2").textContent = house.address;
    clone.querySelector(".bed-value").textContent = house.beds;
    clone.querySelector(".bath-value").textContent = house.baths;
    clone.querySelector(".size-value").textContent = house.size;
    container.appendChild(clone);
  });
};

fetch("https://javasquipt.com/wp-json/wp/v2/house")
  .then((res) => res.json())
  .then((data) => {
    renderHouses(data);
  });