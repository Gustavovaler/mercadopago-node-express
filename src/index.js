const express = require('express');
const app = express();

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410'
  });

//routes
app.get('/checkout', (req, res) => {
// Crea un objeto de preferencia
let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
    
    
   
  }).catch(function(error){
    console.log(error);
  });
});




//server

app.listen(3000, () => {
    console.log("Server on port 3000");
});