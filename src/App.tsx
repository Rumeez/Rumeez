// import React from 'react';
// // import logo from './logo.svg';
// import { handleButtonClick } from './buttonLogic';

// function App() {
//   return (
//     <div className="App">
//     <h1>Rumeez</h1>
//     <button onClick={handleButtonClick}>Log in</button>
//     <h2>Find your perfect roommate.</h2>
//     <button onClick={handleButtonClick}>Create Account</button>
//     </div>
//   );
// }

// export default App;
 
// App.tsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserInfo from './userInfo'; // Adjust the import here
// import { handleButtonClick } from './buttonLogic';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <h1>Rumeez</h1>
//         <button onClick={handleButtonClick}>Log in</button>
//         <h2>Find your perfect roommate.</h2>
//         <button onClick={handleButtonClick}>Create Account</button>

//         {/* Use Routes to wrap your Route components */}
//         <Routes>
//           <Route path="/userInfo" element={<UserInfo />} />
//           {/* Other routes go here */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.tsx


//TODO List:
//1) Create a new file for every link to a new page 
//   and title it after that page. 
//2) Move the main app component to its own seperate file
//3) Import app to every page to ensure that access to the 
//   interface props is available in every file

import React, {useState, ChangeEvent} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserInfo from './userInfo'; // Adjust the import here
import { handleButtonClick } from './buttonLogic';
import InputField from './InputField'; // Correct the path if needed


      //In Progress
  //TODO: {Write Login Render Function for two scenarios: 
  //       (1) render new page if credential match
  //       (2) Display error message saying login is wrong }
  //  *NOTE: Will handle fetching data from backend to verify 
  //         entered user credentials. 

/* FIX Required: Figure Out How to define this outside of App Parent
                  component
  const handleLoginClick: React.FC<AppProps> = (
    {set_to_LoggedIn, set_to_LoggedOut, accessUsername_entry, 
     accessPassword_entry, accessLogin_status}
    ) => {

      //Store vars from App states locally to reduce 
        //computatutional time complexities
      const Username_entry = accessUsername_entry();
      const Password_entry = accessUsername_entry();

      //TODO: {Retrieve data from backend on user credentials entered via axios}

      //1)If (user is found)
        //update the Login_status
        //render home page
      //2)If (user is not found)
        //Display error message: 
        //"username or password incorrect"

        //Branch 1
        set_to_LoggedIn(); 

        return(
          <p> Logged In :p </p>
        )

      
      //Branch 2


}
*/


const Login: React.FC<AppProps> = (
  {setUsername_entry, setPassword_entry, set_to_LoggedIn, set_to_LoggedOut,
    accessUsername_entry, accessPassword_entry, accessLogin_status, login_click}
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

  /* Fix Required:
        //Add the following below InputFields to create
        //a login button that takes in user input, and 
        //logs into the page. Need a way to pass handleC
  <button> onClick={login_click} Log in<button/> */
  return(
    <div>
      <InputField label="Username: " name="username" value={accessUsername_entry()} onChange={handleInputChange} placeholder="Enter your username" />
      <InputField label="Password: " name="password" value={accessPassword_entry()} onChange={handleInputChange} placeholder="Enter your password" />
      <button onClick={login_click}>Log in</button>
    </div>
  ); 
}

function Createacc() {
return( 
  <Link to="/userInfo">
    <button className="create_acc"> Create Account </button>; 
  </Link>
);
}

const Home: React.FC<AppProps> = (
  {setUsername_entry, setPassword_entry, set_to_LoggedIn, set_to_LoggedOut,
    accessUsername_entry, accessPassword_entry, accessLogin_status, login_click}
   ) => { //, accessLogin_status) {

  return (
    <div>
     <h1>Rumeez</h1>
     <h2>Find your perfect roommate.</h2>
          <Login 
            setUsername_entry={setUsername_entry} 
            setPassword_entry={setPassword_entry} 
            set_to_LoggedIn={set_to_LoggedIn}
            set_to_LoggedOut={set_to_LoggedOut}
            accessUsername_entry={accessUsername_entry}
            accessPassword_entry={accessPassword_entry}
            accessLogin_status={accessLogin_status}
            login_click={login_click}
          />
        <> </>
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
  login_click: () => JSX.Element

      //Accessor Function Types
  accessUsername_entry: () => string
  accessPassword_entry: () => string
  accessLogin_status: () => boolean
}

function App () {
    //Stores user's username associated with account
  const [username_entry, setUsername_entry] = useState('');
    //Stores user's password associated with account
  const [password_entry, setPassword_entry] = useState('');
    //Tracks click status of user's login and logout status
  const [login_status, setLogin_status] = useState(false); 

    //Mutator Functions
  function changeUsername_entry(value: string): void { setUsername_entry(value)};
  function changePassword_entry(value: string): void { setPassword_entry(value)};
  function change_to_LoggedIn(): void { setLogin_status(true)};
  function change_to_LoggedOut(): void { setLogin_status(false)};

    //Accessor Function
  function retLogin_entry():string { return username_entry }
  function retPassword_entry():string { return password_entry }
  function retLogin_status():boolean { return login_status }

  //Temporarily defined here:
  function handleLoginClick() {

      //Store vars from App states locally to reduce 
        //computatutional time complexities
      const Username_entry = retLogin_entry();
      const Password_entry = retPassword_entry();

      //TODO: {Retrieve data from backend on user credentials entered via axios}

      //1)If (user is found)
        //update the Login_status
        //render home page
      //2)If (user is not found)
        //Display error message: 
        //"username or password incorrect"

        //Branch 1
        change_to_LoggedIn(); 

        return(
          <p> Logged In :p </p>
        )

      
      //Branch 2

}

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
              accessUsername_entry={retLogin_entry}
              accessPassword_entry={retPassword_entry}
              accessLogin_status={retLogin_status}
              login_click={handleLoginClick}
              /> } />
          <Route path="/userInfo" element={<UserInfo />} />
          {/* Other routes go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;