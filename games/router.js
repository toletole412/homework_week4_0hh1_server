const Router = require("express").Router;
const Games = require('./model')
const router = new Router();
const { fillBoard, percentageFilled, numberOfValues, cols, rows, isPossibleMove,
  removeRandomValuesFromBoard, filledPositions } = require("./gameLogic");



router.post("/games", (req, res) => {
  const initialState = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]

  const game = {
    board: JSON.stringfy(initialState),
    locked: locked,
    sidebar: sidebar
  }
  //where should i put fillboard function...
  Games
    .create(game)
    .then(entity => {
      res.status(201);
      res.send({
        board: entity.board,
        locked: entity.locked //this is not Sure
        sidebar: entity.sidebar//this is not Sure
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({
        message: "Something went wrong"
      });
    })
  };


module.exports = router;
