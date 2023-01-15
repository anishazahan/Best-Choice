



import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import reducer from './reducer/ProductsReducer'

const AppContext =createContext();

const api = "https://api.pujakaitem.com/api/products"
const initilaState = {
    isLoading : false,
    isError : false,
    products : [],
    FeatureProducts : []
}




const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initilaState);

    const getProducts = async (url)=>{
        const res = await axios.get(url);
        const products = await res.data
        console.log(products);
    }

    useEffect(()=>{
        getProducts(api);
    },[])

    return ( <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>)
}

//    custom hook  

const useProductContext = () =>useContext(AppContext);


export {AppProvider,AppContext,useProductContext};