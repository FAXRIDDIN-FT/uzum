import { fetchData } from "./main.js"
const boxEl = document.querySelector(".box")
const params = new URLSearchParams(location.search)

function renderRecipeDetail (data){
  console.log(data);
  boxEl.innerHTML = `
     <div>
        <img src=${data.thumbnail} width="400" alt=${data.title}>
      </div>
      <div>
        <h1>${data.description}</h1>
        <p>${data.category}</p>
      </div>
  `
}
    

window.onload = ()=>{
  const id = params.get("id")
  fetchData(`/products/${id}`,renderRecipeDetail, ()=>{} )

}
