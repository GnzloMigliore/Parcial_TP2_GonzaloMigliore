const express = require("express");
const router = express.Router();
const controller = require("../controllers/movies");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getAllMovies(pageSize, page));
});
router.get("/id", async (req, res) => {
  res.json(await controller.getMovieId(req.query.id));
});
router.get("/winners", async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getWinner(pageSize,page));
});
router.get("/perLanguage", async (req, res) => {
    console.log(req.query);
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const languaje = req.query.languaje;
  res.json(await controller.getPerLanguage(languaje, pageSize, page));
});
router.get("/ranked", async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    res.json(await controller.getRanked(pageSize,page));
  });
module.exports = router;
