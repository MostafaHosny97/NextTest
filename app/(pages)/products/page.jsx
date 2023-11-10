import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// ssg
//ssi
export default async function Products() {

    async function getAllData (){
      const res = await fetch ( 'https://ecommerce.routemisr.com/api/v1/products',{
        next : {
          revalidate : 120
        }
      } )
      const finalRes = await res.json();
      return finalRes.data;
  }
  
    const allProducts = await getAllData();
    
  return <section className='bg-white text-blue-600 text-center font-bold'>
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-6">
            { allProducts.map((product , idx) => 
              <Link key={idx} href={`/productdetails/${product.id}`}>
              <div className='rounded-lg shadow-2xl shadow-sky-200 xl:h-[26rem]'>
                <Image src={product.imageCover} width={300} height={250} className='rounded-lg' alt={product.title} />
                <h2 className='py-5 text-blue-600'>{product.title}</h2>
              </div>
              </Link>
              ) }
            </div>
          </div>
        </section>
}
