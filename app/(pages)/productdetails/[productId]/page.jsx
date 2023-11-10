import React from 'react'

export default async function ProductDetailsId({params}) {

  console.log(params.productId);

  async function getProductDetails () {
    const res = await fetch (`https://ecommerce.routemisr.com/api/v1/products/${params.productId}`)
    const finalRes = await res.json();
    return finalRes.data;
  }

  const objDetails = await getProductDetails();

  console.log(objDetails);

  return <section className='bg-white h-screen'>
  
  <h1 className='text-center text-blue-600 text-2xl lg:text-3xl font-bold tracking-widest py-10 '>Product Details</h1>
  
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="item flex justify-center items-center rounded-2xl shadow-2xl shadow-sky-300">
          <img src={objDetails.imageCover} className='w-2/3 rounded-2xl ' alt={objDetails.title} />
          <h2 className='text-blue-600 px-10 font-bold text-xl lg:text-3xl '>{objDetails.title}</h2>
        </div>
      </div>
    </div>

  </section>
}
