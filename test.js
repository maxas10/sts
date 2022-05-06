/*pear*/

const stockPrice = document.getElementById("stockPrice")
stockPrice.innerHTML = 0;

function changePrice() {
    stockPrice.innerHTML = Math.floor(Math.random() * 230) + 20;
    setTimeout(changePrice, 1000);
}

changePrice()

const inv = document.getElementById("inv")
inv.innerHTML = 0;

function buy() {
    if(Number(bank.innerHTML) >= Number(stockPrice.innerHTML)) {
        bank.innerHTML = Number(bank.innerHTML) - Number(stockPrice.innerHTML);
        inv.innerHTML = Number(inv.innerHTML) + 1
    }
}

/*orange*/

const stockPrice2 = document.getElementById("stockPrice2")
stockPrice2.innerHTML = 0;

function changePrice2() {
    stockPrice2.innerHTML = Math.floor(Math.random() * 230) + 20;
    setTimeout(changePrice2, 1000);
}

changePrice2()

const inv2 = document.getElementById("inv2")
inv2.innerHTML = 0;

function buy2() {
    if(Number(bank.innerHTML) >= Number(stockPrice2.innerHTML)) {
        bank.innerHTML = Number(bank.innerHTML) - Number(stockPrice2.innerHTML);
        inv2.innerHTML = Number(inv2.innerHTML) + 1
    }
}

const bank = document.getElementById("bank")
bank.innerHTML = 500;
