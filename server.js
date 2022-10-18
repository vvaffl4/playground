const express = require('express')
const { Sequelize } = requrie('sequelize');
const app = express()
const port = 3000

const sequelize = new Sequelize('playground', 'vvaffl4', 'ThisIsAPassword1!', {
  host: 'mysql:3306',
  dialect: 'mysql'
});

app.get('/', async (req, res) => {
  
  try {
    await sequelize.authenticate();
    res.send('Hello Happy World!');
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})