



import { createContext, useContext } from "react";

const AppContext =createContext();


const AppProvider = ({children}) => {
    return <AppContext.Provider value={{name : "anisha"}}>{children}</AppContext.Provider>

}

//    custom hook  

const useProductContext = () =>useContext(AppContext);


export {AppProvider,AppContext,useProductContext};