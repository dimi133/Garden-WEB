import React from 'react'
import Container from '../../../UI/Container'
import s from './style.module.css'
import Off from '../../Off'
import CatalogFour from '../../CatalogFour'
import SaleFour from '../../SaleFour'

import { ToastContainer, Slide } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import ScrollButton from '../../ScrollButton'


export default function MainPage() {

  return (
    <div>
        <Container>

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


            <div className={s.sale}>
            <div className={s.text}>
                <p className={s.p1}>Sale</p>
                <p className={s.p2}>New season</p>
                <button className={s.btn}><NavLink to={'sales'} >Sale</NavLink></button>
            </div>
            <div className={s.picture} >
                <img src="/media/mainPic.png" alt="title" />
            </div>
            </div>
            <div className={s.catalog}>
                <div className={s.catalogTop}>
                    <p>Catalog</p>
                    <button><NavLink to={'catalog'} className={s.catalog} >All Categories</NavLink></button>
                    
                </div>
                <div >
                    <CatalogFour />
                </div>
            </div>
            <div>
                <Off />
            </div>
            <div className={s.catalog}>
                <div className={s.catalogTop}>
                    <p>Sale</p>
                    <button><NavLink to={'sales'} >All sales</NavLink></button>
                </div>
                <div>
                    <SaleFour />
                </div>
            </div>
            <ScrollButton />
        </Container>
    </div>
  )
}
