const connection = require('./connection');

const findAll = () => {
  
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function(err, dbBurgers) {
      if (err) {
        
        return reject(err);
      }
      
      return resolve(dbBurgers);
    });
  });
};

const create = BurgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [BurgerDataObj], function(err, dbBurgers) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgers);
    });
  });
};

const update = (eaten, burgerId) => {
  return new Promise((resolve, reject) => {

    // set sleepyValue to boolean true/false
    eaten = (eaten === "true") 
      ? true : false;

    connection.query("UPDATE burgers SET eaten = ? WHERE id = ?", [eaten, burgerId], function(err, dbBurgers) {

      if (err) {
        return reject(err);
      }
      else if (dbBurgers.changedRows === 0) {
        return reject({message: "You probably have the wrong ID"});
      }
      else {
        return resolve(dbBurgers);
      }
    })
  })
}

module.exports = {
  findAll,
  
  create,
  update
  
};
