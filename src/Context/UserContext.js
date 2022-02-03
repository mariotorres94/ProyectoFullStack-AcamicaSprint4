import { useState, createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userGoogle, setUserGoogle] = useState();
    const [userB, setUserB] = useState();

    return (
        <UserContext.Provider value={{ userGoogle, setUserGoogle, userB, setUserB }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;