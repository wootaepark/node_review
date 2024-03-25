const Sequelize = require('sequelize');

class Domain extends Sequelize.Model{
    static initiate(sequelize){
        Domain.init({
            host : {
                type : Sequelize.STRING(80),
                allowNull : false,
            },
            type : {
                type: Sequelize.ENUM('free', 'premium'),
                allowNull : false,
            },
            clientSecret : {
                type : Sequelize.UUID, // 고유한 문자열 랜덤 부여 
                allowNull : false,
            }
        },{
            sequelize,
            timestamps : true,
            paranoid : true,
            modelName : 'Domain',
            tableName : 'domains',

        })
    }
    static associate(db){
        db.Domain.belongsTo(db.User);
    }
}

module.exports = Domain;