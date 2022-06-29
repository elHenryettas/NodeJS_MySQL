const router = require("express").Router();
const languages = require("./languages.route")

router.use("/lang", languages);

module.exports = router