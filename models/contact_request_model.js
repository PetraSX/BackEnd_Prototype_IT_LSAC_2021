'use strict'
module.exports = (sequelize, DataTypes) => {
    const Contact_request = sequelize.define("Contact_requests", {
        name: {
            type: DataTypes.STRING(50),
            allowNULL: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING(50),
            allowNULL: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        message: {
            type: DataTypes.STRING(5000),
            allowNULL: false,
            validate: {
                notEmpty: true
            }
        },
        is_resolved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNULL: false,
            validate: {
                notEmpty: false
            }
        }
    });
    return Contact_request;
};