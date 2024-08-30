import React from 'react'
import { Link } from 'react-router-dom'
// import Product from './Product'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-4 " style={{ width: "54%" }}>
        {
          cart.length == 0 ? (
            <>
              <div className='text-center my-5'>
                <h1 className='text-white'>Your Cart is Empty</h1>
                <Link to={"/"} className='btn btn-warning text-white my-4'>Continue Shopping...</Link>
              </div>
            </>
          ) :
            cart.map((product) => {
              return (
                <>
                  <div class="card mb-3 my-5" style={{ width: '700px' }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={product.imgSrc} class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body text-center">
                          <h5 class="card-title">{product.title}</h5>
                          <p class="card-text">{product.description}</p>
                          <h4 className="  mx-3">₹{product.price}</h4>
                          <button
                            className="btn btn-dark">Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}



      </div>


      {
        cart.length != 0 && (
          <div className="container text-center my-5" 
          style={{
            display: "flex",
            justifyContent: "center", 
            alignItems: "center" 
            }}>
            <button className='btn btn-warning mx-5'>CheckOut</button>
            <button onClick={() => setCart("")} className='btn btn-danger'>Clear Cart</button>
          </div>
        )
      }


    </>
  )
}

export default Cart
