'use strict';

const { FOREIGNKEYS } = require('sequelize/lib/query-types');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('transaction',{
      id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        autoIncrement:false,
        unique:true,
        primaryKey:true,
        allowNull:false
      },
      userid:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        autoIncrement:false,
        unique:false,
        primaryKey:false,
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
      
      timestamp:{
        type:Sequelize.DATE,
        allowNull:false
      },

      amount:{
        type:Sequelize.DOUBLE,
        allowNull:false
      },
      description:{
        type:Sequelize.STRING,
        allowNull:false
      }
    }


    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('transaction')
  }
};
