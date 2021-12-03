'use strict'
module.exports = (sequelize, DataTypes) => {
    const Contact_request = sequelize.define("Contact_requests", {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            notEmpty: true,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        message: {
            type: DataTypes.STRING(5000),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        is_resolved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Contact_request;
};