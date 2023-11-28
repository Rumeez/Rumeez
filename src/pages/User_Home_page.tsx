//User_Home_page
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { MenuButton } from '../utils';

{/*TODO: create a function that: 
            --> (1) Retrieves a list(key as ID and list of usr data as value) 
                    of usr IDs from the backend to display
            --> (2) In the import, have a way to retrieve the current usr's 
                    match status with the usr whose screen they're being
                    displayed on
            --> (3) Once imported, use this imported data to construct the 
                    IsitAmatch() function 
  */}

interface User_Info {
      //Number of roommates
    roommates: number
      //Room mate gender
    genderOfRoomate: string
    smoking: boolean
    drinking: boolean
    riseTime: string
    sleepTime: string
    temp: string  
}

interface User_data_props {
  user_data: number | boolean | string
  label: string
}

const User_Info_Button: React.FC<User_data_props> = ({user_data, label}) => {

    //Converts User_Info data to string format
  function converDataToString(value: number | boolean | string) {
      if(typeof value !== 'string') {
              //returns parameter in string format
          return JSON.stringify(value);
      }

      return value;
  }


    //TODO:{Store path to current page in App component}
        
    //Intermediary function to handle the event and pass value to handleDataConversion


    return(
      <p>  {label}  {converDataToString(user_data)} </p>
    );
}


interface UsrSettButtonProps {
  setFlagTo_true: () => void

}
const User_settings: React.FC<UsrSettButtonProps> = ({setFlagTo_true}) => {
 
  //function handleUserSettings(): void { setNavigation_path('pages/User_Settings_and_Info') }
  return(
    <Link to="/userInfo">
        <button onClick={setFlagTo_true}>
              Link to User Settings and Info
        </button>
    </Link>
  );
}

interface LikeButtonProps {
  setLike_statusTo_true: () => void
  setLike_statusTo_false: () => void
  accessLike_status: () => boolean
  navigate: (arg: string) => void
}

const Like_usr_button: React.FC<LikeButtonProps> = ({setLike_statusTo_true, setLike_statusTo_false, accessLike_status, navigate}) => {

    function matchedPage() : void { 
    
      navigate('/pages/usrMatch');
    }

    function isItAmatch() { 
          {/*TODO: Need to figure out a way to retrieve the current usr displayed like status*/}
              
          //Fill if condition with matching like statuses b/w usrs 
                  //later. Need usr data from back end
              //if(false) {
                //return false; 
              //}
          return true; 
    }

    function temp_dummy() {
      return true
    }

    function handleLikeClick() { 
        setLike_statusTo_true()

        return( 
          (() => {isItAmatch() ? matchedPage() : temp_dummy()})()

          //{/* Returns the UsrMatch page or next usr profile in list to view*/}
        );
    }

    return(
        <button onClick={handleLikeClick}> Like </button>
    );

}

interface SkipButtonProps {
  setLike_statusTo_false: () => void
  accessLike_status: () => boolean
  navigate: (arg: string) => void
}

const Skip_usr_button: React.FC<SkipButtonProps> = ({setLike_statusTo_false, accessLike_status, navigate}) => { 

    const handleSkipClick = () => {
          //{TODO: display next user}
    }

    return(
        <button> Skip </button>
    );
}


    {/*TODO: NEED TO FIX THIS, params aren't recognized by */}
interface UsrHomePageProps { 
  setFlagTo_true: () => void
  setFlagTo_false: () => void
  setLike_statusTo_true: () => void
  setLike_statusTo_false: () => void
  accessLike_status: () => boolean
  setSelected_page: (input: string) => void
  accessSelected_option: () => string
}

const User_Home_Page: React.FC<UsrHomePageProps> = (
  {setFlagTo_true, setFlagTo_false, setLike_statusTo_true, setLike_statusTo_false, setSelected_page, accessSelected_option, accessLike_status}
  
  ) => {
  const navigate = useNavigate();
  
  //Prototype to fill params until can figure out
      // how to fill in the params with backend data
      // retrieval
  const userInfo: User_Info = {
    roommates: 2,
    genderOfRoomate: "male",
    smoking: true,
    drinking: false,
    riseTime: "7 AM",
    sleepTime: "11 PM",
    temp: "warm"
  };

  //let temp_data = "waiting_for_backend"

  return (
    <div>
        <div>
                <MenuButton 
                    setSelected_page={setSelected_page}
                    accessSelected_option={accessSelected_option}
                    setFlagTo_true={setFlagTo_true}
                    setFlagTo_false={setFlagTo_false}
                />
        </div>

        <div>
          <User_Info_Button user_data={userInfo.roommates} label="Number of roommates: " />
        </div>


        <div>
          <User_Info_Button user_data={userInfo.genderOfRoomate} label="Gender of Roommates: " />
        </div>


        <div>
          <User_Info_Button user_data={userInfo.riseTime} label="RiseTime: " />
        </div>


        <div>
          <User_Info_Button user_data={userInfo.sleepTime} label="BedTime: " />
        </div>


        <div>
          <User_Info_Button user_data={userInfo.temp} label="Room Temperature: " />
        </div>


        <div>
          <User_Info_Button user_data={userInfo.smoking} label="Smoke: " />
        </div>


        <div>
          <User_Info_Button user_data={userInfo.drinking} label="Drink: " />
          {/* Other JSX elements */}
        </div>
 
        {/*TODO: Add drop-down for top three room choices*/}

        <div> 
            <Like_usr_button 
              setLike_statusTo_true={setLike_statusTo_true}
              setLike_statusTo_false={setLike_statusTo_false}
              accessLike_status={accessLike_status}
              navigate={navigate}
            />
        </div> 
                
        <div> 
            <Skip_usr_button 
                setLike_statusTo_false={setLike_statusTo_false}
                accessLike_status={accessLike_status}
                navigate={navigate}
            /> 
        </div> 

  </div>
  );
}


export default User_Home_Page;
