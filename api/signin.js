import bcrypt from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;
import bodyparser from 'body-parser';
import express from 'express';

//import signinquery from '../graphql/queries/signin_query.js';
import dotenv from 'dotenv';
import passwordfetch from '../graphql/queries/user/passwordfetch_query.js';

dotenv.config();

const hasuraEndpoint=process.env.HASURA_ENDPOINT;
const hasuraAdminSecret=process.env.HASURA_ADMIN_SECRET;

const signinrouter=express.Router()

signinrouter.post('/',(req,res)=>{
    
    try{
        var { uname, password } = req.body;
        const pass=passwordfetch(uname);
        const passj= JSON.stringify({query:pass});
        const fetchPassword = async () => {
            const response = await fetch(hasuraEndpoint, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': hasuraAdminSecret,
                },
                body: passj,
            });
            const data = await response.json();
            
            const hash = data.data.users[0].password;
            const fname=data.data.users[0].fname;
            
            const lname=data.data.users[0].lname;
            const balance=data.data.users.balance ?? 0.0;
            const budget=data.data.users.budget ?? 0.0;
            //const payload={fname,lname,balance,budget};
            
            const result= bcrypt.compareSync(password,hash);
            password=null;

            if(result){
                const token = jwt.sign({uname},process.env.SECRET_KEY,{expiresIn:'1h'});
                res.json({token,jsonpayload:{fname:fname,lname:lname,budget:budget,balance:balance}});
            }
            else{
                res.status(401).json({message:'Invalid Credentials'})
            }

        };
        

        // const query=signinquery(uname,hashedpassword);
        // const body = JSON.stringify({query:query}); 
        // const fetchData = async () => {
        //     const response = await fetch(hasuraEndpoint, {
        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json',
        //         'x-hasura-admin-secret': hasuraAdminSecret,
        //         },
        //         body: body,
        //     });
        //     const data = await response.json();
        //     //const str=JSON.stringify(data);
        //     const len=data.data.users.length;
        //     console.log(len)
        //     if(len==0){
        //         res.status(400).json({message:"User Not Fount / Wrong Credentials! Check Again"});
                
        //     }
        //     else{
        //         res.status(200).json({message:"Login Successful"});
        //     }
        // };
        fetchPassword().catch((error) => console.error(error));
    }
        catch(err)
        {
            res.status(500).json({message:"Internal Server Error"});
            console.log("[ERROR] Error parsing JSON.",err)
        }

    });
export default signinrouter;