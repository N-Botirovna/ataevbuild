import React from 'react'
import { Hero } from '../../components/template/hero/Hero'
import Navbar from '../../components/template/navbar/Navbar'
import "./header.css"

export const Header = () => {
  return (
    <div className='header'>
        <Navbar/>
        <Hero/>
    </div>
  )
}
