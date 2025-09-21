import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BodyLeft() {
  
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="border-1 border-blue-600 m-3 rounded-lg" style={{ width: '50%' }}>
      <div>
        <p className="bg-blue-600 text-2xl text-amber-50 p-2">List Products</p>
      </div>

      {products.map((product: any) => (
        <div
          key={product.id}
          className="p-2 flex cursor-pointer hover:bg-blue-50"
          onClick={() => addToCart(product)}
        >
          {/* img */}
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '150px', height: '150px' }}
          />

          {/* content */}
          <div className="ml-5">
            <h1>{product.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              incidunt voluptates provident aliquam architecto voluptas...
            </p>
          </div>

          {/* price + quantity */}
          <div className="flex flex-col justify-around ml-3">
            <p>Giá: ${product.price}</p>
            <p>Còn lại: {product.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BodyLeft;