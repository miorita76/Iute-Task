let scrWidth = window.screen.availWidth;
let scrHeight = window.innerHeight;

document.getElementById("initial-form").style.width = scrWidth + 'px';
document.getElementById("initial-form").style.height = scrHeight + 'px';
console.log('scrWidth= ' + scrWidth);
console.log('scrHeight= ' + scrHeight);

function dataStore() {
    let amount = document.getElementById("amount").value;
    sessionStorage.setItem('amount', JSON.stringify(amount));
};
document.querySelector('#btn').onclick = dataStore;
