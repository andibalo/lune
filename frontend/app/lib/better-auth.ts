import { createAuthClient } from "better-auth/react"


export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_BE_API_URL
})