const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const validateCreateForm = require("../middlewares/registerMiddleware");

router.get("/", mainController.getIndex);
router.get("/", mainController.getRegister);
router.post("/", validateCreateForm, mainController.postRegister);

module.exports = router;
