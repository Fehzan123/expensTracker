import React, { useRef } from 'react'

const UserUpdate = () => {
  const enterName=useRef();
  const enterUrl=useRef();
  const updateFormHandler=(e)=>{
    e.preventDefault();
        const refName=enterName.current.value;
        const refUrl=enterUrl.current.value;
        console.log(refName,refUrl);
        const localStr=localStorage.getItem("token");
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCSG5Kbk3sUVdj-uTdvWKMEOnbV-pe5QZY",
        {
          method:"POST",
          body:JSON.stringify({
            idToken:localStr,
            displayName:refName,
            PhotoUrl:refUrl,
            returnSecureToken:true,
          }),
          headers:{"Content-Type":"aplication/json"},
        }
        ).then((response)=>{
            if(response.ok){
              console.log("User Update sucssesFully")
            }
            else{
              console.log("User update Fail")
            }
            return response.json();
        }).then((data)=>{
          console.log(data);
        }).catch((error)=>{
          console.log("Error occurred while updating user details",error);
        })
  }
  return (
    <form onClick={updateFormHandler}>
        <label>Name</label>
        <input type='text' ref={enterName}/>
        <label>Url</label>
        <input type='text' ref={enterUrl}/>
        <button>Update</button>
    </form>
  )
}

export default UserUpdate