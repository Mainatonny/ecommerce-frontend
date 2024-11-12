import React, { useState, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        
        fetch(`http://localhost:5000/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error('Error fetching product:', error));
    }, [id]);

    const addToCart = () => {

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
        navigate('/cart');

    };

    if (!product) return <p>Loading...</p>;
    
    return (
        <div className="container mx-auto p-4">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg " />
            <h1  className="text-3xl font-bold mt-4" > {product-name}</h1> 
            <p className="text-gray-600 mt-2">${product.price}</p> 
            <p className="text-gray-700 mt-4">{product.description}</p> 
            <button onClick={addToCart} className="mt-4 bg-blue-500 text-white p-3 rounded">
                 Add to Cart
                </button>   
            </div>

    );
    };
    
export default ProductDetails;