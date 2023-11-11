// import React from 'react';
// import { Link } from 'react-router-dom';

// function UserInfo() {
//   return (
//     <div>
//       <h1>Tell us about yourself.</h1>
//       <h2>Name</h2>
//       {/* Your user information content goes here */}
      
//       {/* Add a link to navigate back to the home page */}
//       <Link to="/">Go to Home</Link>
//     </div>
//   );
// }

// export default UserInfo;

// UserInfo.tsx

// UserInfo.tsx

// UserInfo.tsx

import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputField'; // Correct the path if needed

function UserInfo() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [gender, setGender] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'year':
        setYear(value);
        break;
      case 'major':
        setMajor(value);
        break;
      case 'hobbies':
        setHobbies(value);
        break;
      case 'gender':
        setGender(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Tell us about yourself.</h1>
      <InputField label="Name" name="name" value={name} onChange={handleInputChange} placeholder="Enter your name" />
      <InputField label="Year" name="year" value={year} onChange={handleInputChange} placeholder="Enter your year" />
      <InputField label="Major" name="major" value={major} onChange={handleInputChange} placeholder="Enter your major" />
      <InputField label="Hobbies" name="hobbies" value={hobbies} onChange={handleInputChange} placeholder="Enter your hobbies" />
      <InputField label="Gender" name="gender" value={gender} onChange={handleInputChange} placeholder="Enter your gender" />

      {/* Your user information content goes here */}
      
      {/* Add a link to navigate back to the home page */}
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default UserInfo;


