const router = require("express").Router();
const languages = require("./languages.route")

router.use("/languages", languages);

module.exports = router