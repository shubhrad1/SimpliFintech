const checkuserquery=(username)=>{

    const query=`{
    users(where: {uname: {_eq: "${username}"}}) {
    uname
    id
    fname
    }
}`;
return query;
};
export default checkuserquery;