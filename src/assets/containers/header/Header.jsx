import React, { useEffect, useState } from 'react'
import { Hero } from '../../components/template/hero/Hero'
import Navbar from '../../components/template/navbar/Navbar'
import "./header.css"

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='header'>
        <Navbar/>
        <Hero/>
    </div>
  )
}
