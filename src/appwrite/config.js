import { Client, Account, Databases,} from 'appwrite'

const client = new Client()
    .setEndpoint(process.env.REACT_APP_APPWRITE_URL)
    .setProject(process.env.REACT_APP_APPWRITE_PROYECT_ID)  

// Initialize AppWrite
export const account = new Account(client)

// Initialize AppWrite Database
export const appwriteDB = new Databases(client)