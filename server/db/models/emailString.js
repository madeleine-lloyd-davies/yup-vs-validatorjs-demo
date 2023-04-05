const db = require("../db");
const Sequelize = require("sequelize");

const EmailString = db.define("emailString", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = EmailString;
