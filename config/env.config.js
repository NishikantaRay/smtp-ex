const dotenv = require('dotenv');

dotenv.config();

// Add a  env variable to your .env file

// add below details their respective env variables
// export EMAIL_PASSWORD=your_password
// export EMAIL_USER=your_email



module.exports = {
    port: process.env.PORT,
    email : process.env.EMAIL,
    password : process.env.PASSWORD,
};