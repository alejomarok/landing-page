const express = require('express');
const app = express();
const port = 3000;

const productsData = require('./json/products.json');

app.get('/api/products', (req, res) => {
  const randomProducts = getRandomProducts(productsData, 3);
  res.json(randomProducts);
});

function getRandomProducts(allProducts, count) {
  const randomProducts = [];
  while (randomProducts.length < count) {
    const randomIndex = Math.floor(Math.random() * allProducts.length);
    randomProducts.push(allProducts[randomIndex]);
  }
  return randomProducts;
}

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
