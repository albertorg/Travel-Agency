import { account } from "./config"

export const signInWithGoogle = async() => {
    try {
        
        account.createOAuth2Session('google', 'http://localhost:3000') // add url of error

    } catch (error) {
        console.log(error)
    }
}

