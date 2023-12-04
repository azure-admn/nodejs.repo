const express = require('express');
const app = express();
const port = 3000;

// Sample food data
const menu = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 5 },
  { id: 3, name: 'Salad', price: 8 },
];

// Endpoint to get the menu
app.get('/menu', (req, res) => {
  res.json(menu);
});

// Endpoint to place an order
app.post('/order/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = menu.find((food) => food.id === itemId);

  if (item) {
    res.send(`Order placed for ${item.name} ($${item.price}).`);
  } else {
    res.status(404).send('Item not found in the menu.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Food app listening at http://localhost:${port}`);
});
