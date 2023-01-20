import React from 'react'
import { useFilterContext } from '../../Hooks/FilterContex';

const FilterProducts = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  return (
    <div>

      <div className="flex flex-col">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder='search'
          value={text}
          onChange={updateFilterValue}
            className='placeholder-black border-2 p-2 font-medium focus:outline-secondary'/>
        </form>
      </div>
    </div>
  )
}

export default FilterProducts