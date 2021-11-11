const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const validateRegisterForm = require("../middlewares/registerMiddleware");
const validateLoginForm = require("../middlewares/loginMiddleware");

router.get("/", mainController.getIndex);
router.get("/register", mainController.getRegister);
router.post("/register", validateRegisterForm, mainController.postRegister);
router.get("/login", mainController.getLogin);
router.post("/login", validateLoginForm, mainController.postLogin);

module.exports = router;
