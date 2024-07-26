require('dotenv').config()
//console.log(process.env.PORT)
module.exports={
  development: {
    url: process.env.PG_DATABASE_URL,
    dialect:'postgres',
    dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
  },
  test: {
    url: process.env.PG_DATABASE_URL,
    dialect:'postgres',
    dialectOptions:{
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    }
  },
  production: {
    url: process.env.PG_DATABASE_URL,
    dialect:'postgres',
    dialectOptions:{
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    }
  }
}
