import React from 'react'
import { Link } from 'react-router'

const Cart = () => {
  return (
    <>
    <section id='Cart' className=' w-full h-screen absolute top-0 left-0'>

    <div className="w-full h-screen bg-[#0000001c]">
    </div>

    <div className="w-[350px] h-screen bg-white absolute top-0 right-0 p-5">
        <h2 className='text-xl font-pop font-medium text-[#000]'>Cart</h2>

        <div className="w-full h-[730px] overflow-y-scroll">

        {/* --------------------------------- Cart products */}
        <div className='flex gap-5 items-center mt-5'>
          <div className="w-15 h-15 bg-gray-100 rounded-[5px]">
            {/* <img src={} alt="" /> */}
          </div>
          <div className="">
            <h2 className='text-lg text-black font-medium font-pop'>Product Name</h2>
               <p className='text-[12px] text-black font-medium font-pop'>Product Price</p>
          </div>
        </div>


        </div>
        {/* -----------------checkout button and product sum---------------- */}
        <div className='flex justify-between'>
          <p className='text-sm text-black font-normal font-pop'>SubTotal</p>
          <p className='text-base text-black font-medium font-pop'>$300</p>
          </div>
          <Link className='w-full py-3 bg-[#111827] inline-block text-[#FFFFFF] text-base font-medium font-pop text-center
           rounded-[10px] active:scale-[1.1]'
            to={'/'}>Checkout</Link>



    </div>
    </section>
    </>
  )
}

export default Cart