import bcrypt from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;
import bodyparser from 'body-parser';
import express from 'express';

import checkuserquery from '../graphql/queries/user/checkuser_query.js';
import insertuser from '../graphql/queries/user/signup_query.js';
//import fetchData from './runner.js';
import dotenv from 'dotenv';

dotenv.config();

const hasuraEndpoint=process.env.HASURA_ENDPOINT;
const hasuraAdminSecret=process.env.HASURA_ADMIN_SECRET;

const signuprouter=express.Router()

signuprouter.post('/signup',(req,res)=>{
    const { fname, lname, email, uname, password } = req.body;
    try{

        const query=checkuserquery(uname)

        const body = JSON.stringify({query:query}); 
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
            //const str=JSON.stringify(data);
            const len=data.data.users.length;
            if(len!=0){
                res.status(400).json({message:"Username already exists"});
                
            }
            else{


            const hashedpassword=bcrypt.hashSync(password,10);
            const user_insert=insertuser(fname, lname, email, uname,hashedpassword);
            const body2 = JSON.stringify({query:user_insert});
            const response2 = await fetch(hasuraEndpoint, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': hasuraAdminSecret,
                },
                body: body2,
            });
            const data2 = await response2.json();
            
            if(response2.ok){
            const token = jwt.sign({uname},process.env.SECRET_KEY,{expiresIn:'1h'});
            res.json({token,jsonpayload:data2});
            }
        }
        };
        fetchData().catch((error) => console.error(error));
        
    }
    catch(err){
        console.log("[ERROR] Error parsing JSON.",err)
    }

    

});
export default signuprouter;