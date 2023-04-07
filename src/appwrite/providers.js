import { ID } from "appwrite"
import { account, appwriteDB } from "./config"

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

export const logoutAppwrite = async () => {
    return await account.deleteSessions()
}

export const createBooking = async ({ uid, hotel_code, booking_id }) => {
    try {
        const resp = await appwriteDB.createDocument(
            '642eb854627ac7c5ba8e',
            '642eb86760375cf9fa1f',
            ID.unique(),
            {
                uid,
                hotel_code,
                booking_id
            }
        )

        console.log(resp)

        return {
            ok: true,
            resp
        }
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}
