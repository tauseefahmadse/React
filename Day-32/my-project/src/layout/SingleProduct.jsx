import React from 'react'
import { useParams } from 'react-router-dom'
import { CardImg, Col, Row } from 'react-bootstrap'
import productRecords from '../data/Products'

const SingleProduct = () => {
  const prod = useParams();
  //console.log(prod.id)

   const single =  productRecords.find((product)=>(product.id==prod.id))
  return (
    <Row>
        {/* SingleProduct:{prod.id} */}
        
        <Col>
       <CardImg src={single.image}></CardImg>
        </Col>

        <Col>
        <h1>{single.title}</h1>
          <h6>{single.category}</h6>
          <p>{single.description}</p>
          <p>{single.price}</p>
        </Col>
    </Row>
  )
}

export default SingleProduct