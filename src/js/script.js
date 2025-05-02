const BASE_URL = "https://dummyjson.com";
const box = document.querySelector(".box");

function renderDetail(data) {
  console.log(data);
  
  box.innerHTML = `
  <div>
      <img width="500" src=${data.image} alt="">
  </div>
  <div>
      <h1>${data.name}</h1>
  </div>
  
  `;
}

function fetchData(endpoint) {
  fetch(`${BASE_URL}${endpoint}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("something went wrong :(");
      }
      return res.json();
    })
    .then((data) => {
      renderDetail(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadingEl.style.display = "none"
    });
}

window.addEventListener("load", () => {
  let params = new URLSearchParams(location.search);
  fetchData(`/products/${params.get("q")}`);
});