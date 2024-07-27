import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';



const Login = ()=>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        uname: '',
        password: '',
    });

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    const handleSubmit= async(e)=>
    {
        try{
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        const data = await response.json();
        if (response.ok){
        const token=data.token
        
        localStorage.setItem('jwtToken', token);
        sessionStorage.setItem('fname',data.jsonpayload.fname);
        sessionStorage.setItem('lname',data.jsonpayload.lname);
        sessionStorage.setItem('balance',data.jsonpayload.balance);
        sessionStorage.setItem('budget',data.jsonpayload.budget);
        console.log('Login successful');
        navigate('/dashboard');

        } else {
            console.log('Login failed');
        }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return(<div>
        <h1>Simpli_Finserv</h1>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
            
            Username:<input id="username"
            type="text"
            name="uname"
            value={formData.uname}
            onChange={handleChange}
            required/>
            Password:<input id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required/>
            
            <button type="submit" >Submit</button>
            
        </form>
    </div>);
}
export default Login;