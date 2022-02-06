import Sequelize from "sequelize"
import config  from "../config/database"
import Lista from "../app/models/Lista"

const models = [Lista]

class Database{
    constructor(){
        this.connection = new Sequelize(config)

        this.init()
    }

    init(){
        models.forEach(model => model.init(this.connection))
    }
}

export default new Database()