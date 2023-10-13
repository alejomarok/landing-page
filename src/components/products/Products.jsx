import React from 'react'
import './products.css'
import Card from 'react-bootstrap/Card';

const Products = () => {
  return (
    <div className='products'>
        <div className='products-textos'>
            <h5 className='products-textos-1'>Products</h5>
            <h1 className='products-textos-2'>In eget tortor tempor mollis purus</h1>
        </div>
        <div className='cards'>
        <Card style={{ width: '18rem' }} className='card-individual'>
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card-individual'>
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card-individual'>
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    

  )
}

export default Products
