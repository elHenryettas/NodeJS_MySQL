const router = require("express").Router();
const languageController = require("../controllers/language.controller")



router.get("/", languageController.getLanguage)

module.exports = router