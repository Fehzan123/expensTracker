import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ForgetPassword = () => {
  const EmailRef=useRef();
  const [error, setError] = useState(null);
  const forgotPasswordHandler = () => {
    setError(null); // Clear any previous error

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCSG5Kbk3sUVdj-uTdvWKMEOnbV-pe5QZY", {
      method: "post",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: EmailRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("An error occurred while sending reset link.");
        }
      })
      .then((res) => {
        console.log(res);
        // Handle success, show success message to user if needed
      })
      .catch((err) => {
        // Handle error
        setError(err.message);
        console.log("An error occurred:", err.message);
      });
  };
  return (
    <div>
        <h1>Change Yuor Password</h1>
        <label>EnterEmail:-</label>
        <input type='text' ref={EmailRef}/>
        <button onClick={forgotPasswordHandler}>Send Email</button>
        <br></br>
        <NavLink to="/Login">UserIs Allredy?Login</NavLink>
    </div>
  )
}

export default ForgetPassword
