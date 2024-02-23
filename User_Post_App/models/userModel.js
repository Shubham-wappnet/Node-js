module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Invalid email format'
                }
            }
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: {
                    msg: 'Phone must be numeric'
                }
            }
        },
        status: {
            type: DataTypes.ENUM('Active', 'Deleted'),
            defaultValue: 'Active',
            allowNull: false,
            // validate: {
            //     isIn: {
            //         args: [['Active', 'Deleted']],
            //         msg: "Must be Active or Deleted"
            //     }
            // }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {
        timestamps: true,
    });
    return User;
};
