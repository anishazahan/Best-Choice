import React from 'react'
import { useFilterContext } from '../../Hooks/FilterContex';

const FilterProducts = () => {
  const {
    filters: { text},
    updateFilterValue
  } = useFilterContext();
  // console.log(text);

  return (
    <div>

      <div className="flex flex-col">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
           type="text"
            name="text"
             placeholder='search'
            onChange={updateFilterValue}
            value={text}
            className='placeholder-black border-2 p-2 font-medium focus:outline-secondary'/>
           
        </form>
      </div>
    </div>
  )
}

export default FilterProducts