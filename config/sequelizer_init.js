require('dotenv').config({path:'../.env'})
const {Sequelize}=require('sequelize')

const config=require('./config.js')
const env=process.env.NODE_ENV
const sequelize=new Sequelize(config[env])

module.exports=sequelize;