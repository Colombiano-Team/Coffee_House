let wholeCards = document.getElementById('whole');
let selectForm = document.getElementById('selectForm');
let cartItems = [];
let rulaArray = [];
let notDublicate = [];
let divLeft = document.getElementById('title_p');

let all = [
    { type: 'all', name: 'Arabica Classic Coffee', path: '../coffee images/1.jpeg', price: 25.00, id: 0, quentiny: 0 },
    { type: 'all', name: 'Atlas Coffee', path: '../coffee images/61a7UMYfRFL._SL1500_.jpg', price: 14.00, id: 1, quentiny: 0 },
    { type: 'all', name: 'Gusto Forte Coffee', path: '../coffee images/66.jpg', price: 4.00, id: 2, quentiny: 0 },
    { type: 'all', name: 'Kimbo Coffee', path: '../coffee images/71jjE02pwyL._SX522_.jpg', price: 6.00, id: 3, quentiny: 0 },
    { type: 'all', name: 'Lavazza Red', path: '../coffee images/71L97zX9SuL._SL1500_.jpg', price: 15.00, id: 4, quentiny: 0 },
    { type: 'all', name: 'Troma Coffee', path: '../coffee images/44.jpg', price: 10.00, id: 5, quentiny: 0 },
    { type: 'all', name: 'Delizioso Forte Coffee', path: '../coffee images/55.jpg', price: 20.00, id: 6, quentiny: 0 },
    { type: 'all', name: 'Red Kimbo coffee', path: '../coffee images/The_Bean_Unroasted_Costa_Rican_2000x.webp', price: 40.00, id: 7, quentiny: 0 },
    { type: 'all', name: 'The French Espresso', path: '../coffee images/Woddae-coffee-bag-mockupcopy_1000x1000.webp', price: 40.00, id: 8, quentiny: 0 },
    { type: 'all', name: 'Traditional Coffee', path: '../coffee images/Traditional Coffee.jpg', price: 4.00, id: 9, quentiny: 0 },
    { type: 'all', name: 'Caramel Macchiato', path: '../coffee images/Caramel MacchiatoA.jpg', price: 5.00, id: 10, quentiny: 0 },
    { type: 'all', name: 'Milk Mocha', path: '../coffee images/Milk Mocha.jpg', price: 7.00, id: 11, quentiny: 0 },
    { type: 'all', name: 'Carmel latte', path: '../coffee images/Carmel latte.jpg', price: 5.00, id: 12, quentiny: 0 },
    { type: 'all', name: 'Chocolate Ice Blended', path: '../coffee images/Chocolate Ice Blended.jpg', price: 8.00, id: 13, quentiny: 0 },
    { type: 'all', name: 'Strawberry Chocolate Cream', path: '../coffee images/Strawberry Chocolate Cream.jpg', price: 6.00, id: 14, quentiny: 0 },    { type: 'cookies', name: 'Chocolate Cookie', path: '../shope_img/62298.jpg', price: 5.00, id: 0, quentiny: 0 },
    { type: 'all', name: 'Brown Butter', path: '../shope_img/Brown-Butter-Chocolate-Chip-Cookies-SQUARE.jpg', price: 7.00, id: 1, quentiny: 0 },
    { type: 'all', name: 'Cake Mix Cookies', path: '../shope_img/chewy-spice-cookies.jpg', price: 3.00, id: 2, quentiny: 0 },
    { type: 'all', name: 'Chewy Spice Cookies', path: '../shope_img/Cake-Mix-Cookies-2.jpg', price: 1.00, id: 3, quentiny: 0 },
    { type: 'all', name: 'Choc Chunk', path: '../shope_img/chocchunkstack1.jpg', price: 6.00, id: 4, quentiny: 0 },
    { type: 'all', name: 'chocolate Chip', path: '../shope_img/chocolatechipcookies.jpg', price: 4.00, id: 5, quentiny: 0 },
    { type: 'all', name: 'Flourless Chocolate', path: '../shope_img/chocolatechipcookies.jpg', price: 3.00, id: 6, quentiny: 0 },
    { type: 'all', name: 'Mayas Chocolate', path: '../shope_img/Mayas-Cookies-2048x2048-choc-chip_1000x1000.jpg', price: 2.00, id: 7, quentiny: 0 },
    { type: 'all', name: 'Batch Chocolate', path: '../shope_img/small-batch-chocolate-chip-cookies-1-720x540.jpg', price: 3.00, id: 8, quentiny: 0 },    { type: 'cakes', name: 'Assorted Mini Cheesecakes', path: '../ck/Assorted Mini Cheesecakes - 12 Pieces.png', price: 4.00, id: 0, quentiny: 0 },
    { type: 'all', name: 'Blueberry Cheesecake', path: '../ck/blueberry cheesecake.jpg', price: 7.00, id: 1, quentiny: 0 },
    { type: 'all', name: 'Chocolate Caramel Pecan', path: '../ck/chocolate caramel pecan cheesecake - 10.jpg', price: 9.00, id: 2, quentiny: 0 },
    { type: 'all', name: 'Coconut Cloud  Layer Cake', path: '../ck/coconut cloud  layer cake.jpg', price: 15.00, id: 3, quentiny: 0 },
    { type: 'all', name: 'Cookies & Cream Cheesecake', path: '../ck/cookies & cream cheesecake.jpg', price: 34.00, id: 4, quentiny: 0 },
    { type: 'all', name: 'Fruit Cheesecake Sampler', path: '../ck/fruit cheesecake sampler.jpg', price: 7.00, id: 5, quentiny: 0 },
    { type: 'all', name: 'Mile High Peanut Butter Explosion', path: '../ck/mile high peanut butter explosion 10.jpg', price: 9.00, id: 6, quentiny: 0 },
    { type: 'all', name: 'Mountain Berry Tart ', path: '../ck/mountain berry tart - 9.5.jpg', price: 12.00, id: 7, quentiny: 0 },
    { type: 'all', name: 'Original New York Style Cheesecake', path: '../ck/original new york style cheesecake - 10.jpg', price: 25.00, id: 8, quentiny: 0 },
    { type: 'all', name: 'Premier Pumpkin Spice Cake', path: '../ck/premier pumpkin spice cake.jpg', price: 7.00, id: 9, quentiny: 0 },
    { type: 'all', name: 'Pumpkin Cheesecake', path: '../ck/pumpkin cheesecake.jpg', price: 9.00, id: 10, quentiny: 0 },
    { type: 'all', name: 'Strawberry Cheesecake', path: '../ck/strawberry cheesecake.jpg', price: 10.00, id: 11, quentiny: 0 },
    { type: 'all', name: 'Triple Chocolate Cheesecake', path: '../ck/triple chocolate cheesecake.jpg', price: 7.00, id: 12, quentiny: 0}
]

let coffee = [
    { type: 'coffee', name: 'Arabica Classic Coffee', path: '../coffee images/1.jpeg', price: 25.00, id: 0, quentiny: 0 },
    { type: 'coffee', name: 'Atlas Coffee', path: '../coffee images/61a7UMYfRFL._SL1500_.jpg', price: 14.00, id: 1, quentiny: 0 },
    { type: 'coffee', name: 'Gusto Forte Coffee', path: '../coffee images/66.jpg', price: 4.00, id: 2, quentiny: 0 },
    { type: 'coffee', name: 'Kimbo Coffee', path: '../coffee images/71jjE02pwyL._SX522_.jpg', price: 6.00, id: 3, quentiny: 0 },
    { type: 'coffee', name: 'Lavazza Red', path: '../coffee images/71L97zX9SuL._SL1500_.jpg', price: 15.00, id: 4, quentiny: 0 },
    { type: 'coffee', name: 'Troma Coffee', path: '../coffee images/44.jpg', price: 10.00, id: 5, quentiny: 0 },
    { type: 'coffee', name: 'Delizioso Forte Coffee', path: '../coffee images/55.jpg', price: 20.00, id: 6, quentiny: 0 },
    { type: 'coffee', name: 'Red Kimbo coffee', path: '../coffee images/The_Bean_Unroasted_Costa_Rican_2000x.webp', price: 40.00, id: 7, quentiny: 0 },
    { type: 'coffee', name: 'The French Espresso', path: '../coffee images/Woddae-coffee-bag-mockupcopy_1000x1000.webp', price: 40.00, id: 8, quentiny: 0 },
    { type: 'coffee', name: 'Traditional Coffee', path: '../coffee images/Traditional Coffee.jpg', price: 4.00, id: 9, quentiny: 0 },
    { type: 'coffee', name: 'Caramel Macchiato', path: '../coffee images/Caramel MacchiatoA.jpg', price: 5.00, id: 10, quentiny: 0 },
    { type: 'coffee', name: 'Milk Mocha', path: '../coffee images/Milk Mocha.jpg', price: 7.00, id: 11, quentiny: 0 },
    { type: 'coffee', name: 'Carmel latte', path: '../coffee images/Carmel latte.jpg', price: 5.00, id: 12, quentiny: 0 },
    { type: 'coffee', name: 'Chocolate Ice Blended', path: '../coffee images/Chocolate Ice Blended.jpg', price: 8.00, id: 13, quentiny: 0 },
    { type: 'coffee', name: 'Strawberry Chocolate Cream', path: '../coffee images/Strawberry Chocolate Cream.jpg', price: 6.00, id: 14, quentiny: 0 },
]


let cookies = [
    { type: 'cookies', name: 'Chocolate Cookie', path: '../shope_img/62298.jpg', price: 5.00, id: 0, quentiny: 0 },
    { type: 'cookies', name: 'Brown Butter', path: '../shope_img/Brown-Butter-Chocolate-Chip-Cookies-SQUARE.jpg', price: 7.00, id: 1, quentiny: 0 },
    { type: 'cookies', name: 'Cake Mix Cookies', path: '../shope_img/chewy-spice-cookies.jpg', price: 3.00, id: 2, quentiny: 0 },
    { type: 'cookies', name: 'Chewy Spice Cookies', path: '../shope_img/Cake-Mix-Cookies-2.jpg', price: 1.00, id: 3, quentiny: 0 },
    { type: 'cookies', name: 'Choc Chunk', path: '../shope_img/chocchunkstack1.jpg', price: 6.00, id: 4, quentiny: 0 },
    { type: 'cookies', name: 'chocolate Chip', path: '../shope_img/chocolatechipcookies.jpg', price: 4.00, id: 5, quentiny: 0 },
    { type: 'cookies', name: 'Flourless Chocolate', path: '../shope_img/chocolatechipcookies.jpg', price: 3.00, id: 6, quentiny: 0 },
    { type: 'cookies', name: 'Mayas Chocolate', path: '../shope_img/Mayas-Cookies-2048x2048-choc-chip_1000x1000.jpg', price: 2.00, id: 7, quentiny: 0 },
    { type: 'cookies', name: 'Batch Chocolate', path: '../shope_img/small-batch-chocolate-chip-cookies-1-720x540.jpg', price: 3.00, id: 8, quentiny: 0 }
]

let cakes = [
    { type: 'cakes', name: 'Assorted Mini Cheesecakes', path: '../ck/Assorted Mini Cheesecakes - 12 Pieces.png', price: 4.00, id: 0, quentiny: 0 },
    { type: 'cakes', name: 'Blueberry Cheesecake', path: '../ck/blueberry cheesecake.jpg', price: 7.00, id: 1, quentiny: 0 },
    { type: 'cakes', name: 'Chocolate Caramel Pecan', path: '../ck/chocolate caramel pecan cheesecake - 10.jpg', price: 9.00, id: 2, quentiny: 0 },
    { type: 'cakes', name: 'Coconut Cloud  Layer Cake', path: '../ck/coconut cloud  layer cake.jpg', price: 15.00, id: 3, quentiny: 0 },
    { type: 'cakes', name: 'Cookies & Cream Cheesecake', path: '../ck/cookies & cream cheesecake.jpg', price: 34.00, id: 4, quentiny: 0 },
    { type: 'cakes', name: 'Fruit Cheesecake Sampler', path: '../ck/fruit cheesecake sampler.jpg', price: 7.00, id: 5, quentiny: 0 },
    { type: 'cakes', name: 'Mile High Peanut Butter Explosion', path: '../ck/mile high peanut butter explosion 10.jpg', price: 9.00, id: 6, quentiny: 0 },
    { type: 'cakes', name: 'Mountain Berry Tart ', path: '../ck/mountain berry tart - 9.5.jpg', price: 12.00, id: 7, quentiny: 0 },
    { type: 'cakes', name: 'Original New York Style Cheesecake', path: '../ck/original new york style cheesecake - 10.jpg', price: 25.00, id: 8, quentiny: 0 },
    { type: 'cakes', name: 'Premier Pumpkin Spice Cake', path: '../ck/premier pumpkin spice cake.jpg', price: 7.00, id: 9, quentiny: 0 },
    { type: 'cakes', name: 'Pumpkin Cheesecake', path: '../ck/pumpkin cheesecake.jpg', price: 9.00, id: 10, quentiny: 0 },
    { type: 'cakes', name: 'Strawberry Cheesecake', path: '../ck/strawberry cheesecake.jpg', price: 10.00, id: 11, quentiny: 0 },
    { type: 'cakes', name: 'Triple Chocolate Cheesecake', path: '../ck/triple chocolate cheesecake.jpg', price: 7.00, id: 12, quentiny: 0 }
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

for (i = 0; i < all.length; i++) {
    let allObj = new Shop(all[i].type, all[i].name, all[i].path, all[i].price, all[i].id);

}

for (i = 0; i < coffee.length; i++) {
    let coffeeObj = new Shop(coffee[i].type, coffee[i].name, coffee[i].path, coffee[i].price, coffee[i].id);

}


// console.log(Shop.all);

for (i = 0; i < cookies.length; i++) {
    let cookiesObj = new Shop(cookies[i].type, cookies[i].name, cookies[i].path, cookies[i].price, cookies[i].id);

}

for (i = 0; i < cakes.length; i++) {
    let cakesObj = new Shop(cakes[i].type, cakes[i].name, cakes[i].path, cakes[i].price, cakes[i].id);

}

// console.log(Shop.all[0].cartItems);

function setShopItems() {
    let objString = JSON.stringify(cartItems);
    localStorage.setItem('shop', objString);
}


function allRender() {
    wholeCards.textContent = '';

    divLeft.textContent = '';
    let h1Left = document.createElement('h1');
    h1Left.textContent = 'All Products';
    divLeft.appendChild(h1Left);
    h1Left.className = 'title'
    let pLeft = document.createElement('p');
    pLeft.textContent = 'We have carefully selected great testing products from';
    pLeft.className = 'titlePara';
    divLeft.appendChild(pLeft);

    let pLeft2 = document.createElement('p');
    pLeft2.textContent = 'around the world ...';
    pLeft2.className = 'titlePara';
    divLeft.appendChild(pLeft2);

    for (i = 0; i < all.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        wholeCards.appendChild(cardDiv);

        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        cardDiv.appendChild(productDiv);

        let productImg = document.createElement('img');
        productImg.src = `${all[i].path}`;
        productDiv.appendChild(productImg);

        let productButton = document.createElement('div');
        productButton.className = 'product-button';
        productDiv.appendChild(productButton);

        let button = document.createElement('button');
        button.id = `${all[i].id}`;
        button.textContent = 'Add to Cart';
        productButton.appendChild(button);

        let details = document.createElement('div');
        details.className = 'detalis';
        cardDiv.appendChild(details);

        let firstPElement = document.createElement('p');
        firstPElement.className = 'firstP';
        firstPElement.textContent = 'all';
        details.appendChild(firstPElement);

        let h2Element = document.createElement('h2');
        h2Element.textContent = `${all[i].name}`;
        details.appendChild(h2Element);

        let secondPElement = document.createElement('p');
        secondPElement.textContent = `${all[i].price} JD`;
        details.appendChild(secondPElement);
        console.log(button.onclick);



        button.addEventListener('click', addToCart);


        function addToCart(event) {



            for (let j = 0; j < Shop.all.length; j++) {


                if (Number(button.id) === Shop.all[j].id && Shop.all[j].type === 'all') {
                    cartItems.push(all[button.id]);
                    setShopItems();
                    notDubFunc();
                    button.textContent = 'Check your cart';
                    break;
                }

            }


        }
    }
}

allRender();


function coffeeRender() {
    wholeCards.textContent = '';

    divLeft.textContent = '';
    let h1Left = document.createElement('h1');
    h1Left.textContent = 'Our Coffee';
    divLeft.appendChild(h1Left);
    h1Left.className = 'title'
    let pLeft = document.createElement('p');
    pLeft.textContent = 'We have carefully selected great testing coffee from';
    pLeft.className = 'titlePara';
    divLeft.appendChild(pLeft);

    let pLeft2 = document.createElement('p');
    pLeft2.textContent = 'around the world ...';
    pLeft2.className = 'titlePara';
    divLeft.appendChild(pLeft2);

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
        console.log(button.onclick);



        button.addEventListener('click', addToCart);


        function addToCart(event) {



            for (let j = 0; j < Shop.all.length; j++) {


                if (Number(button.id) === Shop.all[j].id && Shop.all[j].type === 'coffee') {
                    cartItems.push(coffee[button.id]);
                    setShopItems();
                    notDubFunc();
                    button.textContent = 'Check your cart';
                    break;
                }

            }


        }
    }
}


function cookiesRender() {
    wholeCards.textContent = '';

    divLeft.textContent = '';
    let h1Left = document.createElement('h1');
    h1Left.textContent = 'Our Cookies';
    divLeft.appendChild(h1Left);
    h1Left.className = 'title'
    let pLeft = document.createElement('p');
    pLeft.textContent = 'Cookies make the world better place So';
    pLeft.className = 'titlePara';
    divLeft.appendChild(pLeft);

    let pLeft2 = document.createElement('p');
    pLeft2.textContent = 'stay sweet ...';
    pLeft2.className = 'titlePara';
    divLeft.appendChild(pLeft2);

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
        firstPElement.textContent = 'Cookies';
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
                    button.textContent = 'Check your cart';
                    break;
                }

            }


        }

    }

}

function CakesRender() {
    wholeCards.textContent = '';

    divLeft.textContent = '';
    let h1Left = document.createElement('h1');
    h1Left.textContent = 'Our Cakes';
    divLeft.appendChild(h1Left);
    h1Left.className = 'title'
    let pLeft = document.createElement('p');
    pLeft.textContent = 'Life is too short to say no to cake , Enjoy';
    pLeft.className = 'titlePara';
    divLeft.appendChild(pLeft);

    let pLeft2 = document.createElement('p');
    pLeft2.textContent = 'life Eat it ...';
    pLeft2.className = 'titlePara';
    divLeft.appendChild(pLeft2);

    for (i = 0; i < cakes.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        wholeCards.appendChild(cardDiv);

        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        cardDiv.appendChild(productDiv);

        let productImg = document.createElement('img');
        productImg.src = `${cakes[i].path}`;
        productDiv.appendChild(productImg);

        let productButton = document.createElement('div');
        productButton.className = 'product-button';
        productDiv.appendChild(productButton);

        let button = document.createElement('button');
        button.id = `${cakes[i].id}`;
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
        h2Element.textContent = `${cakes[i].name}`;
        details.appendChild(h2Element);

        let secondPElement = document.createElement('p');
        secondPElement.textContent = `${cakes[i].price} JD`;
        details.appendChild(secondPElement);
        console.log(button.onclick);



        button.addEventListener('click', addToCart);


        function addToCart(event) {



            for (let j = 0; j < Shop.all.length; j++) {


                if (Number(button.id) === Shop.all[j].id && Shop.all[j].type === 'cakes') {
                    cartItems.push(cakes[button.id]);
                    setShopItems();
                    notDubFunc();
                    button.textContent = 'Check your cart';
                    break;
                }

            }


        }
    }
}


coffeeRender();

selectForm.addEventListener('click', selectOption);

function selectOption(event) {

    if (event.target.value === 'all') {
        allRender();
    }
    if (event.target.value === 'Coffee') {
        coffeeRender();
    }
    if (event.target.value === 'Cookies') {
        cookiesRender();
    }
    if (event.target.value === 'Cakes') {
        CakesRender();
    }


}


getShopItems();


function storageShop2() {
    if (notDublicate.length !== 0) {


        localStorage.setItem('Shop2', JSON.stringify(notDublicate));

    }
}

function notDubFunc() {
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
