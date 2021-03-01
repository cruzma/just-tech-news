// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

//notice how we dont have to dave dotenc to a variable, all we need to do is execute and all the variabvles will
//be availbale in the .env file
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  module.exports = sequelize;