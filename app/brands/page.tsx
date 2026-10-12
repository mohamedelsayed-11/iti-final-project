import React from 'react'

import { brandtype } from '../brand/brand';



export default async function brands() {


  async function getproduct(): Promise<brandtype[] | null> {
    try {
      let response = await fetch('https://ecommerce.routemisr.com/api/v1/brands')
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
    {data?.map((brand)=>{return <div key={brand._id} className='products p-4'>
      <div className='border border-gray-300 shadow-2xl'>
        <img src={brand.image} alt={brand.name} className='w-full h-60 object-cover' />
        <h4>{brand.name}</h4>
        
      </div>
    </div>  })} 

    </div>






      

    </>
  )
}