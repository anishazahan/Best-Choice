



import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext } from "react";

const AppContext =createContext();

const api = "https://api.pujakaitem.com/api/products"

const AppProvider = ({children}) => {

    const getProducts = async (url)=>{
        const res = await axios.get(url);
        const products = await res.data
        console.log(products);
    }

    useEffect(()=>{
        getProducts(api);
    },[])


    return ( <AppContext.Provider value={{name : "anisha"}}>{children}</AppContext.Provider>)

}

//    custom hook  

const useProductContext = () =>useContext(AppContext);


export {AppProvider,AppContext,useProductContext};