import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import Container from '../../UI/Container';
import SaleItem from '../SaleItem';

export default function SaleFour() {

    const product = useSelector(({allProducts}) => allProducts.list)
    
  return (
    <Container>
        <div className={s.four}>
            {
                product
                    .filter(item => item.discont_price)
                    .map(item => <SaleItem key={item.id} {...item}/>)
                    .slice(0, 4)
            }
        </div>
    </Container>
  )
}
