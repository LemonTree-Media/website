import React, { createContext, useState } from 'react';

const IdeaNetworkContext = createContext();

const IdeaNetworkProvider = ({ children }) => {
    let [state, setState] = useState({
        name: ''
    });

    const setName = (name) => {
        setState(prevState => ({
            ...prevState,
            name
        }));
    }

    //Create a function here that can be used by Filter.js, and the values
    //that the functions return can be used by IdeaNetworkVideoList

    //those needed to subscribe to context is: VideoContainer, IdeaNetworkVideoList
    //declaring the data in Filter.js
    

    return (
        <IdeaNetworkContext.Provider
            value={{state, setName}}
        >
          {children} 
        </IdeaNetworkContext.Provider>
    );
}



export {IdeaNetworkContext, IdeaNetworkProvider};

