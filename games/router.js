const Router = require("express").Router;
const Games = require('./model')
const router = new Router();
const { fillBoard } = require("./gameLogic");


module.exports = io => {
  router
    .post('/games', (req, res, next) => {
      const newGame = {
        board: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0]
        ]
      }

  Games
    .create(newGame)
    .then((game) => {
    io.emit('action', {
      type: 'CREATE_GAME',
      payload: game
    })
    res.json(game)
  })
    .catch((error) => next(error))
})

  return router
};
