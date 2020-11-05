const container = document.querySelector("#houses");
const readParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

const param = readParameter("id");
if (param) {
  fetch(`https://javasquipt.com/wp-json/wp/v2/house/${param}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("single house", data);
      renderHouse(data);
    });
} else {
  fetch("https://javasquipt.com/wp-json/wp/v2/house")
    .then((res) => res.json())
    .then((data) => {
      renderHouses(data);
    });
}

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
    clone.querySelector(".button-view").href = `?id=${house.id}`;
    container.appendChild(clone);
  });
};

renderHouse = (house) => {
  console.log(house);
  const template = document.querySelector("#house-template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".house").classList.add("house--detail");
  clone.querySelector("img").src = house.image.guid;
  clone.querySelector(".address h2").textContent = house.address;
  clone.querySelector(".bed-value").textContent = house.beds;
  clone.querySelector(".bath-value").textContent = house.baths;
  clone.querySelector(".size-value").textContent = house.size;
  clone.querySelector(".button-view").style.display = "none";
  container.appendChild(clone);
};
