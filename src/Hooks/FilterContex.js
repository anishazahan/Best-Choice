import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductsContext";
import reducer from '../Hooks/reducer/filterReducer'



const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  filters :{
    text : "",
  }
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  // update filter value
  const updateFilterValue = (event) => {
    let name = event.target.name
    let value = event.target.value
    return dispatch ({type:"UPDATE_FILTER_VALUE", payload :{name,value}})
  };

  useEffect(() => {
    dispatch({type : "FILTER_PRODUCTS"});
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products,state.filters]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView,setListView,updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};