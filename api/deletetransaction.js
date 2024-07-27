import dotenv from 'dotenv';
import express from 'express';
import deletetransactionquery from '../graphql/queries/transaction/delete_transaction_query.js';

dotenv.config();

const hasuraEndpoint=process.env.HASURA_ENDPOINT;
const hasuraAdminSecret=process.env.HASURA_ADMIN_SECRET;

const deletetransaction=express.Router();

deletetransaction.post('/',(req,res)=>{
    const {id,userId}=req.body;
    try{
    const query=deletetransactionquery(id,userId);
    const body=JSON.stringify({query:query});
    const deleteTransaction= async () => {
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
            res.status(200).json({transdeleted:data});
        }
        else{
            res.status(500).json({message:"Error creating transaction"});
        }
    }
    deleteTransaction().catch((error)=>console.log(error))

    }
    catch(err){
        res.status(500).json({message:err.message});
    }

});

export default deletetransaction; 
