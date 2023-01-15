

const ProductReducer = (state,action)=>{

// if (action.type === "SET_LOADING"){
//     return {
//         ...state,
//         isLoading : true,
        
//     }
// }
// if (action.type === "API_ERROR"){
//     return {
//         ...state,
//         isLoading : false,
//         isError : true,
        
//     }
// }


    switch (action.type) {
        case "SET_LOADING":
        return {
                    ...state,
                    isLoading : true,    
                }

        case "SET_API_DATA":
            const featureData = action.payload.filter((currentEle)=>{
                    return currentEle.featured=== true;
            })
            return {
                ...state,
                isLoading : false,
                products : action.payload,
                FeatureProducts : featureData
            }
       

        case "API_ERROR":
        return {
                     ...state,
                    isLoading : false,
                    isError : true,       
                }
    
        default:
            return state;
    }


  

}


export default ProductReducer