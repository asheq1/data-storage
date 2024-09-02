const getStoredCart = () =>{
    const storedCartStr = localStorage.getItem('cart');
    if(storedCartStr){
        return JSON.parse(storedCartStr)
    }
    return []
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id)
    // save to local storage
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

export {addToLS, getStoredCart}
