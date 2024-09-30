
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc,collection,getFirestore } from "firebase/firestore";

import { signOut } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyDxCA7oUb1SDKSB0cHHOlplk8x4ojABsw8",
  authDomain: "netflix-clone-3c016.firebaseapp.com",
  projectId: "netflix-clone-3c016",
  storageBucket: "netflix-clone-3c016.appspot.com",
  messagingSenderId: "866605448003",
  appId: "1:866605448003:web:95e34f87a18d5e888acdf6"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

const signup=async(name,email,password)=>{
    try {
       const res= await createUserWithEmailAndPassword(auth,email,password)
       const user=res.user
       await addDoc(collection(db,"user"),{uid:user.uid,name,authProvider:"local",email})
    } catch (error) {
        console.log(error)
        alert(error)
    }
}
const login=async(email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}
const logout=()=>{
    signOut(auth)
}
export {auth,db,login,signup,logout}