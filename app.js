const express = require('express');
const app = express();
app.use(express.static('public'));

/* app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
}); */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
