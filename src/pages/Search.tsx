import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { MenuButton } from '../utils';

interface SearchProps {
    setSelected_page: (input: string) => void
    accessSelected_option: () => string
    setFlagTo_true: () => void
    setFlagTo_false: () => void
}



const Search: React.FC<SearchProps> = ({setSelected_page, accessSelected_option, setFlagTo_true, setFlagTo_false}) => {

    return(
            <MenuButton 
                    setSelected_page={setSelected_page}
                    accessSelected_option={accessSelected_option}
                    setFlagTo_true={setFlagTo_true}
                    setFlagTo_false={setFlagTo_false}
            />
    )
}

export default Search