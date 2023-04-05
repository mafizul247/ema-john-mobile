import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadProducts = await fetch('products.json');
    const products = await loadProducts.json();
    // console.log(products);

    const storedCart = getShoppingCart();
    // console.log(storedCart);
    const saveCart = [];
    for (const id in storedCart) {
        const addProduct = products.find(product => product.id === id);
            if(addProduct) {
                const quantity = storedCart[id];
                addProduct.quantity = quantity;
                saveCart.push(addProduct);
            }
    }
    //id need to send to things
    // return {products, saveCart}
    // return [product, saveCart]
    return saveCart;
}

export default cartProductsLoader;