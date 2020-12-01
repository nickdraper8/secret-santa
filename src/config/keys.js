console.log(`you are running --${process.env.NODE_ENV}-- mode`)
console.log(`react_app_twilio_key from .env: ${process.env.REACT_APP_TWILIO_KEY}`);
console.log(`twilio_key from .heroku: ${process.env.TWILIO_KEY}`);

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}