const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    // in how many days/time the token expires
    expiresIn: "1d",
  });
};

module.exports = generateToken;
