import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router'

const Breadcrumbs = ({pageName, pageLink, subPageName, subPageLink}) => {
  return (
    
    <div className='flex gap-2 items-center'>
        <Link to={'/'} className='text--sm font-normal font-pop text-[#4B5563]'>
        <IoHomeOutline/>
        </Link>
        <span className='text--sm font-normal font-pop text-[#4B5563]'>
            /
        </span>
        <Link to={pageLink} className={`text--sm font-normal font-pop ${subPageName? 'text-[#4B5563]' : 'text-red-500'} capitalize`}>
        {pageName}
        </Link>
        {
            subPageName&&
        <div className='flex gap-3'>

         <span className='text--sm font-normal font-pop text-[#4B5563]'>
            /
        </span>
        <Link to={'#'} className='text--sm font-normal font-pop text-red-500 capitalize'>
        {subPageName}
        </Link>
        </div>
        }
        
        
    </div>
    
  )
}

export default Breadcrumbs