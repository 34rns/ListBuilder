(function () {
//........................    HW BUILDER - 01 START   .....................


//__________________________________ all variable ______________________________

const pName = document.getElementById('product-name');
const pQuant = document.getElementById('product-quantity');
const pBrand = document.getElementById('product-brand');
const inpFrm = document.getElementById('input-form');
const outputSide = document.getElementById('output-box');
const rmvBtn = document.getElementById('remove');

//__________________________________ all EventListener ______________________________

function eventListenerLoader() {
    document.addEventListener('DOMContentLoaded', loadDataFunction);
    inpFrm.addEventListener('submit', submitData); 
    rmvBtn.addEventListener('click', removeFunction)
}

eventListenerLoader();


//__________________________________ all Function ______________________________

function submitData(e) {
    e.preventDefault();

if (pName.value === '' || pQuant.value === '' || pBrand.value === '') {
    alert('Put All Information');
    return;
}

const pData = {
  name : pName.value,
  quantity : pQuant.value,
  brand : pBrand.value
}
const formattedTxt = formatData(pData);
saveDataToStorage(pData);

  outputSide.innerHTML += formattedTxt;
  pName.value = '';
  pQuant.value = '';
  pBrand.value = '';
};

function formatData({name, quantity, brand}){
    return `
    <div class="card" id="card">
    <div class="contentBox">
    <h3 >${name}</h3>
    <h2 class="quantity">${quantity}</h2>
    <h2 class="brand">${brand}</h2>
    <button class="remove">REMOVE</button>
    </div>  
    </div>
    `;
};

function saveDataToStorage(pData) {
    let allItems;
    if (localStorage.getItem('itemData')) {
        allItems = JSON.parse(localStorage.getItem('itemData'))
    } else {
        allItems = [];
    }
    allItems.push(pData);
    localStorage.setItem('itemData', JSON.stringify(allItems));
}



function loadDataFunction() {
    let allItems;
    if (localStorage.getItem('itemData'))
     {
        allItems = JSON.parse(localStorage.getItem('itemData'))
    } else 
    {
        allItems = [];
    }
    let formattedTxt = '';
    allItems.forEach(allItems => {
        formattedTxt += formatData(allItems)
    });
    outputSide.innerHTML = formattedTxt;
}

function removeFunction() {
   localStorage.removeItem('itemData');
}

//........................    HW BUILDER - 01 END   .....................
    
})();
