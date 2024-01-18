import React from 'react'
import WebNav from '../WebNav'
import Footer from '../Footer'

export default function layout({children}) {
  return (
    <div>
        <WebNav/>
        {children}
        <Footer/>
    </div>
  )
}
