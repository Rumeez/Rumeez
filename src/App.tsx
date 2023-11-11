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

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserInfo from './userInfo'; // Adjust the import here
import { handleButtonClick } from './buttonLogic';

function Home() {
  return (
    <div>
     <h1>Rumeez</h1>
     <button onClick={handleButtonClick}>Log in</button>
     <h2>Find your perfect roommate.</h2>
     <button onClick={handleButtonClick}>Create Account</button>
    <p><Link to="/userInfo">Go to User Info</Link></p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes to wrap your Route components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userInfo" element={<UserInfo />} />
          {/* Other routes go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;