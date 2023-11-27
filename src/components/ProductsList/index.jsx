import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem';
import s from './style.module.css'
import Container from '../../UI/Container';
import { ToastContainer, Slide } from 'react-toastify';
import ProductsFilters from '../ProductsFilters';
import ScrollButton from '../ScrollButton';

export default function ProductsList() {

    const { list } = useSelector(({allProducts}) => allProducts);
    
  return (
    <Container>
      <ToastContainer position="top-right"
        autoClose={2000}
        transition={Slide}
        /> 
      <ProductsFilters showCheckbox={true}/>

     <div className={s.item}>
            {list
                  .filter(({show}) => Object.values(show).every(elem => elem))
                  .length > 0 ? (
                list
                  .filter(({show}) => Object.values(show).every(elem => elem))
                  .map(item => <ProductItem key={item.id} {...item} /> )
            )   : (
              <div className={s.notFound}>
                <h2>Product not found</h2>
                <img src="/media/oops.png" alt="OOPS" />
              </div>
            )}
            
      </div>


        <ScrollButton />
    </Container>
  )
}
