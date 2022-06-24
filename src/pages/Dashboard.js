import React from 'react'
import Banner from '../components/Banner'
import CategoryButton from '../components/CategoryButton'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Banner />
      <div className='mx-3 lg:mx-[200px]'>
        <h1 className='mb-3 mt-8 text-xl font-bold'>Telusuri Kategori</h1>
        <CategoryButton />
        <div className='my-6 pb-6 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard