import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../store/slice/cartSlice';
import s from './style.module.css'
import { RiArrowGoBackFill } from "react-icons/ri";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../../UI/Container';
import { Link, useNavigate } from 'react-router-dom';

export default function SingleProductItem({id,title, price, discont_price, image, description}) {

    const navigate = useNavigate();
  
    const notify = () => toast.success("Your product in cart >>>" , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  
      const dispatch = useDispatch();
      const URLIMAGE = "http://localhost:3333/";

      const dicountPerc = Math.round((1 - discont_price / price) * 100);
      
    return (
      <Container>
        <div >
            <div className={s.title}>
                <p>{title}</p>
            </div>
            <div className={s.item}>
                <div className={s.image}>
                    <img src={`${URLIMAGE}${image}`} alt={title} />
                </div>
                <div className={s.info}>
                    <div className={s.price}>
                        {
                            discont_price === null
                            ? ''
                            : <p className={s.discont_price}>{discont_price} Eur</p>
                        }
                        <p className={discont_price ? s.mark : ''}>Price: {price} Eur</p>
                        {
                            discont_price === null
                            ? ''
                            : <p>- {dicountPerc}%</p>
                        }
                    </div>
                    <div className={s.btn}>
                        <button onClick={()=>{dispatch(add(id)); notify();}} >Add to cart</button>
                    </div>
                    <div className={s.descp}>
                        <p className={s.p1}>Description</p>
                        <p className={s.p2}>{description}</p>
                        <Link to='#' onClick={() => navigate(-1)} className={s.navigate}>
                            <RiArrowGoBackFill />  Back
                        </Link>
                    </div>
                </div>
            </div>
            
            
            <div>
           
            </div>
            
            
    </div>
      </Container>
  )
}
