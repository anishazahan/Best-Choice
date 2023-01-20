import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../../Hooks/FilterContex';

const SortProducts = () => {
  const {grid_view,setGridView,setListView } =useFilterContext();
  return (
    <div className='flex justify-between'>
      <div className="sort-btn flex space-x-2">
      <button
          className={grid_view ? "text-2xl bg-primary p-2 text-white " : "text-2xl bg-slate-300 p-2"}
          onClick={setGridView}>
          <BsFillGridFill className="text-black" />
        </button>

        <button
          className={!grid_view ? "text-2xl bg-primary p-2 text-white " : "text-2xl bg-slate-300 p-2"}
          onClick={setListView}>
          <BsList className="text-black" />
        </button>
      </div>
      <div className="sort-btn">
        <h2 className='font-medium'>Products Available</h2>
      </div>

    </div>
  )
}

export default SortProducts