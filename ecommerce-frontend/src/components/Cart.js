import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);

    const cartTotal = cartItems.reduce((acc, item) => acc = item.price, 0);
    setTotal(cartTotal);
}, []);

const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));

    const cartTotal = newCart.reduce((acc, item) => acc = item.price, 0);
    setTotal(cartTotal);
};

return (
    <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty. <Link to="/">Go back to shopping</Link></p>

        ) : (
            <div>
                {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border-b">
                        <div>
                            <h3 className= "font-semibold mt-4">{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                        <buttton onClick={() => removeItem(index)} className="text-red-500">Remove</buttton>
                        </div>
                ))}
                <h3 className="text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</h3>
                <link to="/checkout" className="mt-4 inline-block bg-green-500 text-white p-3 rounded">
                    Proceed to Checkout
                </link>
            </div>
        )}
    </div>
);
};

export default Cart;