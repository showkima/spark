let cart = [];

function addToCart(productName, price, quantityInputId) {
    const quantity = parseInt(document.getElementById(quantityInputId).value);
    
    if (quantity > 0) {
        const item = {
            name: productName,
            price: price,
            quantity: quantity
        };

        // Check if the product is already in the cart
        const existingItemIndex = cart.findIndex(item => item.name === productName);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push(item);
        }

        updateCartUI();
    }
}

function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('cart-total');

    // Clear existing cart items
    cartList.innerHTML = '';

    // Populate the cart with updated items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity}`;
        cartList.appendChild(li);
    });

    // Calculate and display total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceElement.textContent = totalPrice;
}

function checkout() {
    // Implement the checkout functionality, e.g., redirect to payment gateway
    // This could involve integrating with a backend service to process payments
    alert('Redirecting to payment gateway. Total amount: ¥' + cart.reduce((total, item) => total + (item.price * item.quantity), 0));
    // Reset the cart after checkout
    cart = [];
    updateCartUI();
}
