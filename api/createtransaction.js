import dotenv from 'dotenv';
import express from 'express';
import inserttransactionquery from '../graphql/queries/transaction/insert_transaction_query.js';
dotenv.config();

const hasuraEndpoint=process.env.HASURA_ENDPOINT;
const hasuraAdminSecret=process.env.HASURA_ADMIN_SECRET;

const createtransaction=express.Router();

createtransaction.post('/',(req,res)=>{

    const {userId,transactionmethod,transactiontype,amount,description}=req.body;

    try{
        const query=inserttransactionquery(userId,transactionmethod,transactiontype,amount,description);
        const body = JSON.stringify({query:query});
        
        const createTransaction = async () =>{
            const response = await fetch(hasuraEndpoint, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': hasuraAdminSecret,
                },
                body: body,
            });
            const data = await response.json();
            if(response.ok){
            console.log(data);
            res.status(200).json({transcreate:data});
            }
            else{
                res.status(500).json({message:"Error creating transaction"});
            }
        }
        createTransaction().catch((error)=>console.log(error))

    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }

});
export default createtransaction;