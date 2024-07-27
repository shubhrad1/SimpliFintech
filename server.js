import dotenv from 'dotenv';
import express from 'express';
//import { ApolloClient,InMemoryCache } from '@apollo/client';
import mergedResolvers from './graphql/resolvers/index.js';
import mergedTypeDef from './graphql/typedefs/index.js';

dotenv.config();


const app=express();
const port=process.env.PORT;
const hasuraEndpoint=process.env.HASURA_ENDPOINT;
const hasuraAdminSecret=process.env.HASURA_ADMIN_SECRET;

console.log("merge:",mergedTypeDef)

app.listen(port,()=>
console.log("[SERVER] Server listening at port:",port)

)
const mutation = `mutation {
    insert_users(objects: { fname: "John",lname:"Joe",email:"king",uname:"blood",password:"jana"}) {
        returning {
        id
        fname
        }
    }
}`;

const body = JSON.stringify({
    query: mutation
});
const fetchData = async () => {
    const response = await fetch(hasuraEndpoint, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': hasuraAdminSecret,
        },
        body: body,
    });
    const data = await response.json();
    console.log(JSON.stringify(data));
};// app.get('/login',(req,res)=>
//     res.render('login')
// )
fetchData().catch((error) => console.error(error));
