import React, { useState } from 'react';

const Checkout = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();

        setOrderPlaced(true);

        localStorage.removeItem('cart');

    };

    if (orderPlaced) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h2 className="text-2xl font-bold">Thank you for your order!</h2>
                <p>Your order has been placed successfully.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                     className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Address</label>
                    <input 
                     type="text"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                     required
                     className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                     type="tel"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     required
                     className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white p-3 rounded w-full">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;