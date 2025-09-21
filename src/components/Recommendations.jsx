import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import CommonHead from './CommonHead'
import axios from 'axios'

const Recommendations = () => {

  const[allProducts , setAllProducts] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{setAllProducts(res.data.products)})
    .catch((err)=>{console.log(err)})

  } , [])

console.log(allProducts)


{/* <CommonHead content1={'Recommendations.'} content2={' Best matching products for you'}/> */}

  return (
    <>
    <section className=''>
        <div className="container">
          <div className='flex items-center gap-5 flex-wrap'>
            {
              allProducts.map((item)=>(

                <ProductCard key={item.id} pImage={item.thumbnail}/>
              ))
            }

          </div>

    
        </div>

    </section>
    </>
  )
}

export default Recommendations