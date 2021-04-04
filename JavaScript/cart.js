
getShopItems();


console.log(cartItems);

let tableElement = document.getElementById('tableElement');

function tableRender(){

for(let i=0; i<cartItems.length;i++){

let trElement = document.createElement('tr');
tableElement.appendChild(trElement);

let td1Element = document.createElement('td');
trElement.appendChild(td1Element);

let divCartElement = document.createElement('div');
divCartElement.className = 'cart-info';
td1Element.appendChild(divCartElement);

let imgTdElement = document.createElement('img');
divCartElement.appendChild(imgTdElement);

let divImgElement = document.createElement('div');
divImgElement.className = 'img-info';
divCartElement.appendChild(divImgElement);

let para = document.createElement('p');
divImgElement.appendChild(para);

let small = document.createElement('small');
divImgElement.appendChild(small);

let br = document.createElement('br');
divImgElement.appendChild(br);

let anchor = document.createElement('a');
divImgElement.appendChild(anchor);
anchor.textContent = 'Remove';
anchor.href = '';

let td2Element = document.createElement('td');
trElement.appendChild(td2Element);

let inputElement = document.createElement('input');
inputElement.type = 'number';
td2Element.appendChild(inputElement);

let td3Element = document.createElement('td');
trElement.appendChild(td3Element);


imgTdElement.src
para
small

td2Element
td3Element

}
}

tableRender();

console.log();