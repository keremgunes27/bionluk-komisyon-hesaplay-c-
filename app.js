const offerPriceText = document.querySelector('.offerPrice');

const input = document.querySelector('#input');

input.addEventListener('input', ()=>{
    const myPrice = input.value;
    const offerPrice = myPrice * 100 / 80;
    offerPriceText.innerHTML = offerPrice.toString();
});