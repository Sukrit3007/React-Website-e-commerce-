import React from 'react'

export const Card = (props) => {
const {id, productName, price,productImage} = props.data
  return (
    <>
        <div className="card">
            <img src={productImage} alt="" className='card-image' />
            <div className="description">
              <h3>{productName}</h3>
              <p>₹ {price}.00</p>
            </div>
        </div>
    </>
  );
}
