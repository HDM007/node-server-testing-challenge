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

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const snackToDelete = await Snack.getById(id);
      snackToDelete
        ? await Snack.remove(id)
        : res.status(500).json({ message: "run that back, it didn't work" });
      return res.json(snackToDelete);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
