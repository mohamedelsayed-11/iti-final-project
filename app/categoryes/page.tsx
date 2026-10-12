import React from 'react'


import { categorytype } from '../category/category';



export default async function brands() {


  async function getproduct(): Promise<categorytype[] | null> {
    try {
      let response = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
      let payload = await response.json()

      return payload.data

    } catch (error) {
      console.log(error);
      return null


    }
  }

  const data = await getproduct()
  return (
    <>




      <div className='my-15 grid md:grid-cols-2 lg:grid-cols-4 '>
    {data?.map((category)=>{return <div key={category._id} className='products p-4'>
      <div className='border border-gray-300 shadow-2xl'>
        <img src={category.image} alt={category.name} className='w-full h-60 object-cover' />
        <h4>{category.name}</h4>
        
      </div>
    </div>  })} 

    </div>






      

    </>
  )
}