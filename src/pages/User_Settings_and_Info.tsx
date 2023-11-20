
import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';






const Back_toUser_Home_Page: React.FC<User_Settings_and_Info_Props> = ({handleGoBack}) => {
    return (
         <button onClick={handleGoBack}> User Home Page </button>
    );
}


interface User_Settings_and_Info_Props {
    handleGoBack: () => void
}


const User_Settings_and_Info: React.FC<User_Settings_and_Info_Props> = ({handleGoBack}) => {
   
    return (
        <div>
            <h1> User Settings Page</h1>


            <Back_toUser_Home_Page
                handleGoBack={handleGoBack}
            />
        </div>
    );
}


export default User_Settings_and_Info;

