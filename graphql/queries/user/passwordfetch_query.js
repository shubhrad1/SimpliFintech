const passwordfetch=(username)=>{

    const query=`{
    users(where: {uname: {_eq: "${username}"}}) {
    fname
    lname
    uname
    budget
    balance
    password
    }
}`;
return query;
};
export default passwordfetch;