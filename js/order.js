import { getOrders, getProducts } from "../js/model.js";

let Products = getProducts();
let currentCategory = "Burger";

let cardCol = '';
let row="";

// Burger List----------------
const burgerList = document.getElementById("burgerList");

Products.Burgers.forEach(e => {
cardCol+=`<div class="col">
          <div class="card mb-2 h-100" style="width: 12rem; height: 13rem;")">
                     <img src=${e.img} alt="..." class="image border-bottom">
                     <div class="card-body m-auto w-100">
                       <p class="card-text fw-semibold text-center">Item Code : ${e.itemCode}</p>
                       <p class="card-title fw-bold text-center">${e.name}</p>
                       <p class="fw-bold text-warning text-center">Rs : ${e.price}.00</p>
                       <p class="card-text fw-semibold text-center">Discount : ${e.discount}</p>
                     </div>
                   </div>
                    </div>
                 `;
});

row=`<div id="burgerList" class="card p-4">
                    <div class="row row-cols-sm-1 row-cols-md-3 g-3">
                    ${cardCol}
                     </div>
                  </div>`;

burgerList.innerHTML=row;

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

 let priceTotle =0;
 let priceDisplay = document.getElementById("priceTotle");

function cardOnClick(price){
  priceTotal += price;
  priceDisplay.textContent = `Total Price: Rs ${priceTotal}.00`;
}



