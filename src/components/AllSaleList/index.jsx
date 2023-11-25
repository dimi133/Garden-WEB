import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, Slide } from 'react-toastify';
import s from './style.module.css'
import Container from '../../UI/Container';
import ScrollButton from '../ScrollButton';
import ProductItem from '../ProductItem';
import ProductsFilters from '../ProductsFilters';

export default function AllSaleList() {

    const product = useSelector(({allProducts}) => allProducts.list)

  return (
    <Container>
        <ToastContainer position="top-right"
        autoClose={1000}
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
    
    <ProductsFilters showCheckbox={false}/>
{/* вытаскиваем из всех продуктов, продукты у которых есть скидка */}
    <div className={s.item}>
        {
            product
            .filter(item => item.discont_price)
            .map(item => <ProductItem key={item.id} {...item}/>)
        }
    </div>
    <ScrollButton />
    </Container>
  )
}
