import React from 'react'

import { useCart } from '../../hooks/useCart';
import PhoneInput from '../PhoneInput';
import s from './style.module.css'


export default function CartCalculation() {

    const cart = useCart();
    // рассчитываем общую стоимость всех товаров
    const totalSum = cart.reduce((acc, {count, price, discont_price}) => {
    // тернарный оператор, который проверяет условие discont_price
    const itemPrice = discont_price ? discont_price : price;
    return acc + count * itemPrice}, 0)
  return (
    <div className={s.item}>
        <h2>Order details</h2>
        <p className={s.total}>Total: <span>{totalSum.toFixed(2)} Eur</span></p>
        <PhoneInput cart={cart}/>
    </div>
  )
}
