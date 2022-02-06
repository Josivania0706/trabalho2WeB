import Sequelize, {Model} from "sequelize"

class listas extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
            }, 
            {
                sequelize,
            }
        )
    }
}
export default listas