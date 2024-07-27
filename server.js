import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import signuprouter from './api/signup.js';
import signinrouter from './api/signin.js';

dotenv.config();


const app=express();
const port=process.env.PORT;
app.use(cors());

// Alternatively, you can configure CORS options
app.use(cors({
    origin: '*', // Replace with your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.listen(port,()=>
console.log("[SERVER] Server listening at port:",port)

)
// const mutation = `mutation {
//     insert_users(objects: { fname: "John",lname:"Joe",email:"king",uname:"blood",password:"jana"}) {
//         returning {
//         id
//         fname
//         }
//     }
// }`;

// const body = JSON.stringify({
//     query: mutation
// });
// const fetchData = async () => {
//     const response = await fetch(hasuraEndpoint, {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         'x-hasura-admin-secret': hasuraAdminSecret,
//         },
//         body: body,
//     });
//     const data = await response.json();
//     console.log(JSON.stringify(data));
// };
// fetchData().catch((error) => console.error(error));
app.use('/api',signuprouter);
app.use('/api/signin',signinrouter);

