const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };
      case "UPDATE_FILTER_VALUE":
       const {name,value} = action.payload;
       return{
        ...state,
        filters:{
            ...state.filters,
            [name]:value,
        }
       }
      case "FILTER_PRODUCTS":
        let { all_products } = state;
        let tempFilterProduct = [...all_products];
        const {text} = state.filters;
        if (text) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
              return curElem.name.toLowerCase().includes(text);
            });
          }

        return {
            ...state,
            filter_products: tempFilterProduct,
          };


      default:
        return state;
    }
  };
  
  export default filterReducer;