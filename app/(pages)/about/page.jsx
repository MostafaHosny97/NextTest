import Image from 'next/image';
import React from 'react';
import myImg from '../../images/MH-profile.jpg'

export default function About({allProducts}) {
  return <>
    <h2 className="text-center h-screen text-blue-600 text-3xl font-extrabold pt-80">About</h2>
    <Image src={myImg} alt='myImg'/>
  </>
}
