const express = require('express');
const mongoose = require('mongoose');
const Productroute = require("./routes/product.route");

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/api/products" , Productroute)
mongoose.connect('mongodb+srv://vibhoragarwal2802:39OUB2gGgaNv6DN9@backenddb.juwmq.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() =>
    {
        console.log('Connected!')
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    }) 
  .catch(()=>{
    console.log('Not connected')
  })

app.get('/', (req, res) => { 
    res.send('Hello World')
})




