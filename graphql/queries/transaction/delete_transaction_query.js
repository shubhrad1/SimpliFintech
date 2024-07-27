const deletetransactionquery=(id,userId)=>{
    const query=`mutation {
    delete_transaction(where: {id: {_eq: "${id}"}, _and: {userid: {_eq: "${userId}"}}}) {
    returning {
        id
        userid
    }
    } 
}`;
return query;
}
export default deletetransactionquery;
