import React from 'react'
import {AiFillStar,} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'
import {FaRegStar,} from 'react-icons/fa'

const StarRatings = ({stars,reviews}) => {
    // console.log(stars)

   const ratingStar = Array.from({length:5},(e,index)=>{
        let number = index + 0.5

        return (
            <span key={index}>
                {
                    stars >= index+1 ? <AiFillStar className='text-secondary'/> : stars >= number ? <FaStarHalfAlt className='text-secondary'/> : <FaRegStar className='text-secondary'/>
                }
            </span>
        )
    })


  return (
    <div>

         <div className="flex items-center space-x-3">
         <h2 className='flex'> {ratingStar}</h2>
        <p>({reviews} Customer Reviews)</p>
         </div>


    </div>
  )
}

export default StarRatings
