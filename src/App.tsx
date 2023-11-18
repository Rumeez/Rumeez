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

import React, {useState, ChangeEvent} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserInfo from './userInfo'; // Adjust the import here
import { handleButtonClick } from './buttonLogic';
import InputField from './InputField'; // Correct the path if needed


function Login(setLogin_Status, setPassword_status) {

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    switch (name) {
      case 'username':
        setLogin_Status(value);
          break; 
      case 'password':
        setPassword_status(value);
          break; 
      default:
        break;
    }
  };

  let temp = "param_req"

  return(
    <div>
    <h1>Tell us about yourself.</h1>
      <InputField label="Username: " name="username" value={temp} onChange={handleInputChange} placeholder="Enter your name" />
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


function Home(setLogin_Status, setPassword_status) { //, accessLogin_status) {
  return (
    <div>
     <h1>Rumeez</h1>
      <Createacc />
     <h2>Find your perfect roommate.</h2>
      <Login setLogin_Status={setLogin_Status} setPassword_status={setPassword_status} />
    <p><Link to="/userInfo">Go to User Info</Link></p>
    </div>
  );
}

function App() {
    //Stores user's username
  const [login_status, setLogin_status] = useState('');
    //Stores user's password associated with account
  const [password_status, setPassword_status] = useState('');
    //Tracks click status of the login button
  //const [login_click, setLogin_click] = useState(false);
  
    //Mutator Functions
  function changeLogin_status(value: string) { setLogin_status(value)};
  function changePassword_status(value: string) { setPassword_status(value)};
    //Accessor Function
  //function retLogin_Status():string { return login_status}

  return (
    <Router>
      <div className="App">
        {/* Use Routes to wrap your Route components */}
        <Routes>
          <Route path="/" element={
              <Home 
              setLogin_Status={changeLogin_status} 
              setPassword_Status={changePassword_status} 
              //accessLogin_status={retLogin_Status}
              />} />
          <Route path="/userInfo" element={<UserInfo />} />
          {/* Other routes go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;