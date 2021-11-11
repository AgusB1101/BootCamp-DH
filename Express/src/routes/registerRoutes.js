const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const validateCreateForm = require("../middlewares/registerMiddleware");

router.get("/", registerController.getRegister);

router.post("/", validateCreateForm, registerController.postRegister);

module.exports = router;
