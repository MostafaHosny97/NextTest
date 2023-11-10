import Link from 'next/link'
import React from 'react'

export default function Navbar() {


  return <>
  
<header className="header sticky top-0 bg-slate-700 shadow-md flex items-center justify-between px-10 py-02">
    <h1 className="w-3/12">
        <Link href="/">
        <h2 className='text-2xl font-bold'>Next-Project</h2>
        </Link>
    </h1>

    <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
        <li className="p-4 border-b-2 text-blue-100 border-blue-300 border-opacity-0 hover:border-opacity-100 hover:text-blue-300 duration-200 cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
            <li className="p-4 border-b-2 text-blue-100 border-blue-300 border-opacity-0 hover:border-opacity-100 hover:text-blue-300 duration-200 cursor-pointer active">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 border-b-2 text-blue-100 border-blue-300 border-opacity-0 hover:border-opacity-100 hover:text-blue-300 duration-200 cursor-pointer">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="p-4 border-b-2 text-blue-100 border-blue-300 border-opacity-0 hover:border-opacity-100 hover:text-blue-300 duration-200 cursor-pointer">
              <Link href="/contactus">Contact</Link>
            </li>
            <li className="p-4 border-b-2 text-blue-100 border-blue-300 border-opacity-0 hover:border-opacity-100 hover:text-blue-300 duration-200 cursor-pointer">
              <Link href="/projects">Projects</Link>
            </li>
            
        </ul>
    </nav>


</header>
  
  </>
}
