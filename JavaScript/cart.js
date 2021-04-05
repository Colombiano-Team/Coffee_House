let notDublicate2 = [];

function getShop2() {

    let shop2 = localStorage.getItem('Shop2');

    notDublicate2 = JSON.parse(shop2);
  

}

getShop2();
// notDublicate = notDublicate2;
console.log(notDublicate2);


let tableElement = document.getElementById('tableElement');

function tableRender() {

    for (let i = 0; i < notDublicate2.length; i++) {

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
        remove.className='remPara';
        divImgElement.appendChild(remove);
        remove.textContent = 'Remove';

        let td2Element = document.createElement('td');
        trElement.appendChild(td2Element);

        let inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.value = 1;
        td2Element.appendChild(inputElement);

        let td3Element = document.createElement('td');
        trElement.appendChild(td3Element);


        if (notDublicate) {
            imgTdElement.src = `${notDublicate2[i].path}`
            para.textContent = `${notDublicate2[i].name}`;
            small.textContent = `Price ${notDublicate2[i].price} JD`;


            td3Element.textContent = `${notDublicate2[i].price} JD`;
        }
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
                localStorage.setItem('Shop2',JSON.stringify(notDublicate2));
                localStorage.removeItem('shop');
                location.reload();
            }
        }
        console.log(name);
    }

}