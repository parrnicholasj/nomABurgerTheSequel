
require('dotenv').config()

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// set up wildcard (404) route
app.get('*', function(req, res) {
  res.json({
    status: 404,
    message: "You've come to the wrong place!"
  });
});

// turn on server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});