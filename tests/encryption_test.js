import bcrypt from 'bcryptjs' ;

const password='potter'
const out=bcrypt.hashSync(password,10)
console.log(out);