import dotenv from 'dotenv';
import express from 'express';
import updatetransactionquery from '../graphql/queries/transaction/update_transaction_query.js';
dotenv.config();

const hasuraEndpoint=process.env.HASURA_ENDPOINT;
const hasuraAdminSecret=process.env.HASURA_ADMIN_SECRET;

const updatetransaction=express.Router();

updatetransaction.post('/',(req,res)=>{

    const {userId,id,transactionmethod,transactiontype,amount,description}=req.body;

    try{
        const query=updatetransactionquery(userId,id,transactionmethod,transactiontype,amount,description);
        const body = JSON.stringify({query:query});
        
        const updateTransaction = async () =>{
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
            res.status(200).json({transupdate:data});
            }
            else{
                res.status(500).json({message:"Error creating transaction"});
            }
        }
        updateTransaction().catch((error)=>console.log(error))

    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }

});
export default updatetransaction;