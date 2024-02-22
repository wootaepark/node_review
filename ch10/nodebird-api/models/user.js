const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            email: {
                type : Sequelize.STRING(40),
                allowNull : true,
                unique : true,
            },
            nick : {
                type : Sequelize.STRING(15),
                allowNull : false,
            },
            password : {
                type : Sequelize.STRING(100),
                allowNull : true, // 카카오톡 로그인을 위해서 allowNull : true 로 함 (따로 구현하려면 모델을 2개로 만들어야 한다.)
            },
            provider : {
                type : Sequelize.ENUM('local', 'kakao'),
                allowNull : false,
                defaultValue : 'local',
            },
            snsId : {
                type : Sequelize.STRING(30),
                allowNull : true,
            }
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : 'User',
            tableName : 'users',
            paranoid : true,
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci',
        });
    }
    static associate(db){
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.User, {
            foreignKey : 'followingId',
            as : 'Followers',
            through : 'Follow',
        });
        db.User.belongsToMany(db.User,{
            foreignKey : 'followerId',
            as : 'Followings',
            through:'Follow',
        });
        db.User.hasMany(db.Domain);
    }
};

module.exports = User;