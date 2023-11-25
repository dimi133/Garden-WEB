import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'
import Container from '../../UI/Container'
import { useCart } from '../../hooks/useCart';
import { FaBars } from "react-icons/fa6";


export default function Nav() {

  const className = ({isActive}) => isActive ? s.active : '';

  const [active, setActive] = useState(false);

  const cartItems = useCart();
  const totalItems = cartItems.length;
  return (
    <Container>
    <nav
      onClick={()=> setActive(false)} 
      className={[s.links, active ? s.active : ''].join(' ')}
    >
      <div className={s.div1}>
        <img src="/media/image 1.png" alt="Logo" />
        <NavLink to={'catalog'} className={s.catalog} >Catalog</NavLink>
      </div>
      <div>  </div>
      <div className={s.mainlinks}>
        <NavLink to={''} className={className}>Main Page</NavLink>
        <NavLink to={'allproducts'} className={className}>All products</NavLink>
        <NavLink to={'sales'} className={className}>All sales</NavLink>
      </div>
      <div className={s.cart}>
        <NavLink to={'card'}><img src="/media/bag_icon.png" alt="CARD" /></NavLink>
        {
          totalItems > 0 && (
            <div className={s.itemCount}>{totalItems}</div>
          )
        }
      </div>
      
        

    </nav>
    <button 
      className={s.navBtn}
      onClick={()=>setActive(!active)}><FaBars className={s.icon}/></button>
    </Container>  
  )
}
