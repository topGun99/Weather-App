const express=require('express');
const expressLayout=require('express-ejs-layouts');

const app=express();

app.use(express.json({extended:false}));

app.use(expressLayout);
app.set('view engine','ejs');



app.use('/',require('./routes/index.js'));
app.listen(3000);
