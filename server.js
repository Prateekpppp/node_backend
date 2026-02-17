import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config({path:'config/config.env'});

const port = process.env.PORT || 3000;

// app.route('/api/v1/products').get(getAllProducts);
// app.route('/api/v1/product').get(getSingleProduct);

app.get('/',(req,res)=>{
    res.send('testing app');
});

// app.get('/',getSingleProduct);

app.listen(port, ()=>{
    console.log('Server is running on ' + port);
    
})