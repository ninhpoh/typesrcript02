import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BodyRight() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  return (
    <div className="border-1 border-red-200 m-3 rounded-lg" style={{ width: '50%', height: '50%' }}>
      <div>
        <p className="bg-red-200 text-2xl text-amber-50 p-2">Your Cart</p>
      </div>

      {cart.length === 0 ? (
        <p className="ml-10 mt-4 text-red-500">Empty product in your cart</p>
      ) : (
        <>
          <table className="table-auto ml-10">
            <thead>
              <tr className="md:border-b-1">
                <th>Stt</th>
                <th style={{ width: '400px' }} className="text-start pl-5">Name</th>
                <th style={{ width: '150px' }} className="text-start">Price</th>
                <th style={{ width: '100px' }} className="text-start">Quantity</th>
                <th style={{ width: '200px' }} className="text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: any, index: number) => (
                <tr key={item.id} className="md:border-b-1">
                  <td className="text-center">{index + 1}</td>
                  <td className="pl-5">{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <div>
                      <button
                        className="p-1 m-2 bg-red-400"
                        onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
                      >
                        delete
                      </button>
                      <button
                        className="p-1 m-2 bg-sky-400"
                        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
                      >
                        add
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="ml-10 flex mt-4 mb-4 justify-between" style={{ width: '600px' }}>
            <p>There are {cart.length} items in your cart:</p>
            <p className="text-red-500">${total}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BodyRight;