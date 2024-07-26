const {Client}= require('pg');
require('dotenv').config();

const database={
    connectionString: process.env.PG_DATABASE_URL,
};

const client=new Client(database);
client.connect().then(()=>{
    console.log("[DATABASE] Connection Test. Successfully connected to database.");
    client.end().then(()=>{
        console.log("[DATABASE] Database connection test successful. Closing test client.")
    })
    .catch(err=>{
        console.log("[DATABASE] ERROR Closing test client :",err)
    })

})
.catch(err=>{
    console.log("[DATABASE] Error Connecting Client:",err)
});

export default database;