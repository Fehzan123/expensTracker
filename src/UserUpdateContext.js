import React, { useState } from "react";



const UserContext=React.createContext();

export const UserProvidire=({children})=>{
    const [ShowUpdateForm, setShowUpdateForm] = useState(false);
    return <UserContext.Provider value={{ShowUpdateForm,setShowUpdateForm}}>{children}</UserContext.Provider>
}


export default UserContext;