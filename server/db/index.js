const db = require("./db");

const EmailString = require("./models/emailString");
const EmailVal = require("./models/emailVal");

module.exports = {
  db,
  models: {
    EmailString,
    EmailVal,
  },
};
