// import our cats model
const $ = require("../views/");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    $.get("/api/burgers", function(data) {
      res.render("index", {burgerData: data})
    });
  });
}