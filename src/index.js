const express = require('express')
const bodyParser = require('body-parser');
const connectDB = require('./utils/db');
const app = express()
const port = 3000

const produits = ['produit1','prodiut2','produit3'];

/** Parsing the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/products', require('./routes/product.routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

