import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { MenuButton } from '../utils';

interface SearchProps {
    setSelected_page: (input: string) => void
    accessSelected_option: () => string
}



const Search: React.FC<SearchProps> = ({setSelected_page, accessSelected_option}) => {

    return(
            <MenuButton 
                    setSelected_page={setSelected_page}
                    accessSelected_option={accessSelected_option}
            />
    )
}

export default Search