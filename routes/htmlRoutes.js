// import our cats model
const burgers = require("../models/burgers");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    // use cat.findAll
    burgers
      .findAll()
      // if we get to resolve()
      .then(dbBurgers => {
        res.render("index", {burgerData: dbBurgers})
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}