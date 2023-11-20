import React from 'react';

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
  function handleDataConversion(value: number | boolean | string) {
      if(typeof value !== 'string') {
              //returns parameter in string format
          return JSON.stringify(value); 
      }

      return value;
  }

   // Intermediary function to handle the event and pass value to handleDataConversion
  const handleClick = () => {
    const convertedValue = handleDataConversion(user_data);
    // Do something with the convertedValue, e.g., log it
    console.log(convertedValue);
  };

    return(
      <button onClick={handleClick}> 
          {label}
      </button>
    );
}

export function User_Home_Page() {

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

  return (
    <div>
      <User_Info_Button user_data={userInfo.roommates} label="Number of roommates: " />
      <User_Info_Button user_data={userInfo.genderOfRoomate} label="Gender of Roommates: " />
      <User_Info_Button user_data={userInfo.riseTime} label="RiseTime: " />
      <User_Info_Button user_data={userInfo.sleepTime} label="BedTime: " />
      <User_Info_Button user_data={userInfo.temp} label="Room Temperature: " />
      <User_Info_Button user_data={userInfo.smoking} label="Smoke: " />
      <User_Info_Button user_data={userInfo.drinking} label="Drink: " />
      {/*TODO: figure out how to make drop down for top three room choices*/}

      <p> Logged in :p! User Home Page</p>
    </div>
  );
}

/*
<Link to="/userInfo">
    <button onClick={onClick}>
      {children}
    </button>
  </Link>
*/ 