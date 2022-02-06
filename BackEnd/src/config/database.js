module.exports = {
    dialect: 'postgres', 
    host: 'localhost',
    username: 'postgres',//nome do banco, eu acho
    password: '12345',
    database: 'lista',
    define:{
        timestamp:true,
        underscored: true,
        underscoredAll: true,
    }
}