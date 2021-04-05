let applydiscount;
let totatAfter;
let totaldiscount = document.getElementById('coupon1');
totaldiscount.addEventListener('submit', discountclick);



function discountclick(event) {
    event.preventDefault();


    //////////////////////////////////////////////////
    let n = document.getElementById('coupon_code');
    let entercoupon = n.value * 1;
    console.log(entercoupon);

    let price = document.getElementById('totalNumber');
    let praiceArry = price.textContent.split(' ');
    let totalpraiceArry = praiceArry[0] * 1;
    console.log(totalpraiceArry);
    /////////////////////////////////////////////


    // console.log(finaltotalprice);
    let storecoupon = localStorage.getItem('discount') * 1;
    console.log(storecoupon);
    if (entercoupon === storecoupon) {

        if (applydiscount < 50000) {
            totatAfter = totalpraiceArry - (totalpraiceArry * 0.2);
            // swal(`you have total  ${Math.ceil(totalpraiceArry * 0.2)} discount!`, `The Total price will be ${Math.ceil(totatAfter)} `, "");
            // console.log(totatAfter);
            newprice.textContent=`Total Discount ${Math.ceil(totalpraiceArry * .2)} JD price will be  ${Math.ceil(totatAfter)} JD `;
        }
        else {
            totatAfter = totalpraiceArry - (totalpraiceArry * 0.4);
            // swal(`you have total  ${Math.ceil(totalpraiceArry * .4)} discount!`, `The Total price will be ${Math.ceil(totatAfter)} `, "");
            let newprice=document.getElementById('totalNumber');
            newprice.textContent=`Total Discount ${Math.ceil(totalpraiceArry * .4)} JD price will be  ${Math.ceil(totatAfter)}  JD `;
        }
        localStorage.removeItem('discount');
        localStorage.setItem('discount','entercouponnumber');

    }
    ///////////////////////////////////////////////
    else {
        swal(`please Enter valid Coupon Number`, ``, "");
    }


}
// discountclick()
