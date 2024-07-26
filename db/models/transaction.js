'use strict';
const {Model,Sequelize}=require('sequelize');
const { sequelize } = require('../../config/sequelizer_init');
module.exports=sequelize.define('transactions',{
    id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        autoIncrement:false,
        unique:true,
        primaryKey:true,
        allowNull:false
    },
    
    from:{
        type:Sequelize.UUID,
        allowNull:false
    },
    
    to:{
        type:Sequelize.UUID,
        allowNull:false

    },
    timestamp:{
        type:Sequelize.DATE,
        allowNull:false
    },
    transactiontype:{
        type:Sequelize.STRING,
        allowNull:false
    },
    transactionmethod:{
        type:Sequelize.STRING,
        allowNull:false
    },
    amount:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
    
},{
    freezeTable:true,
    modelName:'transactions',
}
);