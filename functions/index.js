const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    'sk_test_51HQALCAuuNIxY3IZaWEcBSIFVQeDxT4pZueduFsRGZF5b3RTkIXgtM4Ayef0hzzUHC4VFyfpEBeuNshd9t27toiw00E0a8yOyU'
  )

  //-API

  //-App config

  const app = express();

  //-Middleeares
  app.use(cors({ origin: true }));
  app.use(express.json());

  //API routes
  app.get('/', (request, response) => response.status(200).send("hello world"));

  app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
  // - Listen command
  exports.api = functions.https.onRequest(app);

   // Example endpoint
  //http://localhost:5001/challenge-7a423/us-central1/api