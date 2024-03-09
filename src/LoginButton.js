import React, { useRef, useState } from 'react'

const LoginButton = () => {
    const EnterEmail = useRef();
    const EnterPassword = useRef();
    const [IsLogin, setIsLogin] = useState(false);

    const submitHandler = () => {
        let Email = EnterEmail.current.value;
        let Password = EnterPassword.current.value;
        localStorage.setItem("email", Email);

        let url;
        if (IsLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgZPjRSVbNBtzemo5isysIJXB1c_Lr67Q";
        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgZPjRSVbNBtzemo5isysIJXB1c_Lr67Q";
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: Email,
                password: Password,
                returnSecureToken: true
            }),
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
       
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Email</label>
            <input type='text' ref={EnterEmail} />
            <label>Password</label>
            <input type='password' ref={EnterPassword} />
            <button>Submit</button>
        </form>
    )
}

export default LoginButton