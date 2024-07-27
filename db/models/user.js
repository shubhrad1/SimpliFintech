'use strict';
const {Model,Sequelize,DataTypes}=require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { sequelize } = require('../../config/sequelizer_init');
module.exports=sequelize.define('users',{
    id: {
        type: DataTypes.UUID,
        defaultValue:uuidv4,
        autoIncrement: false,
        primaryKey: true,
        unique: true
        },
        fname: {
        type: DataTypes.STRING,
        allowNull: false
        },
        lname: {
        type: DataTypes.STRING,
        allowNull: true
        },
        uname: {
        type: DataTypes.STRING,
        allowNull: false
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false
        },
        createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        },
        updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        }
    },{
        freezeTableName:true,
        modelName: 'users',

    }
);