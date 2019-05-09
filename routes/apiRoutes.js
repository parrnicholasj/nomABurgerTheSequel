const burgers = require("../models/burgers");

module.exports = app => {

 //get all burgers
  app.get("/api/burgers", function(req, res) {
    burgers.findAll()
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  //add a burger
  app.post("/api/burgers", function(req, res) {
    
    burgers.create(req.body)
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  //nom burger
  app.put("/api/burgers/:id", function(req, res) {
    
    burgers.update(req.body.eaten, req.params.id)
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

}
