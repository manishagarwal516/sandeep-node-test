const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const formRoute = require('./routes/formRoute');
const registerRoute = require('./routes/registerRoute');
const PORT = 5000;

const app = express();

//Set View Engine
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Route for Form
app.use('/',formRoute);
app.use('/register',registerRoute);

app.use((req, res, next)=>{
    res.send('Invalid URL');
});

app.listen(PORT,()=>{ console.log(`Server Running On PORT ${PORT}`)});