import { initializeApp } from "firebase/app";
import {Modal, message} from 'antd'
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfPNZjY_GsA-nv1Twrm1JNadQVfTIPnio",
    authDomain: "play-green-app.firebaseapp.com",
    projectId: "play-green-app",
    storageBucket: "play-green-app.appspot.com",
    messagingSenderId: "346009016627",
    appId: "1:346009016627:web:f6950d894ff62cfb81c646"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Authentication
export const auth = getAuth();

  
export const provider = new GoogleAuthProvider();
export const logInWithGoogle = () => signInWithPopup(auth, provider);

export const handleSignOut = async (router:any) => {
    try {
      await auth.signOut();
      router.push('/')
      console.log("Sesión cerrada correctamente");
      message.success('Session closed successfully')
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
  };

export async function addUser(user:any) {
  try {
    await addDoc(collection(db, "users"), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function updateUser(id:string, newData:any) {
  const userRef = doc(db, "users", id);

  try {
    await updateDoc(userRef, newData);
  } catch (e) {
    console.log("Error al actualizar el user", e);  
  }
}
export const usersCollection = collection(db, "users");

export async function signUp (email:string, password:string, router:any, setLoading:any) {
    setLoading(true)
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      const userData = {
        email: user.email,
        uid:user.uid,
        favorites: []
      };
      await addDoc(usersCollection, userData);
      setLoading(false)
      console.log('User registered successfully');
      Modal.success(
        {title:'User Registered Successfully', 
        content:'User has registered successfully. You can now log in with your credentials.',
        onOk() {router.push('/')}
     })
    } catch (error:any) {
      console.error(error.message);
      setLoading(false)
      
    }
  }  
  export async function LogIn (email:string, password:string, router:any, setLoading:any) {
    setLoading(true)
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false)
      console.log('User logged successfully', user);
      message.success('Welcome!')
      router.push('/home')
    } catch (error:any) {
      console.error(error.message);
      setLoading(false)
      
    }
  } 
  
