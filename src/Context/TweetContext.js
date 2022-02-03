import { useState, createContext } from "react";

export const TweetContext = createContext();

const TweetProvider = ({ children }) => {
    const [tweet, setTweet] = useState();

    return (
        <TweetContext.Provider value={{ tweet, setTweet }} >
            {children}
        </TweetContext.Provider>
    )
}

export default TweetProvider;