import { ID, Query } from "appwrite"
import { account, appwriteDB, functionsAppW } from "./config"

export const signInWithOAuth = async (provider) => {
    try {
        account.createOAuth2Session(provider, 'http://localhost:3000') // add url of error

    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const registerUserWhitEmail = async ({ email, password }) => {
    try {
        const resp = await account.create(ID.unique(), email, password)
        const { $id } = resp
        console.log(resp)
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

export const loginUserWhitEmail = async ({ email, password }) => {
    try {
        const resp = await account.createEmailSession(email, password)

        
        const { userId } = resp

        return {
            ok: true,
            uid: userId,
            email
        }

    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutAppwrite = async () => {
    return await account.deleteSessions()
}

export const createBooking = async ( uid, booking_id, checkIn, checkOut, name, persons, image ) => {
    try {
        const resp = await appwriteDB.createDocument(
            '642eb854627ac7c5ba8e',
            '642eb86760375cf9fa1f',
            ID.unique(),
            {
                uid,
                booking_id,
                checkIn,
                checkOut,
                name,
                persons, 
                image
            }
        )

        return {
            ok: true,
            resp
        }
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const getbookingsOfUser = async (uid) => {
    try {
        const resp = await appwriteDB.listDocuments(
            "642eb854627ac7c5ba8e",
            "642eb86760375cf9fa1f",
            [
                Query.equal('uid', uid) 
            ]
        )

        return {
            ok: true,
            resp
        }
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
} 

export const execFunctionSendEmail = async (data) => {
    try {
        const resp = await functionsAppW.createExecution('6439f219f04e76a0b519', data)
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}