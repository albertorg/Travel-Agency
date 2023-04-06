import { ID } from "appwrite"
import { account } from "./config"

export const signInWithOAuth = async(provider) => {
    try {
        account.createOAuth2Session(provider, 'http://localhost:3000') // add url of error

    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const registerUserWhitEmail = async({ email, password }) => {
    try {
        const resp = await account.create(ID.unique(), email, password)
        const { $id }  = resp
        
        return {
            ok: true,
            $id,
            email
        }
        
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message}
    }
}

export const loginUserWhitEmail = async ({ email, password }) => {
    try {
        const resp = await account.createEmailSession(email, password)
            
        const { $id } = resp

        return {
            ok: true,
            $id,
            email
        }

    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutAppwrite = async() => {
    return await account.deleteSessions()

} 