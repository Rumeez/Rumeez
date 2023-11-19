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

interface LoginProps {
  setLogin_status: (value: string) => void
  setPassword_status: (value: string) => void
  accessLogin_string: () => string
  accessPassword_string: () => string
}

const Login: React.FC<LoginProps> = ({setLogin_status, setPassword_status, accessLogin_string, accessPassword_string}) => {

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    switch (name) {
      case 'username':
        setLogin_status(value);
          break; 
      case 'password':
        setPassword_status(value);
          break; 
      default:
        break;
    }
  };

  return(
    <div>
      <InputField label="Username: " name="username" value={accessLogin_string()} onChange={handleInputChange} placeholder="Enter your username" />
      <InputField label="Password: " name="password" value={accessPassword_string()} onChange={handleInputChange} placeholder="Enter your password" />
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

  //Defining Home Props
interface HomeProps {
  setLogin_status: (value: string) => void
  setPassword_status: (value: string) => void
  accessLogin_string: () => string
  accessPassword_string: () => string
}

const Home: React.FC<HomeProps> = ({setLogin_status, setPassword_status, accessLogin_string, accessPassword_string}) => { //, accessLogin_status) {
  return (
    <div>
     <h1>Rumeez</h1>
      <Createacc />
     <h2>Find your perfect roommate.</h2>
      <Login 
        setLogin_status={setLogin_status} 
        setPassword_status={setPassword_status} 
        accessLogin_string={accessLogin_string}
        accessPassword_string={accessPassword_string}
      />
    <p><Link to="/userInfo">Go to User Info</Link></p>
    </div>
  );
}


function App () {
    //Stores user's username
  const [login_status, setLogin_status] = useState('');
    //Stores user's password associated with account
  const [password_status, setPassword_status] = useState('');
    //Tracks click status of the login button
  //const [login_click, setLogin_click] = useState(false);
  
    //Mutator Functions
  function changeLogin_status(value: string): void { setLogin_status(value)};
  function changePassword_status(value: string): void { setPassword_status(value)};
    //Accessor Function
  function retLogin_string():string { return login_status}
  function retPassword_string():string { return password_status}



  return (
    <Router>
      <div className="App">
        {/* Use Routes to wrap your Route components */}
        <Routes>
          <Route path="/" element={
              <Home 
              setLogin_status={changeLogin_status}  
              setPassword_status={changePassword_status}
              accessLogin_string={retLogin_string}
              accessPassword_string={retPassword_string}
              /> } />
          <Route path="/userInfo" element={<UserInfo />} />
          {/* Other routes go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;