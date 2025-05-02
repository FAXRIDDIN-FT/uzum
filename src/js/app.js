const BASE_URL = "https://dummyjson.com";
const skeletonEl = document.querySelector(".skeleton");
const wrapperEl = document.querySelector(".wrapper");

function renderProducts(data) {
  const fragment = document.createDocumentFragment();

  data.products.forEach((products) => {
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.id = products.id;
    card.innerHTML = `
            <img name="card-image" src=${products.thumbnail} alt=${products.title}>
            <h4>katta savdo</h4>
            <h3>${products.title}</h3>
            <p>${products.category}</p>
            <b>${products.price}</b>
        `;
    fragment.appendChild(card);
  });
  wrapperEl.appendChild(fragment);
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
      renderProducts(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      // loadingEl.style.display = "none"
      skeletonEl.style.display = "none";
    });
}

function renderSkeleton(count) {
  const fragment = document.createDocumentFragment();
  Array(count)
    .fill("")
    .forEach(() => {
      let skeletonItem = document.createElement("div");
      skeletonItem.className = "skeleton__item";
      skeletonItem.innerHTML = `
            <div class="skeleton__image skeleton__animation"></div>
            <div class="skeleton__text skeleton__animation"></div>
            <div class="skeleton__text skeleton__animation"></div>
        `;
      fragment.appendChild(skeletonItem);
    });
  skeletonEl.appendChild(fragment);
}

window.addEventListener("load", () => {
  fetchData("/products");
  renderSkeleton(20);
});

wrapperEl.addEventListener("click", (event) => {
  let name = event.target.name;
  if (name === "card-image") {
    const id = event.target.closest(".card").dataset.id;
    open(`/pages/products.html?q=${id}`, "_self");
  }
});

// const titleEl = document.querySelector(".title")

// titleEl.addEventListener("click", ()=>{})
// titleEl.onclick = ()=>{}

// const titleEl = document.querySelector(".title")

// titleEl.dataset.loremIpsum = "hello world"

// console.log(titleEl.dataset.laylo);
// console.log(titleEl.dataset.courseId);
// console.log(titleEl.dataset.loremIpsum );

// const collection = document.querySelector(".collection")

// // Event delegation
// collection.addEventListener("click", (event)=>{
//     if(event.target.tagName === "SPAN"){
//         titleEl.innerHTML = event.target.innerHTML
//     }
// })
