import React from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

interface fetchUsrProp { 
    usr_ID: string
    //navigate: (arg: string) => void
}

const UsrMatch: React.FC<fetchUsrProp> = ({usr_ID}) => {
    const navigate = useNavigate(); 

    const handleGoBack = () => { 
        navigate('/pages/User_Home_page');
    }

    return(
        <div> 
            <button onClick={handleGoBack}> X </button>

            <div> 
                <h1> You Matched Page </h1>
            </div>
        
        </div>

        
    );
}

export default UsrMatch