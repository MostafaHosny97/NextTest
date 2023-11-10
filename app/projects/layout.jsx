import Link from 'next/link'
import React from 'react'

export default function ProjectsLayout({children}) {
  return <>
  
    <div className="container">
      <div className="grid grid-flow-row-dense grid-cols-3 lg:grid-cols-5 ...">
        <div className='bg-slate-200 lg:grid-cols-5 text-slate-700 text-center py-60 font-bold text-2xl'>
          <div>
            <Link className='block' href={'/projects/web'}>Web Application</Link>
            <Link className='py-8 block' href={'/projects/desktop'}>Desktop Application</Link>
            <Link className='block' href={'/projects/mobile'}>Mobile Application</Link>
          </div>
        </div>

        <div className='lg:grid-cols-1'>
          {children}
        </div>

      </div>
    </div>
  </>
}
