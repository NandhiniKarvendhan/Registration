const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Cluster98117:37akbBZb4LFbUosP@cluster98117.pteb4fk.mongodb.net/Event')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

// Define a schema for your data
const registrationSchema = new mongoose.Schema({
  name: String,  
  email: String,
  phoneNumber: String,
  password: String
});

// Create a model based on the schema
const Registration = mongoose.model('Registration', registrationSchema);

// Handle form submission
app.post('/', (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  console.log(req.body);
  // Create a new registration document
  const newRegistration = new Registration({
    name, email, phoneNumber, password
  });

  // Save the document to the database
  newRegistration.save()
    .then(() => {
      console.log('Form data saved successfully');
      // Redirect to the success page after successful registration
      res.redirect('/success.html');
    })
    .catch(err => {
      console.error('Error saving form data', err);
      res.status(500).send('Error saving form data');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
