import { ReactNode, useContext, createContext, useState } from "react"

export interface User {
    email: string
    first_name: string
    last_name: string
    pk: number,
    username: string,
}


const defaultUser = {
    email: "",
    first_name: "",
    last_name: "",
    pk: 0,
    username: "",
}


const UserContext = createContext({
    user: defaultUser,
    setUser: (user: User) => { }
})


export const useUserContext = () => useContext(UserContext)

interface Props {
    children: ReactNode
}

export function UserContextProvider({ children }: Props) {
    const [user, setUser] = useState(defaultUser)

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}