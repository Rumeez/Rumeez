export const handleButtonClick = () => {
    // display popup asking for phone number
    const phoneNumber = prompt("Please enter your phone number:");
  
    // check if the user entered a phone number
    if (phoneNumber !== null && phoneNumber.trim() !== "") {
      // user provided a phone number
      console.log(`Phone number entered: ${phoneNumber}`);
      // Add further logic here (e.g., send the phone number to a server, send text to number to verify.)
    } else {
      // User canceled or entered an empty phone number
      console.log("Phone number entry canceled or empty.");
    }
  };