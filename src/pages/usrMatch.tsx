import React from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

interface fetchUsrProp { 
    usr_ID: string
}

const UsrMatch: React.FC<fetchUsrProp> = ({usr_ID}) => {

    return(
        <div> 
            <button> X </button>

        <div> 
            <h1> You Matched Page </h1>
        </div>
        
        </div>

        
    );
}

export default UsrMatch