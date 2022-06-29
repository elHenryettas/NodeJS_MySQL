const { getConnection } = require("../database/database");

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language"
    );

    res.json(result);
  } catch (error) {
    res.send(error).status(500);
    console.log("Error in getLanguages", error);
  }
};
const getLanguage = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const result = await connection.query(
      "SELECT id, name, programmers FROM language WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.send(error).status(500);
    console.log("Error in getLanguage", error);
  }
};

const addLanguage = async (req, res) => {
  try {
    const { name, programmers } = req.body;
    if (name === undefined || programmers === undefined)
      res.status(400).json({ massage: "Bad Request. Please fill all fields." });
    const language = { name, programmers };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO language SET ?",
      language
    );

    res.status(200).json({ massage: "Language added" });
  } catch (error) {
    res.send(error).status(500);
    console.log("Error in addLanguage", error);
  }
};

const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, programmers } = req.body;

    if (id === undefined || name === undefined || programmers === undefined)
      res.status(400).json({ massage: "Bad Request. Please fill all fields." });

    const language = { id, name, programmers };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE language SET ? WHERE id = ?",
      [language, id]
    );

    res.status(200).json({ massage: "Language updated" });
  } catch (error) {
    res.send(error).status(500);
    console.log("Error in addLanguage", error);
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const result = await connection.query(
      "DELETE FROM language WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.send(error).status(500);
    console.log("Error in getLanguage", error);
  }
};

const methods = {
  getLanguages,
  getLanguage,
  addLanguage,
  updateLanguage,
  deleteLanguage,
};

module.exports = methods;
