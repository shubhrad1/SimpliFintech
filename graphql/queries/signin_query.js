const signinquery=(username,password)=>{

    const query=`{
    users(where: {uname: {_eq: "${username}"}, password: {_eq: "${password}"}}) {
    fname
    lname
    uname
    balance
    budget
    }
}`;
return query;
};
export default signinquery;