import { fetchData } from "./main.js";
const boxEl = document.querySelector(".box");
const params = new URLSearchParams(location.search);

function renderRecipeDetail(data) {
  console.log(data);
  boxEl.innerHTML = `

     <div class="ditile_page">
     <h1>${data.category}</h1>
     <br>
     <p>${data.description}</p>
     <br>
        <img src=${data.thumbnail} width="400" alt=${data.title}>
      </div>
             <div class="cards">
                  <b>${data.price}0 so'm</b>
                  <div class="chegirma">  
                  <del>${data.price + 1}</del>
                  <p>katta sovdo</p>
                  </div>
                     <div class="wrappers">
                     
                <div class="oy">
                    <strong>24 oy |</strong>
                    <strong>12 oy | </strong>
                    <strong>6 oy |</strong>
                    <strong>3 oy</strong>
                </div>
                <div class="tolov">
                    <p>${data.price-5}som</p>
                    <b>+24 oy</b>
                </div>
                </div>
                <br>
                  <div class="btn">
                   <button>savatga qoshish</button>
                  </div>
            </div>
            
           
  `;
}

window.onload = () => {
  const id = params.get("id");
  fetchData(`/products/${id}`, renderRecipeDetail, () => {});
};
