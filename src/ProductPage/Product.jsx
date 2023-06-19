import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import BottomBar from '../Navbar/BottomBar';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

export default function Product(props) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  return (
    <header className='w-[98.9vw] overflow-hidden'>
      <Navbar topNav={props.topNav} closeNav={props.closeNav} />
      <div className='flex items-center text-sm text-brown capitalize pl-12'>
        <span className='flex items-center gap-1'>
          <Link className='hover:text-yellow-400'>Home</Link> <IoIosArrowForward />
        </span>
        <span className='flex items-center gap-1'>
          <Link className='hover:text-yellow-400'>bed</Link> <IoIosArrowForward />
        </span>
        <Link className='hover:text-yellow-400'>waffle beds</Link>
      </div>
      <section className='mx-3 lg:mx-12'>
        <ProductImage />
        <div></div>
      </section>
      {/* <BottomBar /> */}
    </header>
  );
}
