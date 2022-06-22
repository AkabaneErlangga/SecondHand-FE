import React from 'react'

const CategoryButton = () => {
  return (
    <div className='flex overflow-scroll scrollbar-hide'>
      <button className='bg-darkblue04 text-sm text-white py-2 px-4 rounded-lg mr-2'>Semua</button>
      <button className='bg-darkblue01 text-sm text-black py-2 px-4 rounded-lg mr-2'>Hobi</button>
      <button className='bg-darkblue01 text-sm text-black py-2 px-4 rounded-lg mr-2'>Kendaraan</button>
      <button className='bg-darkblue01 text-sm text-black py-2 px-4 rounded-lg mr-2'>Baju</button>
      <button className='bg-darkblue01 text-sm text-black py-2 px-4 rounded-lg mr-2'>Elektronik</button>
    </div>
  )
}

export default CategoryButton