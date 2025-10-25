import React from 'react'

const ReduceMethod = () => {
       const myArray = [1,2,3,4,5,6,7,8,9]
    const mySum = myArray.reduce((no, sum)=>{
      return  no + sum
       
    }, 0)
     console.log(mySum)

     console.log(myArray.includes(5))






  return (
    <div>
        <h1 className='text-center font-semibold font-pop text-3xl'>
        ReduceMethod

        </h1>
        </div>
  )
}

export default ReduceMethod