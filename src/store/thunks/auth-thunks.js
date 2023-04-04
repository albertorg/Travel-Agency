import { account } from "../../appwrite/config"
import { loginUserWhitEmail, registerUserWhitEmail, signInWithOAuth } from "../../appwrite/providers"
import { checkingCredentials, login, logout, register } from "../slices/auth-slice"

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

export const startCreatingUserWithEmail = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    
        const resp = await registerUserWhitEmail({email, password})
        
        if (!resp.ok) return dispatch(logout(resp.errorMessage))

        dispatch(register(resp))
    }
}


export const startSignInWithEmail = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const resp = await loginUserWhitEmail({email, password})

        if (!resp.ok) return dispatch(logout(resp.errorMessage))
        
        dispatch(login({...resp, name: null}))
    }
} 