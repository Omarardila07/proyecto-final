import { FacebookAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "./config"

const provider = new FacebookAuthProvider();

export const FacebookAuthPopUp = async () => {
    const result = await signInWithPopup (auth, provider);
    return result
};