import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react"
import { getAuth } from "firebase/auth";

export const useCurrentUser = () => {
    
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        setCurrentUser(user);
      }
    
      
      return {currentUser}
}