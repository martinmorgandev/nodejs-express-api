const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require("./routes/productos.routes")

const app = express()
const PORT = process.env.PORT || 9000
app.use(express.json())

//midelwares
app.use('/api', userRoutes)


//routes 
app.get('/', (req, res) => {
    res.send("Welcome to mi app")
})

//mongodb conection
mongoose.connect("mongodb+srv://martin:0771@tienda.txnm9ve.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Conection Success"))
.catch((error) => console.log(error))

app.listen(PORT, () => console.log('server on port 9000', PORT))