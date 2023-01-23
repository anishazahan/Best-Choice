import React from 'react'
// import { useFilterContext } from '../../Hooks/FilterContex';

const FilterProducts = () => {
  // const {
  //   filters: { text,category},
  //   all_products,
  //   updateFilterValue
  // } = useFilterContext();
  // console.log(text);

   // get the unique values of each property
  //  const getUniqueData = (data, attr) => {
  //   let newVal = data.map((curElem) => {
  //     return curElem[attr];
  //   });
  //   return (newVal = ["all", ...new Set(newVal)]);
  // }

   // we need to have the individual data of each in an array format
  //  const categoryData = getUniqueData(all_products, "category");

  return (
    <div>

      <div className="flex flex-col">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
           type="text"
            name="text"
            
             placeholder='search'
            // onChange={updateFilterValue}
            className='placeholder-black border-2 p-2 font-medium focus:outline-secondary'
            />
           
        </form>

        <div className="category-filter mt-6 md:mt-16">
          <h2 className='font-medium'>Category</h2>
          <div className="flex flex-row space-x-3 lg:space-x-0 my-3 md:my-0 md:flex-col space-y-2 justify-start mt-5">
          {/* {categoryData.map((curElem, index) => {
            return (
              <div className="">
                <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
                
              </button>
              </div>
            );
          })} */}
          <p>All</p>
          <p>Mobile</p>
          <p>laptop</p>
          <p>Del</p>
          <p>Accesories</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterProducts