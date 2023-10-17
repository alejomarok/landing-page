import React, { useEffect, useState } from 'react';
import './products.css';
import Card from 'react-bootstrap/Card';

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los productos
    console.log('Realizando solicitud al servidor');
    fetch('/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Datos recibidos del servidor:', data);
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  return (
    <div className="products">
      <div className="products-textos">
        <h5 className="products-textos-1">Products</h5>
        <h1 className="products-textos-2">In eget tortor tempor mollis purus</h1>
      </div>
      <div className="cards">
        {productData.map((product) => (
          <Card key={product.id} style={{ width: '18rem' }} className="card-individual">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.touristSpot}</Card.Subtitle>
              <Card.Text>
                {product.characteristics.map((characteristic, index) => (
                  <div key={index}>- {characteristic}</div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
