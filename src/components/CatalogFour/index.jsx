import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../CategoryItem';
import s from './style.module.css'
import Container from '../../UI/Container';

export default function CatalogFour() {

    const category = useSelector(({category}) => category.list)
    const four = category.slice(0, 4);
  return (
    <Container>
    <div className={s.four}>
        {
            four.map(category => <CategoryItem key={category.id} category={category} /> )
        }
    </div>
    </Container>
  )
}
