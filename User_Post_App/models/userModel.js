module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING, 
            allowNull: true,
            validate: {
                is: /^\d+$/ 
            }
        },
        status: {
            type: DataTypes.ENUM('active', 'deleted'),
            allowNull: true,
            defaultValue: 'active'
        }
    }, {
        timestamps: false
    });
    return User;
};
