
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://localhost:27017/database1';
//process.env.MONGO_URI || 
//---------------------------------------------------------------------------------------------------------------

app.use(cors());
app.use(express.json());

//-----------------------------------------------------------------------------------------------------------------

mongoose.connect(MONGO_URI, 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

//--------------------------------------------------------------------------------------------------

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  gender: String,
  dob: Date,
  username: { type: String, unique: true },
  password: String,
  events: [String],
});

const User = mongoose.model('User', userSchema);

//--------------------------------------------------------------------------------------------------------------------------

app.post('/login', async (req, res) => {const { username, password } = req.body;
  try { const user = await User.findOne({ username });
    if (!user || user.password !== password) 
      { 
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } 
  catch (error) 
  {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//------------------------------------------------------------------------------------------------------------------------

app.post('/api/signup', async (req, res) => { const { name, email, mobile, gender, dob, username, password, events } = req.body;

  try { const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) 
      {
      return res.status(400).json({ message: 'Username or email already exists' });
      }

    const newUser = new User({
      name,email,mobile,gender,dob,username,password,events,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } 
  catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//-------------------------------------------------------------------------------------------------------------------

app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`);
});
