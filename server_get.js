const express= require("express");
const app= express();

// Serve static files from the 'public' folder
app.use(express.static(__dirname+'/public'))

// Simple GET endpoint
app.get("/", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));     
})

// Endpoint to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
      return res.status(400).send('num1 is incorrectly defined');
    }
    if (isNaN(num2)) {
      return res.status(400).send('num2 is incorrectly defined');
    }
    if (!isFinite(num1) || !isFinite(num2) ) {
        return res.status(400).send('input cannot be infinity');
    }
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
  });
  
// Endpoint to subtract two numbers
  app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
        return res.status(400).send('num1 is incorrectly defined');
    }
    if (isNaN(num2)) {
        return res.status(400).send('num2 is incorrectly defined');
    }
    if (!isFinite(num1) || !isFinite(num2) ) {
        return res.status(400).send('input cannot be infinity');
    }
    const difference = num1 - num2;
    res.send(`The difference between ${num1} and ${num2} is ${difference}`);
  });
  
  // Endpoint to multiply two numbers
  app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
        return res.status(400).send('num1 is incorrectly defined');
    }
    if (isNaN(num2)) {
        return res.status(400).send('num2 is incorrectly defined');
    }
    if (!isFinite(num1) || !isFinite(num2) ) {
          return res.status(400).send('input cannot be infinity');
    }
    const product = num1 * num2;
    res.send(`The product of ${num1} and ${num2} is ${product}`);
  });
  
  // Endpoint to divide two numbers
  app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
        return res.status(400).send('num1 is incorrectly defined');
    }
    if (isNaN(num2)) {
        return res.status(400).send('num2 is incorrectly defined');
    }
    if (!isFinite(num1) || !isFinite(num2) ) {
          return res.status(400).send('input cannot be infinity');
    }
    if (num2 === 0) {
        return res.status(400).send('Invalid - division by zero');
    }
    const quotient = num1 / num2;
    res.send(`The quotient of ${num1} divided by ${num2} is ${quotient}`);
  });

const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})