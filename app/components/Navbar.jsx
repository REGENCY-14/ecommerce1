import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <div className='place-content-end'>
        <nav className='space-x-14 my-7'>
            <Link href='/'>Products</Link>
            <Link href='/'>Pricing</Link>
            <Link href='/'>About</Link>
            <Link href='/'>FAQs</Link>
        </nav>
    </div>
  )
}
