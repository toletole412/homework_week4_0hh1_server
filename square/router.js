const Router = require("express").Router;
const Square = require('./model')
const router = new Router();


router.get("/square", (req, res) => {
  const square = Square.findAll()
    .then(square => {
      res.json(square);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});


module.exports = router;
