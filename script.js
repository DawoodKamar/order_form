
let result = document.querySelector('#result'); //variable defined as query selector targeting the results p tag
let shopCart = document.querySelector('#shop-cart'); //variable defined as query selector targeting the shopping cart button
let order = document.querySelector('#order'); //variable defined as query selector targeting the order button
let items = document.querySelector('#chosen'); //variable defined as query selector targeting the p tag with "chosen" id
let subTotal = document.querySelector('#total'); //variable defined as query selector targeting the p tag with "total" id
let round1 = Array.from(document.querySelectorAll('.round1')); //variable defined as query selector targeting the items to be triggered when the shopping cart button is pressed
let all = Array.from(document.querySelectorAll('.comp')); //variable defined as query selector targeting all the computer building choices

//defining variables to hold the users computer building choices
let comp1=""; 
let storage1 = "";
let warranty1= "";
//variables defined as query selectors targeting the inputrs for the computer being built
let war = document.querySelector("#warranty");
let stg1 = document.querySelector("#gb");
let base = document.querySelector("#basic");
let basePro = document.querySelector("#pro");
let stg2 = document.querySelector("#tb");
//defining and initialising variables to hold the price
let price = 0;
let finalPrice=0;

//function that resets values and the inputs when the user want to choose a different computer
function reset(){
    storage1 = "";
    warranty1= "";
    war.checked = false;
    stg1.checked = false;
    stg2.checked = false;
};

//function that activates the inputs of storage when the user has selected the base computer
function active(){
    stg1.setAttribute('type', 'radio');
    stg2.setAttribute('type', 'radio');
    war.removeAttribute('type');
    war.parentElement.setAttribute('id', 'inactive');
    stg1.parentElement.removeAttribute('id', '#inactive');
}

//function that activates the input of warranty when the user has selected the base computer and storage
function activeWarr(){
    war.setAttribute('type', 'checkbox');
    war.parentElement.removeAttribute('id', '#inactive');
}


//an event listener that uses switch/case to listen to user inputs and define what happens at each case
document.body.addEventListener('change', function (x) {
    let target = x.target;

    
    switch (target.id) {
        //if user selects the basic computer
        case 'basic':
            comp1 = 'DK Laptop'; 
            reset();
            active();
            price = 999;
            stg1.checked = true;
            storage1 = ', 512GB SSD storage'
            activeWarr();

            break;
        //if user selects the pro computer
        case 'pro':
            comp1 = 'DK Laptop PRO';
            reset();
            active();
            price = 1399;
            stg1.checked = true;
            storage1 = ', 512GB SSD storage'
            activeWarr();
            break;
        //if user selects the base storage
        case 'gb':
            storage1 = ', 512GB SSD storage'
            break;
        //if user selects the 1 tb storage
        case 'tb':
            storage1 = ', 1TB SSD storage'    
            price+=199;
            break;
    }
    //if statemen for the warranty checkbox
    if(war.checked){
        warranty1 = ', with 5 year extended warranty';
        finalPrice=price +159;
    }else{
        warranty1 = '';
        finalPrice=price;
    }
    //show the results 
    shopCart.removeAttribute('hidden');
    items.removeAttribute('hidden');
    let dollar = Intl.NumberFormat('en-US');
    result.textContent = comp1   + " " + storage1 + " " + warranty1;
    subTotal.textContent = "Subtotal: " + '$'+ dollar.format(finalPrice);
});

//function defining what happens when the user selects the add to shopping cart button
function shoppingCart(){

    round1.forEach(x=>x.hidden= false);
    shopCart.hidden= true;
    order.hidden=false;
    subTotal.hidden = false;
    all.forEach(y=>y.removeAttribute('type'));
    all.forEach(y=>y.parentElement.parentElement.setAttribute('id', 'inactive'));
    war.removeAttribute('type');

}
//function defining what happens when the user clicks the order now button
function orderNow(){
    alert("Thank you for your order!")
    window.location.reload();
}
//function that resets the page when the user cancels the order
function cancel(){
    window.location.reload();
}

