function getStoredCarts(){
    const cartsStr = localStorage.getItem('carts');
    if(cartsStr){
        const carts = JSON.parse(cartsStr);
        return carts
    }
    return ([]);

}

function setStoredCarts(id){
    const carts = JSON.stringify(id);
    localStorage.setItem('carts', carts);
}

function addToLs (id){
    const previousCarts = getStoredCarts();
    previousCarts.push(id);
    setStoredCarts(previousCarts);

}

function removeFromLS(id){
    const previousCarts = getStoredCarts();
    previousCarts.splice(previousCarts.indexOf(id), 1);
    setStoredCarts(previousCarts);
}

export {addToLs, getStoredCarts, removeFromLS}