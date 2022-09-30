

const login = require("../routes/api/login");

module.exports = app => {
  app.use("/login", login);
}