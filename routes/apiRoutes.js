const db = require("../models");

module.exports = app => {

 //get all burgers

  app.get("/api/burgers", function(req, res) {
    
    db.burgers.findAll({}).then(function(burgers) {
      
      return res.json(burgers);
    });

  });


  //add a burger
  app.post("/api/burgers", function(req, res) {
    
    db.burgers.create({
      text: req.body
      
    }).then(function(burgers) {
      
      res.json(burgers);
    });
   
  });

  //nom burger
  app.put("/api/burgers/:id", function(req, res) {
   
    db.burgers.update({
      eaten: req.body.eaten
      
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
   
  });

}