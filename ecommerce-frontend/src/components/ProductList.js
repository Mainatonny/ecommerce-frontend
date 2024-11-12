import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const  ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    
    }, []
    );

    return (
        <div className= "container mx-auto grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <div key={product._id} className="border rounded-lg p-4 shadow-md">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <h2 className= "text-xl font-semibold mt-2">{product.name}</h2>
                    <p className= "text-gray-700">${product.price}</p>
                    <Link to={`/product/${product._id}`} className="text-blue-500 mt-2 inline-block">
                     view Details
                    </Link>
                </div>    
            )
            )}
        </div>
    );
};

export default ProductList;