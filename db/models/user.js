'use strict';
const {Model,Sequelize}=require('sequelize');
const { sequelize } = require('../../config/sequelizer_init');
module.exports=sequelize.define('users',{
    id: {
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        autoIncrement: false,
        primaryKey: true,
        unique: true
        },
        fname: {
        type: Sequelize.STRING,
        allowNull: false
        },
        lname: {
        type: Sequelize.STRING,
        allowNull: true
        },
        uname: {
        type: Sequelize.STRING,
        allowNull: false
        },
        password: {
        type: Sequelize.STRING,
        allowNull: false
        },
        createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        },
        updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        }
    },{
        freezeTableName:true,
        modelName: 'users',

    }
);