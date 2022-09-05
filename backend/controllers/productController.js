const connection = require("../config/config");



//start route
exports.home = (req, res) => {
  let sql = "SELECT * FROM product";
  connection.query(sql, (err, results) => {
    
    if (err) throw err;
    else {
      res.render("products", {
        data: results,
      });
    }
    
  });
};


//search products route
exports.search = (req, res) => {
  const name = req.query.name;
  let sql = `SELECT * FROM product WHERE name LIKE '%${name}%'`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.render("products", {
        data: results,
      });
    } else {
      res.render("error");
    }
  });
};

//category filter route
exports.filter = (req, res) => {
  const id = req.params.id;
  
  let sql = `select p.id, c.name as category, p.url_image, p.price, p.name from product p inner join category c on p.category = c.id WHERE category = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    else {
      res.render("products", {
        data: results
      });
    }
  });
  
}

//product detail route
exports.productDetail = (req, res) => {
  const { id } = req.params;
  const sql = `select p.id, c.name as category, p.url_image, p.price, p.name from product p inner join category c on p.category = c.id WHERE p.id = ${id}`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.log({
        message: "Error: " + error,
      });
    } else {
      res.render("detailProduct", {
        data: results[0],
      });
    }
  });
};

//order products 
exports.pricesUp = (req, res) => {
  const { id } = req.params;
  const sql = "select * from product ORDER BY price asc";
  connection.query(sql, (error, results) => {
    if (error) {
      console.log({
        message: "Error: " + error,
      });
    } else {
      res.render("products", {
        data: results,
      });
    }
  });
};


//Order products 
exports.pricesDown = (req, res) => {
  const { id } = req.params;
  const sql = "select * from product ORDER BY price desc";
  connection.query(sql, (error, results) => {
    if (error) {
      console.log({
        message: "Error: " + error,
      });
    } else {
      res.render("products", {
        data: results,
      });
    }
  });
};
