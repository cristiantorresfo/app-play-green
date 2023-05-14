import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react"
import { getAuth } from "firebase/auth";

export const useCurrentUser = () => {
   const [currentUser, setCurrentUser] = useState()   
    
    const auth = getAuth();
    const user = auth.currentUser;
    setCurrentUser(user)
    
      
      return {currentUser}
}