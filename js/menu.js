import { getOrders, getProducts } from "../js/model.js";

let Products = getProducts();
let currentCategory = "Burger";

let cardCol = '';

// Burger List----------------
const burgerList = document.getElementById("burgerList");

Products.Burgers.forEach(e => {
cardCol+=`<div class="card mb-2" style="width: 9rem; height: 15rem;">
                     <img class="card-img-top border-bottom" src=${e.img} alt="Card image cap">
                     <div class="card-body m-auto">
                       <p class="card-text fw-bold">${e.itemCode}</p>
                       <p class="card-text fw-semibold">${e.name}</p>
                       <p class="fw-bold text-warning">${e.price}</p>
                       <p class="card-text fw-semibold">${e.discount}</p>
                     </div>
                   </div>
                 `;

});

burgerList.innerHTML=cardCol;

// submarinesList---------------------
const submarinesList = document.getElementById("submarinesList");
cardCol='';
Products.Submarines.forEach(e => {
  cardCol+=`<div class="card mb-2" style="width: 9rem; height: 15rem;">
                       <img class="card-img-top border-bottom" src=${e.img} alt="Card image cap">
                       <div class="card-body m-auto">
                         <p class="card-text fw-bold">${e.itemCode}</p>
                         <p class="card-text fw-semibold">${e.name}</p>
                         <p class="fw-bold text-warning">${e.price}</p>
                         <p class="card-text fw-semibold">${e.discount}</p>
                       </div>
                     </div>
                   `;
  
  });
  submarinesList.innerHTML=cardCol

// friesList---------------------
const friesList = document.getElementById("friesList");
cardCol='';
Products.Fries.forEach(e => {
  cardCol+=`<div class="card mb-2" style="width: 9rem; height: 15rem;">
                       <img class="card-img-top border-bottom" src=${e.img} alt="Card image cap">
                       <div class="card-body m-auto">
                         <p class="card-text fw-bold">${e.itemCode}</p>
                         <p class="card-text fw-semibold">${e.name}</p>
                         <p class="fw-bold text-warning">${e.price}</p>
                         <p class="card-text fw-semibold">${e.discount}</p>
                       </div>
                     </div>
                   `;
  
  });
  friesList.innerHTML=cardCol

// pastaList---------------------
const pastaList = document.getElementById("pastaList");
cardCol='';
Products.Pasta.forEach(e => {
  cardCol+=`<div class="card mb-2" style="width: 9rem; height: 15rem;">
                       <img class="card-img-top border-bottom" src=${e.img} alt="Card image cap">
                       <div class="card-body m-auto">
                         <p class="card-text fw-bold">${e.itemCode}</p>
                         <p class="card-text fw-semibold">${e.name}</p>
                         <p class="fw-bold text-warning">${e.price}</p>
                         <p class="card-text fw-semibold">${e.discount}</p>
                       </div>
                     </div>
                   `;
  
  });
  pastaList.innerHTML=cardCol

  // chickenList---------------------
const chickenList = document.getElementById("chickenList");
cardCol='';
Products.Chicken.forEach(e => {
  cardCol+=`<div class="card mb-2" style="width: 9rem; height: 15rem;">
                       <img class="card-img-top border-bottom" src=${e.img} alt="Card image cap">
                       <div class="card-body m-auto">
                         <p class="card-text fw-bold">${e.itemCode}</p>
                         <p class="card-text fw-semibold">${e.name}</p>
                         <p class="fw-bold text-warning">${e.price}</p>
                         <p class="card-text fw-semibold">${e.discount}</p>
                       </div>
                     </div>
                   `;
  
  });
  chickenList.innerHTML=cardCol

    // beveragesList---------------------
const beveragesList = document.getElementById("beveragesList");
cardCol='';
Products.Beverages.forEach(e => {
  cardCol+=`<div class="card mb-2" style="width: 9rem; height: 15rem;">
                       <img class="card-img-top border-bottom" src=${e.img} alt="Card image cap">
                       <div class="card-body m-auto">
                         <p class="card-text fw-bold">${e.itemCode}</p>
                         <p class="card-text fw-semibold">${e.name}</p>
                         <p class="fw-bold text-warning">${e.price}</p>
                         <p class="card-text fw-semibold">${e.discount}</p>
                       </div>
                     </div>
                   `;
  
  });
  beveragesList.innerHTML=cardCol





