import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem';
import s from './style.module.css'
import Container from '../../UI/Container';
import { ToastContainer, Slide } from 'react-toastify';
import ProductsFilters from '../ProductsFilters';
import ScrollButton from '../ScrollButton';

export default function ProductsList() {

    const { status, list } = useSelector(({allProducts}) => allProducts);
    
  return (
    <Container>
      <ToastContainer position="top-right"
        autoClose={2000}
        transition={Slide}
        /> 
      <ProductsFilters showCheckbox={true}/>

        {
            status === 'ready'
            ? <div className={s.item}>
            {
                list
                  .filter(({show}) => Object.values(show).every(elem => elem))
                  .map(item => <ProductItem key={item.id} {...item} /> )
            }
            
        </div>
        : status === 'error'
        ? <h2>Ошибка загрузки</h2>
        : status === 'loading'
        ? <h2>Данный загружаются</h2>
        : ''
        }

        <ScrollButton />
    </Container>
  )
}
