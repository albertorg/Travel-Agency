import { account } from "./config"

export const signInWithOAuth = async(provider) => {
    try {
        
        account.createOAuth2Session(provider, 'http://localhost:3000') // add url of error

    } catch (error) {
        console.log(error)
    }
}

