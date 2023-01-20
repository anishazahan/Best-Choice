import React from 'react'

const FilterProducts = () => {
  return (
    <div>

      <div className="flex flex-col">
        <form >
          <input type="text" placeholder='search'  className='placeholder-black border-2 p-2 font-medium focus:outline-secondary'/>
        </form>
      </div>
    </div>
  )
}

export default FilterProducts