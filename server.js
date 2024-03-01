const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const { sendEmailController } = require('./controllers/portfoliocontroller');


//dotenv config
dotenv.config()

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'))

//port
const PORT = process.env.PORT || 8000;


//listen
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))