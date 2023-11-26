
import React from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { MenuButton } from '../utils';



interface SettingsAndInfoProps {
    setSelected_page: (input: string) => void
    accessSelected_option: () => string
}

const User_Settings_and_Info: React.FC<SettingsAndInfoProps> = ({setSelected_page, accessSelected_option}) => {
    
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

            <div>
                <MenuButton 
                    setSelected_page={setSelected_page}
                    accessSelected_option={accessSelected_option}
                />
            </div>
            <h1> User Settings Page</h1>

            <Back_toUser_Home_Page />

        </div>
    );
}


export default User_Settings_and_Info;

