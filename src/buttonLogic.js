export const handleButtonClick = () => {
    // Display popup asking for phone number
    const phoneNumber = prompt("Please enter your phone number:");
  
    // Check if the user entered a phone number
    if (phoneNumber !== null && phoneNumber.trim() !== "") {
      // User provided a phone number
      console.log(`Phone number entered: ${phoneNumber}`);
      // Add further logic here (e.g., send the phone number to a server, etc.)
    } else {
      // User canceled or entered an empty phone number
      console.log("Phone number entry canceled or empty.");
    }
  };