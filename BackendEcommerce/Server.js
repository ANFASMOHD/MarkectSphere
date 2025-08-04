const  express = require('express');
const path = require('path');

const PORT=process.env.PORT||4000

const app =express();
const dbconnect=require('./Config/Db')

const dotenv=require('dotenv');

dotenv.config()


app.use("/uploads", express.static("uploads")); // Se




dbconnect();
app.use(express.json())
const AuthRoutes = require('./Routes/AuthRoutes')
const SellersRoute = require('./Routes/SellersRoute');

app.use('/',AuthRoutes);

app.use('/',SellersRoute);

app.listen(PORT,()=>{
    console.log(`App is Running At ${PORT}`);
    
})