import { collection, onSnapshot } from "firebase/firestore";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { db } from "../../lib/firebase";

const USER_INITIAL = {
  uid: "",
};
export interface Users {
    id:        string;
    uid?:      string;
    favorites: string[];
    dislike:   string[];
}

interface UserContextInterface {
    users?: Users[];
    userLog?:any;
    setUserLog?:any;
    USER_INITIAL?:any;
    setUsers?:React.Dispatch<React.SetStateAction<Users[]>>;
    
    // otras propiedades...
  }
export const UserContext = createContext<UserContextInterface>({});

export const UserProvider = ({ children }:any) => {
  const [userLog, setUserLog] = useState(USER_INITIAL);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersData = snapshot.docs.map(
        (doc) => {
          return {
            id: doc.id,
            uid: doc.data().uid,
            favorites: doc.data().favorites,
            dislike:doc.data().dislike
          };
        },
        (error:any) => {
          console.log(error, "error de escucha");
        }
      );
      setUsers(usersData);
    });

    return () => {
      unsub();
    };
  }, [setUsers]);

  const contextValue = useMemo(() => {
    return {
      userLog,
      setUserLog,
      USER_INITIAL,
      users,
      setUsers,
    };
  }, [userLog, setUserLog, users, setUsers]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
