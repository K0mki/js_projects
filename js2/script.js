function addToCart(element){
    let main = element.closest('.single-item');
    let price = main.querySelector('.price').innerText;
    let name = main.querySelector('h3').innerText;
    let quantity = main.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');
 
    if (parseInt(quantity) > 0) {
        cartItems.innerHTML += `Added ${name} to cart`; 
        element.innerText = 'X';
        element.setAttribute('disabled', 'disabled');
    } else {
        alert('Add your items to cart');
    }
}  