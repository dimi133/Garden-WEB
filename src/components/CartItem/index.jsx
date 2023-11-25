import React from 'react'
import { useDispatch } from 'react-redux'
import { decr, incr, del } from '../../store/slice/cartSlice';
import s from './style.module.css'
import Container from '../../UI/Container';
import { BsTrash3 } from 'react-icons/bs';



export default function CartItem({id, image, title, price, discont_price, count}) {
    const dispatch = useDispatch();
    const URLIMAGE = "http://localhost:3333/";
  return (
    <>
    <Container>
    <div className={s.item}>
        <div>
            <img src={`${URLIMAGE}${image}`} alt={title} />
        </div>
        <div className={s.cart_title}>
            <p>{title}</p>
            <div className={s.btn}>
                <button  className={s.btnstyle} onClick={() => dispatch(decr(id))} > - </button>
                <p>{count}</p>
                <button className={s.btnstyle} onClick={() => dispatch(incr(id))} > + </button> 
            </div>   
        </div>
        <div className={s.price}>
            {
                discont_price !== null
                ? <p className={s.discont_price}>{(discont_price * count).toFixed(2)} EUR</p>
                : ''
            }
            <p className={discont_price ? s.mark : ''}>{(price * count).toFixed(2)} EUR</p>
            <button onClick={()=>dispatch(del(id))}><BsTrash3 className={s.icon} /></button>
        </div>
        {/* <p>{price} X {count} = {price * count}</p> */}
        
    </div>
    </Container>
    </>
  )
}
