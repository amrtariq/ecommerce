import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`} style={{ display: 'block' }}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>

      <Card.Text as="div">
        <div className="my-3">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </div>  
      </Card.Text>

      <Card.Text as="h3">
        <div>
            ${product.price}
        </div>
      </Card.Text>
    </Card>
  )
}

export default Product