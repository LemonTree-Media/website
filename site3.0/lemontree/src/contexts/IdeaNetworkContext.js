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

    return (
        <IdeaNetworkContext.Provider
            value={{state, setName}}
        >
          {children} 
        </IdeaNetworkContext.Provider>
    );
}



export {IdeaNetworkContext, IdeaNetworkProvider};

