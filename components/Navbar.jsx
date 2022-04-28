import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, qty } = useStateContext();
  const [quan, setQuan] = useState(0);

  console.log('quan', quan);
  useEffect(() => {
    let digit = JSON.parse(localStorage.getItem('data'));
    console.log('digit', digit[0].totalQuant);
    setQuan(digit[0].totalQuant);
  }, []);
  // if (typeof window !== 'undefined') {
  //   if (localStorage.getItem('data')) {
  //     let digit = JSON.parse(localStorage.getItem('data'));
  //     console.log('digit', digit[0].totalQuant);
  //     quan = digit[0].totalQuant;
  //   } else {
  //     return [];
  //   }
  // }
  // useEffect(() => {
  //let gotItmes = JSON.parse(localStorage.getItem('data'));

  //   if (!gotItmes) {
  //     return;
  //   } else {
  //     setQuan(gotItmes[0].totalQuant);
  //   }

  //   // console.log('gotItmes');
  // }, [quan]);
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>JSM Headphones</Link>
      </p>

      <button
        type='button'
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{quan}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
