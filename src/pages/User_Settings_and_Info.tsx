
import React from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';


function User_Settings_and_Info() {
    
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate('/pages/User_Home_page');
    };
    
    function Back_toUser_Home_Page() {
        
        return (
                <button onClick={handleGoBack}> User Home Page </button>
        );
        
    }

    return (
        <div>
            <h1> User Settings Page</h1>

            <Back_toUser_Home_Page />

        </div>
    );
}


export default User_Settings_and_Info;

