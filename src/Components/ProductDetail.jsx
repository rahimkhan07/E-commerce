import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const ProductDetail = (cart, setCart) => {
  const { id } = useParams()

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([])

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log(filterProduct);
    setProduct(filterProduct[0]);

    const relatedProduct = items.filter((product) => product.category === product.category )
    // console.log("RelatedProduct = ",relatedProduct);
    setRelatedProduct(relatedProduct)
  }, [id, product.category]);

  return (
    <>
      <div className="container con my-5">
        <div className="img">
          <img src={product.imgSrc} alt=""  style={{borderRadius:"1vh", width:"35vh", height:"30vh"}}/>
        </div>
        <div className='text-center'>
          <h1 className="card-title text-white">{product.title}</h1>
          <p className="card-text text-white">{product.description}</p>
          <h5 className="mx-3 text-white">₹{product.price}</h5>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
      <h1 className='text-center my-5 text-white'>Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  )
}

export default ProductDetail
