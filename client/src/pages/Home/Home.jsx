import React,{useState} from "react";
import { useNavigate } from "react-router-dom";




const Home = ()=>{
    const navigate=useNavigate();
    const handleLogin=()=>
        {
            navigate('/login')
        }
        const handleSignup=()=>
            {
                navigate('/signup')
            }
        
    return(<div>
        <h1>Simpli_Finserv</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>SignUp</button>
    </div>);
}
export default Home;