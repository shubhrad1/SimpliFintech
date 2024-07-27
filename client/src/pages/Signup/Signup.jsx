import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";




const SignUp = ()=>{
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        fname:'',
        lname:'',
        email:'',
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
        const response = await fetch('http://localhost:8000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        

        const data_res = await response.json();
        //const data=JSON.stringify(formData)
        if (response.ok){
            
            localStorage.setItem('jwtToken', data_res.token);
            localStorage.setItem('payload',data_res.jsonpayload)
            console.log("Successfully created account.")
            alert("Account Created. Redirecting.....")
            navigate('/login')
        }
        else{
            alert(`Error Creating User:${data_res}`)
            console.log(data_res);
        }

        } catch (error) {
            console.error('Error:', error);
        }

    }

    return(<div>
        <h1>Simpli_Finserv</h1>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
            FirstName:<input 
                id="fname"
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
            />
            LastName:<input id="lname"
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            
            />
            Email:<input id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
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
            Confirm Password:<input id="cpassword" type="password"/>
            <button type="submit" >Submit</button>
        </form>
        
    </div>);
}
export default SignUp;