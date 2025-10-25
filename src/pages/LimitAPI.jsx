import axios from 'axios'
import React from 'react'

const LimitAPI = () => {
    axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price,images')
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})

    
  return (
    <div>LimitAPI</div>
  )
}

export default LimitAPI