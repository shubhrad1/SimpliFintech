const updatetransactionquery = (userId,id,transactionmethod,transactiontype,amount,description) => {

const query = `mutation {
    update_transaction(where: {userid: {_eq: "${userId}"}, id: {_eq: "${id}"}}, _set: {transactionmethod: "${transactionmethod}", transactiontype: "${transactiontype}", description: "${description}", amount: "${amount}"}) {
    returning {
        id
        transactionmethod
        transactiontype
        amount
        description
    }
    }
}
`;
return query;
}
export default updatetransactionquery;