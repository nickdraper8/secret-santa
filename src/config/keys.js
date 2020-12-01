console.log(`you are running --${process.env.NODE_ENV}-- mode`)
const { REACT_APP_TWILIO_KEY } = process.env;
console.log(`react_app_twilio_key from .env: ${REACT_APP_TWILIO_KEY}`);

if (process.env.NODE_ENV === "production") {
  module.exports = {
    twilioKey: REACT_APP_TWILIO_KEY
  };
} else {
  module.exports = require("./keys_dev");
}