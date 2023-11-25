import React from 'react'
import Container from '../../../UI/Container'
import { useDispatch } from 'react-redux'
import CartItem from '../../CartItem';
import { useCart } from '../../../hooks/useCart'
import CartCalculation from '../../CartCalculation';
import { TfiArrowCircleRight } from 'react-icons/tfi';

import s from './style.module.css'
import { clear } from '../../../store/slice/cartSlice';

import { ToastContainer, Slide } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import ScrollButton from '../../ScrollButton';


export default function CardPage() {
  
  const dispatch = useDispatch();
  const cart = useCart()

  
  
  return (
    <div>
      <Container className={s.container}>

      <ToastContainer position="top-right"
        autoClose={2000}
        transition={Slide}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        // theme="light"
        /> 



      <div className={s.cartHeader}>
        <p>Shopping cart</p>
        <NavLink to={'/allproducts'}>
          Back to the store<TfiArrowCircleRight />
        </NavLink>
      </div>

      <div className={s.cart}>
        <div className={s.leftPart}>
              <div>
                {
                  cart.length === 0
                  ? <img src="/media/empty-cart.png" alt="Your cart is empty" />
                  : cart.map((item) => (<CartItem key={item.id} {...item} />))
                }
                <button className={s.clear} onClick={() => dispatch(clear())}>Clear Cart</button>
              </div>
        </div>
       
        <div className={s.rightPart}>
          <CartCalculation />
        </div>
        </div> 
        <ScrollButton />
      </Container>
    </div>
  )
}
