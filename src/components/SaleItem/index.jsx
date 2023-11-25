import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../store/slice/cartSlice';
import s from './style.module.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function SaleItem({id,title, price, discont_price, image}) {

    const notify = () => toast.success("Your product in cart >>>" , {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    const dispatch = useDispatch();
    const URLIMAGE = "http://localhost:3333/";

  return (
    
    <div className={s.item}>
        
        <div className={s.picture}>
            <Link  to={`/allproducts/${id}`} >
            <img src={`${URLIMAGE}${image}`} alt={title} />
            </Link>
            <button onClick={()=>{dispatch(add(id)); notify();}} className={s.btn}>Add to cart</button>
        </div>
        
        <div>
            <p className={discont_price ? s.mark : ''}>Price: {price} Eur</p>
            {
                discont_price === null
                ? ''
                : <p className={s.discont_price}>{discont_price} Eur</p>
            }
        </div>
        
        <p>{title}</p>
        
    </div>
  )
}
