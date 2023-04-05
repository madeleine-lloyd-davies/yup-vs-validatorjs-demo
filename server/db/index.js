//this is the access point for all things database related!

const db = require("./db");

const Template = require("./models/templateModel");

//associations could go here!

module.exports = {
  db,
  models: {
    Template,
  },
};
