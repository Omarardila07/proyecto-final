import { auth } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const google = new GoogleAuthProvider();

export const GoogleAuthPopUp = async () => {
  const result = await signInWithPopup(auth, google);
  return result;
};
