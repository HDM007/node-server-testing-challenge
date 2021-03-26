const router = require("express").Router();
const Snack = require("./snacks-model");

router.get("/", async (req, res, next) => {
    try {
      const snacks = await Snack.getAll();
      return res.json(snacks);
    } catch (err) {
      next(err);
    }
});

