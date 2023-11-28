import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';


interface MenuButtonProps {
    setSelected_page: (input: string) => void;
    accessSelected_option: () => string;
  }
  
export const MenuButton: React.FC<MenuButtonProps> = ({setSelected_page, accessSelected_option}) => {
  
    const navigate = useNavigate() 
  
        const handleSelectedPage = (target_value: string) => {
          setSelected_page(target_value);
      
          switch (target_value) {
            case 'Me':
              navigate('/pages/User_Settings_and_Info');
              break;
            case 'Home Page':
              navigate('/pages/User_Home_page');
              break;
            case 'Search':
              navigate('/pages/search');
              break;
            case 'Chat':
              navigate('/pages/chat');
              break;
            default:
              break;
          }
        };
  
      return(
        <>
          <label>
              Menu: 
              <div>
                <select
                    value={accessSelected_option()} // ...force the select's value to match the state variable...
                    onChange={(e) => handleSelectedPage(e.target.value)}  // ... and update the state variable on any change!
                >
                    <option value="Me"> My Profile </option>
                    <option value="Home Page"> Home </option>
                    <option value="Search"> Search </option>
                    <option value="Chat"> Chat </option>
                </select>
              </div>
          </label>
        </>
  
      );
  
  }