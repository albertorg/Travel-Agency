import { checkingCredentials } from "../slices/auth-slice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}

export const startFacebookSignIn =() => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}