import React from 'react'
import ProductCard from './ProductCard'
import CommonHead from './CommonHead'
import axios from 'axios'

const Recommendations = () => {

axios.get('https://dummyjson.com/products')
.then((a)=>{console.log(a)})






  return (
    <>
    <section className='mt-[176px]'>
        <div className="container">
          <CommonHead content1={'Recommendations.'} content2={' Best matching products for you'}/>
            <ProductCard/>

    
        </div>

    </section>
    </>
  )
}

export default Recommendations