import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { account } from "../appwrite/config"
import { login, logout } from "../store/slices/auth-slice"

export const useCheckAuth = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        const getAccount = async () => {
            try {
                const resp = await account.get()
            
                dispatch(login(resp))
            } catch (error) {
                console.log(error)
                dispatch(logout())
            }
        }

        getAccount()
    }, [])
}
