// CreateAccount.tsx

// Import React and useState from the 'react' library
import React, { useState, ChangeEvent } from 'react';

// Import the InputField component from the './InputField' file
import InputField from './InputField'; // Adjust the import path if needed

// Define the interface for the props of the CreateAccount component
interface CreateAccountProps {
  // Define any specific props for CreateAccount, if needed
}

// Define the CreateAccount component as a functional component
const CreateAccount: React.FC<CreateAccountProps> = () => {

  // Define two state variables, email and password, using the useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define a function handleInputChange to handle input changes in the email and password fields
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Destructure the 'name' and 'value' from the event.target
    const { name, value } = event.target;

    // Use a switch statement to update the corresponding state based on the input field name
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // Define a function handleCreateAccount to handle the creation of the account
  const handleCreateAccount = () => {
    // Implement logic to handle creating an account (currently just logging)
    console.log('Creating account with email:', email, 'and password:', password);
  };

  // Return the JSX for the CreateAccount component
  return (
    <div>
      {/* Render the InputField component for the email input */}
      <InputField
        label="Email:"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />

      {/* Render the InputField component for the password input */}
      <InputField
        label="Password:"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />

      {/* Render a button that triggers the handleCreateAccount function on click */}
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

// Export the CreateAccount component as the default export of this file
export default CreateAccount;
