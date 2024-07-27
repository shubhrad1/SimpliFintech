// src/Profile.js
import React from 'react';

const Profile = () => {
//    const [profileData, setProfileData] = useState(null);

    // useEffect(() => {
    // // Fetch data from the JSON file
    // fetch('/data.json')
    //     .then(response => response.json())
    //     .then(data => setProfileData(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);

  // Render loading message while data is being fetched
    // if (!profileData) {
    // return <div>Loading...</div>;
    // }

  // Render profile information
    const f_name=sessionStorage.getItem('fname');
    const l_name=sessionStorage.getItem('lname');
    const budget=sessionStorage.getItem('budget');
    const balance=sessionStorage.getItem('balance');
    return (
    <div>
        <h1>Profile Page</h1>
        Welcome, {f_name} {l_name}
        <br></br>
        Your Balance: {balance}
        <br></br>
        Your Budget: {budget}
        
    </div>
    );
};

export default Profile;
