import React from 'react'
import { useFilterContext } from '../../Hooks/FilterContex';

const ProductsList = () => {
  const {filter_products,setGridView} = useFilterContext();
  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
}

export default ProductsList