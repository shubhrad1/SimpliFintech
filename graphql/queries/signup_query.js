const insertuser=(fname,lname,email,uname,password)=>{

    const query=`mutation {
    insert_users(objects: {fname: "${fname}", lname: "${lname}", email: "${email}", uname: "${uname}", password: "${password}"}) {
    returning {
    fname
    lname
    uname
    balance
    budget
    }
    }
}`;
return query;
};
export default insertuser;