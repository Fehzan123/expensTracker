import React from 'react'

const SingInForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        const enterEmail = emailInputRef.current.value;
        const enterPassword = passwordInputRef.current.value;
      
        setLoading(true);
        let url;
        if (isLogin) {
          url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSG5Kbk3sUVdj-uTdvWKMEOnbV-pe5QZY";
        } else {
          url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSG5Kbk3sUVdj-uTdvWKMEOnbV-pe5QZY";
        }
      
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enterEmail,
            password: enterPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            setLoading(false);
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                let errorMessage = "Authentication failed";
                // if (data && data.error && data.error.message) {
                //   errorMessage = data.error.message;
                // }
                throw new Error(errorMessage);
              });
            }
          })
          .then((data) => {
            authCtx.login(data.idToken);
             // Use setIsLonggedIn to update the state
            localStorage.setItem("email", enterEmail);
            navigate("/Home");
            console.log(data);
          })
          .catch((err) => {
            alert(err.message);
          });
      
  return (
    <div>
        
      <form >
        <div >
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div >
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
        </div>
        <div>
       {!isLoading && <button style={{padding:"8px"}}>{isLogin ? "Login" : "Create Account"}</button>}
       {isLoading && <p>send request</p>}
        </div>
        <div >
          <button
            type='button'
            
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    
    </div>
  )
}
}

export default SingInForm;