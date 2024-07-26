'use strict';

const { FOREIGNKEYS } = require('sequelize/lib/query-types');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('transactions',{
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
    }


    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('transactions')
  }
};
