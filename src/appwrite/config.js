import { Client, Account, Databases,} from 'appwrite'

const client = new Client()

client
    .setEndpoint('https://server.funtravels.net/v1')
    .setProject('63cbdbb76fcdb81bbb43')

// Initialize AppWrite
export const account = new Account(client)

export const appwriteAuth = account.get() 

// Initialize AppWrite Database
export const appwriteDB = new Databases(client)