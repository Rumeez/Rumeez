
//TODO List:
//1) Create a new file for every link to a new page 
//   and title it after that page. 
//2) Move the main app component to its own seperate file
//3) Import app to every page to ensure that access to the 
//   interface props is available in every file

import React, {useEffect, useState, ChangeEvent} from 'react';
//import {useFormStatus} from 'react-dom' 
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import UserInfo from './userInfo'; // Adjust the import here
import { handleButtonClick } from './buttonLogic';
import InputField from './InputField'; // Correct the path if needed
import CreateAccount from './createAccount';
import User_Home_Page from './pages/User_Home_page';
import User_Settings_and_Info from './pages/User_Settings_and_Info';
import UserPref from './userPref';
import UsrMatch from './pages/usrMatch'
import Search from './pages/Search'
import Chat from './pages/Chat'
//npm import Axios from 'axios'

      //In Progress
  //TODO: {Write Login Render Function for two scenarios: 
  //       (1) render new page if credential match
  //       (2) Display error message saying login is wrong }
  //  *NOTE: Will handle fetching data from backend to verify 
  //         entered user credentials. 




interface LoginValidProps {
  event_login_click: () => void
  pending: () => boolean
}

const LoginIsValid: React.FC<LoginValidProps> = ({event_login_click, pending}) => {

  /*
  <Link to="pages/User_Home_page"> 
        <button type="submit" disabled={pending} onClick={event_login_click}>
              {pending ? "Logging In..." : "Login"}
      </button>
    </Link>
  */
  return (
    <Link to="pages/User_Home_page"> 
        <button onClick={event_login_click}>
              Login
        </button>
    </Link>
  ); 
};

interface LoginInvalidProps {
  event_login_click: () => void
  set_trackClicks: () => void
  accessTrack_clicks: () => boolean
}


const LoginIsInvalid: React.FC<LoginInvalidProps> = ({event_login_click, set_trackClicks, accessTrack_clicks}) => {
  if(!accessTrack_clicks()) {
    return (
        <button onClick={event_login_click}> Login </button>
      );
  }
  else {
    return (
      //Just Realized that I could have made an one entire component to capture and display all subcomponents 
          //In the format I wanted. B/c I didn't the Error is going to be diplayed beneath the login button
          //for when login credentials are invalid
      <div>
        <button onClick={event_login_click}> Login </button>
            <p style={{color : 'red'}}> Username or password incorrect </p>
      </div>
    );
  }
};

interface LoginProps {
  //Mutator Function Types
setUsername_entry: (value: string) => void
setPassword_entry: (value: string) => void
set_to_LoggedIn: () => void
set_to_LoggedOut: () => void
set_trackClicks: () => void
setPending_statusTo_true: () => void
setPending_statusTo_false: () => void

  //Accessor Function Types
accessUsername_entry: () => string
accessPassword_entry: () => string
accessLogin_status: () => boolean
accessTrack_clicks: () => boolean
accessPending_status: () => boolean
}

const Login: React.FC<LoginProps> = (
  {setUsername_entry, setPassword_entry, set_to_LoggedIn, set_to_LoggedOut, set_trackClicks, 
    setPending_statusTo_true, setPending_statusTo_false, 
    accessUsername_entry, accessPassword_entry, accessLogin_status, accessTrack_clicks, 
    accessPending_status}
   ) => {

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    switch (name) {
      case 'username':
        setUsername_entry(value);
          break; 
      case 'password':
        setPassword_entry(value);
          break; 
      default:
        break;
    }
  };


  const handleLoginClick = () => {
    isLogin_Valid().then(loginResult => {
      if (loginResult) {
        set_to_LoggedIn();
      } else {
        set_trackClicks();
      }
    });
  };



  const isLogin_Valid =  ():  Promise<boolean> => {
    const username = accessUsername_entry().toString();
    const password = accessPassword_entry().toString();
    const apiUrl = 'http://localhost:8000/user/login';

    
    const requestBody = {
      "email" : username,
      "password" : password
    };
    console.log(requestBody);
    console.log(username);
    console.log(password);
      return fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then(response => {
          if (response.ok) {
            return response.json().then(data => {
              console.log('Login successful:', data);
              return true; // or perform further actions on success
            });
          } else {
            console.error('Login failed:', response.statusText);
            return false; // or handle the error in a way that makes sense for your application
          }
        })
        .catch(error => {
          console.error('Error:', error);
          return false; // or handle the error in a way that makes sense for your application
        });
    };

  //Return for Login Button
      //Display login User_Home_Page when valid login
  if(accessLogin_status()) { 
      return(
          <div>
              <InputField label="Username: " name="username" value={accessUsername_entry()} onChange={handleInputChange} placeholder="Enter your username" />
              <InputField label="Password: " name="password" value={accessPassword_entry()} onChange={handleInputChange} placeholder="Enter your password" />
              <LoginIsValid 
                    event_login_click={handleLoginClick} pending={accessPending_status}
              /> 
          </div> 
        );
      }
          //Display login User_Home_Page when valid login
      else {
        return(
            <div> 
                <InputField label="Username: " name="username" value={accessUsername_entry()} onChange={handleInputChange} placeholder="Enter your username" />
                <InputField label="Password: " name="password" value={accessPassword_entry()} onChange={handleInputChange} placeholder="Enter your password" />
                <LoginIsInvalid 
                              event_login_click={handleLoginClick} 
                              set_trackClicks={set_trackClicks}
                              accessTrack_clicks={accessTrack_clicks}
                /> 
            </div>
        );
      }    
}

function Createacc() {
return( 
  <Link to="/createAccount">
      <button className="create_acc"> Create Account </button>
  </Link>
);
}

interface HomeProps {
        //Mutator Function Types
    setUsername_entry: (value: string) => void
    setPassword_entry: (value: string) => void
    set_to_LoggedIn: () => void
    set_to_LoggedOut: () => void
    set_trackClicks: () => void
    setPending_statusTo_true: () => void
    setPending_statusTo_false: () => void

        //Accessor Function Types
    accessUsername_entry: () => string
    accessPassword_entry: () => string
    accessLogin_status: () => boolean
    accessTrack_clicks: () => boolean
    accessPending_status: () => boolean
    //data: string
}

const Home: React.FC<HomeProps> = (
  { setUsername_entry, setPassword_entry, set_to_LoggedIn, set_to_LoggedOut, set_trackClicks, 
    setPending_statusTo_true, setPending_statusTo_false, 
    accessUsername_entry, accessPassword_entry, accessLogin_status, accessTrack_clicks, 
    accessPending_status,
    //data
  }
) => {

  return (
    <div>
      <h1>Rumeez</h1>
      <h2>Find your perfect roommate.</h2>
      <Login 
          setUsername_entry={setUsername_entry}
          setPassword_entry={setPassword_entry}
          set_to_LoggedIn={set_to_LoggedIn}
          set_to_LoggedOut={set_to_LoggedOut}
          set_trackClicks={set_trackClicks}
          accessUsername_entry={accessUsername_entry}
          accessPassword_entry={accessPassword_entry}
          accessLogin_status={accessLogin_status}
          accessTrack_clicks={accessTrack_clicks}
          setPending_statusTo_true={setPending_statusTo_true}
          setPending_statusTo_false={setPending_statusTo_false}
          accessPending_status={accessPending_status}
      />
      <Createacc />
    </div>
  );
}


   //Defining App Props
interface AppProps {
      //Mutator Function Types
    setUsername_entry: (value: string) => void
    setPassword_entry: (value: string) => void
    set_to_LoggedIn: () => void
    set_to_LoggedOut: () => void
    set_trackClicks: () => void
    //login_click: () => JSX.Element


        //Accessor Function Types
    accessUsername_entry: () => string
    accessPassword_entry: () => string
    accessLogin_status: () => boolean
    accessTrack_clicks: () => boolean
  }

export default function App () {
  //Stores user's username associated with account
const [username_entry, setUsername_entry] = useState('');
  //Stores user's password associated with account
const [password_entry, setPassword_entry] = useState('');
  //Tracks click status of user's login and logout status
const [login_status, setLogin_status] = useState(false);
const [pending, setPending] = useState(false); 
  //Tracks how many times, if ever, the user has clicked the login button
const [trackLoginClicks, setTrackLoginClicks] = useState(false);
   // tracks page it's on
const [flag, setFlag] = useState(false);
const [like_status, setLike_status] = useState(false); 
const [selectedPage, setSelectedPage] = useState('Me');
const [data, setData] = useState();


  //Back End functions 
//const getData=async() => {
  //  const response = await Axios.get("http://localhost:8000/user")
    //setData(response.data);
//}

//useEffect(() => {
 // getData()
//}, []);
 


const temp_ID = "X123"

  //Mutator Functions
function changeUsername_entry(value: string): void { setUsername_entry(value)};
function changePassword_entry(value: string): void { setPassword_entry(value)};
function change_to_LoggedIn(): void { setLogin_status(true)};
function change_to_LoggedOut(): void { setLogin_status(false)};
function change_trackClicks(): void {setTrackLoginClicks(true)}
function setFlagTo_true(): void {setFlag(true)}
function setFlagTo_false(): void {setFlag(false)}
function setLike_statusTo_true(): void {setLike_status(true)}
function setLike_statusTo_false(): void {setLike_status(false)}
function setPending_statusTo_true(): void {setPending(true)}
function setPending_statusTo_false(): void {setPending(false)}
function setSelected_page(selected_opt: string): void {setSelectedPage(selected_opt)}


  //Accessor Function
function retLogin_entry():string { return username_entry }
function retPassword_entry():string { return password_entry }
function retLogin_status():boolean { return login_status }
    //This function returns if login clicks has been clicked once or more times
function retTrack_clicks(): boolean {return trackLoginClicks}
function retFlag(): boolean {return flag}
function accessLike_status(): boolean {return like_status}
function accessPending_status():boolean {return pending}
function accessSelected_option():string {return selectedPage}

return (
  <Router>
    <div className="App">
      {/* Use Routes to wrap your Route components */}
      <Routes>
        <Route path="/" element={
            <Home 
                setUsername_entry={changeUsername_entry}  
                setPassword_entry={changePassword_entry}
                set_to_LoggedIn={change_to_LoggedIn}
                set_to_LoggedOut={change_to_LoggedOut}
                set_trackClicks={change_trackClicks}
                accessUsername_entry={retLogin_entry}
                accessPassword_entry={retPassword_entry}
                accessLogin_status={retLogin_status}
                accessTrack_clicks={retTrack_clicks}
                setPending_statusTo_true={setPending_statusTo_true}
                setPending_statusTo_false={setPending_statusTo_false}
                accessPending_status={accessPending_status}
                //data={data}
              /> } 
            />
        <Route path="/userInfo" element={
                <UserInfo setFlagTo_true={setFlagTo_true} 
                          setFlagTo_false={setFlagTo_false} 
                          acceessFlag={retFlag} 
                          setSelected_page={setSelected_page}
                          accessSelected_option={accessSelected_option}
                  />} />
        <Route path="/pages/User_Home_page" element={
                <User_Home_Page 
                    setFlagTo_true={setFlagTo_true}
                    setFlagTo_false={setFlagTo_false}
                    setLike_statusTo_true={setLike_statusTo_true}
                    setLike_statusTo_false={setLike_statusTo_false}
                    accessLike_status={accessLike_status}
                    setSelected_page={setSelected_page}
                    accessSelected_option={accessSelected_option}
                 />}  />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/pages/User_Settings_and_Info" element={ 
                  <UserInfo 
                      setFlagTo_true={setFlagTo_true} 
                      setFlagTo_false={setFlagTo_false} 
                      acceessFlag={retFlag}
                      setSelected_page={setSelected_page}
                      accessSelected_option={accessSelected_option}
                    />} />
        <Route path="/userPref" element={ <UserPref accessFlag={retFlag} />} />
        <Route path="/pages/usrMatch" element={ <UsrMatch usr_ID={temp_ID} />} />
        <Route path="/pages/Search" element={
                <Search 
                    setSelected_page={setSelected_page}
                    accessSelected_option={accessSelected_option}
                    setFlagTo_true={setFlagTo_true}
                    setFlagTo_false={setFlagTo_false}
                 />} />
        <Route path="/pages/Chat" element={
                <Chat 
                    setSelected_page={setSelected_page}
                    accessSelected_option={accessSelected_option}
                    setFlagTo_true={setFlagTo_true}
                    setFlagTo_false={setFlagTo_false}
                />} />
        {/*TODO: Add Search and Chat Routes*/}
          {/* Other routes go here */}
          </Routes>
      </div>
    </Router>
  );
}

//export default App;