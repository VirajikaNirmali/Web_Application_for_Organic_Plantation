const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');


const app = express();
//import router
const postRoutes = require('./routes/posts');
//app middleware 
app.use(bodyParser.json());
app.use(cors())

app.use(postRoutes);

const PORT = 5000;
const DB_URL ='mongodb+srv://twg:twg123@mernapp.e5v1o.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,
    // userNewUrlParser:true,
    // useUnifiedTopology: true
)
.then(()=>{
    console.log('DB Connect');

})
.catch((err) => console.log('DB Connection Error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});