import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useMemo, useState } from "react";
import { db } from "../../lib/firebase";

const USER_INITIAL = {
  uid: "",
};

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userLog, setUserLog] = useState(USER_INITIAL);
  const [users, setUsers] = useState([]);

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
        (error) => {
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
