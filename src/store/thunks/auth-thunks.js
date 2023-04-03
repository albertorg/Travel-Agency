import { signInWithGoogle } from "../../appwrite/providers"
import { checkingCredentials } from "../slices/auth-slice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())

        signInWithGoogle()
    }
}

export const startFacebookSignIn =() => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}