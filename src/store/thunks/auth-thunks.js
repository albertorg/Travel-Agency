import { signInWithOAuth } from "../../appwrite/providers"
import { checkingCredentials } from "../slices/auth-slice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}

export const startOAthSignIn = (provider) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())

        signInWithOAuth(provider)
    }
}

