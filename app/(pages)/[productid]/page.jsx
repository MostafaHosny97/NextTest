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
  
  <h1 className='text-center text-black text-xl lg:text-3xl font-bold tracking-widest py-10'>Product Details</h1>
  
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <img src={objDetails.imageCover} alt={objDetails.title} />
      </div>
    </div>

  </section>
}
