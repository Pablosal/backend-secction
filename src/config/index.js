if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  JWT_SECRET:process.env.JWT_SECRET
};
