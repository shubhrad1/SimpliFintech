import dotenv from 'dotenv';
import express from 'express';
import readtransactionquery from '../graphql/queries/transaction/read_transaction_query.js';

dotenv.config();

const hasuraEndpoint=process.env.HASURA_ENDPOINT;
const hasuraAdminSecret=process.env.HASURA_ADMIN_SECRET;

const readtransaction=express.Router();

readtransaction.post('/',(req,res)=>{
    const {userId}=req.body;
    try{
    const query=readtransactionquery(userId);
    const body=JSON.stringify({query:query});
    const readTransaction= async () => {
        const response = await fetch(hasuraEndpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': hasuraAdminSecret,
            },
            body: body,
        });
        const data = await response.json();
        if(response.ok)
        {
            console.log(data);
            res.status(200).json({transaction:data});
        }
        else{
            res.status(500).json({message:"Error creating transaction"});
        }
    }
    readTransaction().catch((error)=>console.log(error))

    }
    catch(err){
        res.status(500).json({message:err.message});
    }

});

export default readtransaction; 
