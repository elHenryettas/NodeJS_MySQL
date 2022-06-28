const { getConnection } = require("../database/database");


const getLanguage = async (req,res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language") 
        res.json(result)
    } catch (error) {
        console.log("Error in language.route.js", error)
    }
}



const methods ={
    getLanguage
};

module.exports = methods