const inserttransactionquery=(userid,transactionmethod,transactiontype,amount,description)=>{
const query=` mutation {
    insert_transaction(objects: {transactionmethod: "${transactionmethod}", transactiontype: "${transactiontype}", userid: "${userid}", amount: "${amount}", description: "${description}"}) {
        returning {
        id
        transactionmethod
        transactiontype
        amount
        description
        timestamp
        } 
    }
}`;
return query;
};
export default inserttransactionquery;