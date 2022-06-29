const router = require("express").Router();
const languageController = require("../controllers/language.controller")



router.get("/getLanguages", languageController.getLanguages)
router.get("/getLanguage/:id", languageController.getLanguage)
router.post("/addLanguages", languageController.addLanguage)
router.put("/updateLanguage/:id", languageController.updateLanguage)
router.delete("/deleteLanguage/:id", languageController.deleteLanguage)

module.exports = router