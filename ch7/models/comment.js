const Sequelize = require('sequelize');

class Comment extends Sequelize.Model{
    static initiate(sequelize){
        Comment.init({
            comment : {
                type : Sequelize.STRING(100),
                allowNull : false,
            },
            created_at : {
                type: Sequelize.DATE,
                allowNull : true,
                
                
            },
        },
        {
            sequelize,
            timestamps : false,
            tableName : 'comments',
            paranoid : false,
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci',
        
        })
    }
    static associate(db){
            db.Comment.belongsTo(db.User,{forignKey : 'commenter', targetKey : 'id'});
        
    }
    
};

module.exports = Comment;