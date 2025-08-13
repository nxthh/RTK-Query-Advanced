import { FacebookAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import {auth} from '../../firebase/firebase-config'

export const useLoginWithFacebook=()=>{
    // setup login, popup, logout
    const [error, setError]  = useState();
    // pending
    const [pending, setIsPending] = useState(false);
    // data (user credential)
    const [user, setUser] = useState(null);
    // create provider
    const provider = new FacebookAuthProvider();

    // useEffect tracking on user credential 
    useEffect(()=>{
        const unsubriber = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }else{
                throw new Error("unsubscribe user")
            }
        })
        return () => unsubriber();

    },[])

    // setup login with github 
    const loginWithFacebook = async()=>{
        setIsPending(true);
        try{
            const res = await signInWithPopup(auth,provider);
            if(!res){
                throw new Error("login unsuccessfully");
            }
            const user = res.user;
            console.log("Facebook Info: ", user)
            setIsPending(false);

        }catch(error){
            setError(error)
            console.log(error.message)
            setIsPending(false)
        }
    }

    //logout features 
    const facebookLogout = async() => {

        setIsPending(false);
        setError(null); 
        try{
            await signOut(auth);
            setIsPending(true);
            console.log("Logout successfully!")
        }catch(error){
             setError(error);
             console.log(error.message);
             setIsPending(false);
        }

    }

    return {facebookLogout,loginWithFacebook, pending,error, user};
}