let wholeCards = document.getElementById('whole');
let selectForm = document.getElementById('selectForm');
let cartItems = [];
let rulaArray = [];

let notDublicate = [];


let coffee = [
    { type: 'coffee', name: 'Brazilian', path: '../shope_img/0m96ckn2y8.png', price: 5.00, id: 0, quentiny: 0 },
    { type: 'coffee', name: 'Alameed', path: '../shope_img/6AHKYZvcat.png', price: 14.00, id: 1, quentiny: 0 },
    { type: 'coffee', name: 'Alnasr', path: '../shope_img/7YCjPCd2Dx.png', price: 2.00, id: 2, quentiny: 0 },
    { type: 'coffee', name: 'Ibrahim', path: '../shope_img/Al5RmF7nm6.png', price: 8.00, id: 3, quentiny: 0 }

]

let cookies = [
    { type: 'cookies', name: 'Anas', path: '../shope_img/1ZHqPTFjMR.png', price: 34.00, id: 0, quentiny: 0 },
    { type: 'cookies', name: 'Dina', path: '../shope_img/A8V7iujqOo.png', price: 7.00, id: 1, quentiny: 0 },
    { type: 'cookies', name: 'Rula', path: '../shope_img/cpKBiO6v7l.png', price: 9.00, id: 2, quentiny: 0 },
    { type: 'cookies', name: 'Abdeed', path: '../shope_img/7QANYjF1qJ.png', price: 1.00, id: 3, quentiny: 0 },
]



function Shop(type, name, path, price, id) {
    this.type = type
    this.name = name;
    this.path = path;
    this.price = price;
    this.id = id;
    Shop.all.push(this);
}
Shop.all = [];

Shop.prototype.removeItem = function (item) {

    cartItems.splice(item, 1)
}


function getShopItems() {

    let getObjItems = localStorage.getItem('shop');

    if (getObjItems) {
        cartItems = JSON.parse(getObjItems);
    }
}

// getShopItems();


for (i = 0; i < coffee.length; i++) {
    let coffeeObj = new Shop(coffee[i].type, coffee[i].name, coffee[i].path, coffee[i].price, coffee[i].id);

}


// console.log(Shop.all);

for (i = 0; i < cookies.length; i++) {
    let drinksObj = new Shop(cookies[i].type, cookies[i].name, cookies[i].path, cookies[i].price, cookies[i].id);

}


// console.log(Shop.all[0].cartItems);

function setShopItems() {
    let objString = JSON.stringify(cartItems);
    localStorage.setItem('shop', objString);
}







function coffeeRender() {
    wholeCards.textContent = '';

    for (i = 0; i < coffee.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        wholeCards.appendChild(cardDiv);

        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        cardDiv.appendChild(productDiv);

        let productImg = document.createElement('img');
        productImg.src = `${coffee[i].path}`;
        productDiv.appendChild(productImg);

        let productButton = document.createElement('div');
        productButton.className = 'product-button';
        productDiv.appendChild(productButton);

        let button = document.createElement('button');
        button.id = `${coffee[i].id}`;
        button.textContent = 'Add to Cart';
        productButton.appendChild(button);

        let details = document.createElement('div');
        details.className = 'detalis';
        cardDiv.appendChild(details);

        let firstPElement = document.createElement('p');
        firstPElement.className = 'firstP';
        firstPElement.textContent = 'Coffee';
        details.appendChild(firstPElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = `${coffee[i].name}`;
        details.appendChild(h2Element);

        let secondPElement = document.createElement('p');
        secondPElement.textContent = `${coffee[i].price} JD`;
        details.appendChild(secondPElement);


        button.addEventListener('click', addToCart);


        function addToCart(event) {


            for (let j = 0; j < Shop.all.length; j++) {


                if (Number(button.id) === Shop.all[j].id && Shop.all[j].type === 'coffee') {
                    cartItems.push(coffee[button.id]);
                    setShopItems();
                    notDubFunc();
                    break;
                }
                
            }


        }
    }
}


function cookiesRender() {
    wholeCards.textContent = '';

    for (i = 0; i < cookies.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        wholeCards.appendChild(cardDiv);

        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        cardDiv.appendChild(productDiv);

        let productImg = document.createElement('img');
        productImg.src = `${cookies[i].path}`;
        productDiv.appendChild(productImg);

        let productButton = document.createElement('div');
        productButton.className = 'product-button';
        productDiv.appendChild(productButton);

        let button = document.createElement('button');
        button.id = `${cookies[i].id}`;
        button.textContent = 'Add to Cart';
        productButton.appendChild(button);

        let details = document.createElement('div');
        details.className = 'detalis';
        cardDiv.appendChild(details);

        let firstPElement = document.createElement('p');
        firstPElement.className = 'firstP';
        firstPElement.textContent = 'Drinks';
        details.appendChild(firstPElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = `${cookies[i].name}`;
        details.appendChild(h2Element);

        let secondPElement = document.createElement('p');
        secondPElement.textContent = `${cookies[i].price} JD`;
        details.appendChild(secondPElement);
        button.addEventListener('click', addToCart);

        function addToCart(event) {


            for (let j = 0; j < Shop.all.length; j++) {


                if (Number(button.id) === Shop.all[j].id && Shop.all[j].type === 'cookies') {
                    cartItems.push(cookies[button.id]);
                    setShopItems();
                    notDubFunc();
                   
                    break;
                }
                
            }


        }

    }

}

coffeeRender();

selectForm.addEventListener('click', selectOption);

function selectOption(event) {

    if (event.target.value === 'Coffee') {
        coffeeRender();
    }
    if (event.target.value === 'Cookies') {
        cookiesRender();
    }

}


getShopItems();


function storageShop2() {
    if(notDublicate.length !== 0){

    
    localStorage.setItem('Shop2', JSON.stringify(notDublicate));

    }
}

function notDubFunc(){
let count = 0;
for (let i = 0; i < cartItems.length; i++) {
    count = 0;
    for (let a = 0; a < cartItems.length; a++) {
        count = 0;

        if ((cartItems.length - 1) == a) {

            if (i == 0) {
                break;
            }
            else {
                for (let d = 0; d < notDublicate.length; d++) {

                    if (notDublicate[d].name == cartItems[i].name) {

                        count++;

                    }

                }
            }
            if (count == 0) {

                notDublicate.push(cartItems[i]);
            }


        }

        else if (i === a) {

            // console.log('iam equel');
            cartItems[i].quentiny++;

        }


        else if (Number(cartItems[i].id) === Number(cartItems[a].id) && cartItems[i].name === cartItems[a].name) {
            // console.log('iam else if');
            cartItems[i].quentiny++;


        }


       
    }
    storageShop2();
}

}


