import React from 'react'
import { prodtype } from '../interface/products';



export default async function products() {


  async function getproduct(): Promise<prodtype[] | null> {
    try {
      let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`)
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
    {data?.map((prod)=>{return <div key={prod.id} className='products p-4'>
      <div className='border border-gray-300 shadow-2xl'>
        <img src={prod.imageCover} alt={prod.title} className='w-full h-60 object-cover' />
        <h4>{prod.title}</h4>
        <div className='flex justify-between'>
          <span>{prod.price} EGP</span>
          <span>{prod.ratingsAverage}</span>
        </div>
      </div>
    </div>  })} 

    </div>






      

    </>
  )
}