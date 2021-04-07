let notDublicate2 = [];
let updateButton = document.getElementById('changeBtn');
let totalCostTable = document.getElementById('totalCost');
let totalArray = [];
let allTotal = 0;

let alltotalArray = [];
let takeAllTotal = 0;

let contact = document.getElementById('contact');

function getShop2() {

    let shop2 = localStorage.getItem('Shop2');

    notDublicate2 = JSON.parse(shop2);


}

getShop2();
// notDublicate = notDublicate2;
console.log(notDublicate2);


let tableElement = document.getElementById('tableElement');

function tableRender() {
    let trSubtotoal = document.createElement('tr');
    totalCostTable.appendChild(trSubtotoal);
    let tdSubtotal = document.createElement('td');
    tdSubtotal.textContent = 'Subtotal';
    trSubtotoal.appendChild(tdSubtotal);
    let tdSubtotalPrice = document.createElement('td');
    tdSubtotalPrice.textContent = '0.00 JD';
    trSubtotoal.appendChild(tdSubtotalPrice);

    let trShipping = document.createElement('tr');
    totalCostTable.appendChild(trShipping);

    let tdShipping = document.createElement('td');
    tdShipping.textContent = 'Shipping';
    trShipping.appendChild(tdShipping);

    let tdShippingCost = document.createElement('td');
    tdShippingCost.textContent = 'Shipping costs is free.';
    trShipping.appendChild(tdShippingCost);

    let trTotal = document.createElement('tr');
    totalCostTable.appendChild(trTotal);

    let tdTotal = document.createElement('td');
    tdTotal.textContent = 'Total';
    trTotal.appendChild(tdTotal);

    let tdTotalPrice = document.createElement('td')
    tdTotalPrice.id = 'totalNumber';
    tdTotalPrice.textContent = '0.00 JD';
    trTotal.appendChild(tdTotalPrice);



    for (let i = 0; i < notDublicate2.length; i++) {
        alltotalArray = [];

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

        let remove = document.createElement('p');
        remove.className = 'remPara';
        divImgElement.appendChild(remove);
        remove.textContent = 'Remove';

        let td2Element = document.createElement('td');
        trElement.appendChild(td2Element);

        let inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.min = '1';
        inputElement.value = 1;
        td2Element.appendChild(inputElement);

        let td3Element = document.createElement('td');
        trElement.appendChild(td3Element);








        if (notDublicate) {
            imgTdElement.src = `${notDublicate2[i].path}`
            para.textContent = `${notDublicate2[i].name}`;
            small.textContent = `Price ${notDublicate2[i].price} JD`;
            td3Element.textContent = `${notDublicate2[i].price}.00 JD`;

            console.log(tdSubtotalPrice.textContent);
            totalArray.push(notDublicate2[i].price);
            allTotal+=  totalArray[i]
            tdSubtotalPrice.textContent= `${allTotal}.00 JD`;
            tdTotalPrice.textContent = `${allTotal}.00 JD`;

            let quant = Number(inputElement.value);
            // console.log(quant);
            let multi = quant * Number(small.textContent.slice(6, 8));
            alltotalArray.push(multi);
            td3Element.textContent = `Price ${multi}.00 JD`;
        }
        updateButton.addEventListener('click', update);
        function update() {
            takeAllTotal = 0;
             quant = Number(inputElement.value);
            // console.log(quant);
             multi = quant * Number(small.textContent.slice(6, 8));
            alltotalArray.push(multi);
            td3Element.textContent = `Price ${multi}.00 JD`;
            


        }


    }
    updateButton.addEventListener('click', updateTotal);
    function updateTotal(){
        // takeAllTotal = 0;
console.log(alltotalArray);
    for(let tArray = 0 ; tArray<alltotalArray.length;tArray++){
           
        takeAllTotal+=alltotalArray[tArray];
        tdTotalPrice.textContent = `${takeAllTotal}.00 JD`;

        }
        alltotalArray = [];
    }
    

}

tableRender();


tableElement.addEventListener('click', clickfun);
function clickfun(event) {

    let rem = event.target.innerText;
    if (rem == 'Remove') {
        // console.log(rem);
        let name = event.target.parentElement.firstChild.textContent;
        for (let i = 0; i < notDublicate2.length; i++) {
            console.log(notDublicate2[i].name);
            if (notDublicate2[i].name == name) {
                console.log('Iam event');
                notDublicate2.splice(i, 1);
                localStorage.removeItem('Shop2');
                localStorage.setItem('Shop2', JSON.stringify(notDublicate2));
                localStorage.removeItem('shop');
                location.reload();
            }
        }
        console.log(name);
    }

}




contact.addEventListener('submit',clearStorage);

function clearStorage(){
    localStorage.clear();
}