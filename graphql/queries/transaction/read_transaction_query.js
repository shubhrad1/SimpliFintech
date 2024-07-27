const readtransactionquery= (userId)=>{

const query=`query {
    transaction (where: {userid: {_eq: "${userId}"}}) {
    id
    transactionmethod
    transactiontype
    amount
    description
    timestamp
    }
}`;
return query;
};
export default readtransactionquery;