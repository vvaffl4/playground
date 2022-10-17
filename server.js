const express = require('express')
const { Sequelize } = requrie('sequelize');
const app = express()
const port = 3000

const sequelize = new Sequelize('playground', 'user', 'ThisIsAPassword1!', {
  host: 'localhost',
  dialect: 'mysql'
});


app.get('/', async (req, res) => {
  
  try {
    await sequelize.authenticate();
    res.send('Hello Happy World!');
  } catch (error) {
    res.send(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})