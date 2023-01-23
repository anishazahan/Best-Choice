import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../../Hooks/FilterContex';

const SortProducts = () => {
  const {grid_view,setGridView,sorting,setListView,filter_products } =useFilterContext();
  return (
    <div className='flex justify-between'>
      <div className="sort-btn flex space-x-3">

         {/* ///---grid view----- */}

      <button
          className={grid_view ? "text-2xl bg-primary p-2 text-white " : "text-2xl bg-slate-300 p-2"}
          onClick={setGridView}>
          <BsFillGridFill className="text-black" />
        </button>


        {/* ///---list view----- */}

        <button
          className={!grid_view ? "text-2xl bg-primary p-2 text-white " : "text-2xl bg-slate-300 p-2"}
          onClick={setListView}>
          <BsList className="text-black" />
        </button>
      </div>

      <div className="sort-btn">
        <h2 className='font-medium'>{`${filter_products?.length}`}<span className='px-2'>Products Available</span> </h2>
       
      </div>

        {/* ///---dropdown filter view----- */}

        
        <div className="sort-selection">
        <form action="#">
          <label className='hover:bg-primary hover:text-white' htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="px-3 py-2 border-2 "
            onClick={sorting}
            >
            <option className='hover:bg-primary' value="lowest">Price(lowest)</option>
            <option className='hover:bg-primary ' value="#" disabled></option>
            <option className='hover:bg-primary ' value="highest">Price(highest)</option>
            <option className='hover:bg-primary ' value="#" disabled></option>
            <option className='hover:bg-primary ' value="a-z">Price(a-z)</option>
            <option className='hover:bg-primary ' value="#" disabled></option>
            <option className='hover:bg-primary ' value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
        

    </div>
  )
}

export default SortProducts