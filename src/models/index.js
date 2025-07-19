const sequelize = require("../config/database");
const courses = require("./courses");


sequelize.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas com sucesso"))
    .catch((error) => console.error("Erro ao sincronizar", error))

module.exports = {
    courses,
}