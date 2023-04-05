const db = require("../db");
const Sequelize = require("sequelize");

const EmailVal = db.define("emailVal", {
  name: {
    type: Sequelize.STRING,
  },
  validate: {
    isEmail: true,
  },
});

module.exports = EmailVal;
