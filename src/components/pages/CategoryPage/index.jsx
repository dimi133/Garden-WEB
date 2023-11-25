import React from 'react'
import { useSelector } from 'react-redux';
import CategoryItem from '../../CategoryItem';
import Container from '../../../UI/Container';
import s from './style.module.css'
import ScrollButton from '../../ScrollButton';

export default function CategoryPage() {

  const { status, list } = useSelector(({category}) => category);
  return (
      <Container>
        <h2>Categories</h2>
      {
            status === 'ready'
            ? <div className={s.item}>
                {
                  list.map(category => <CategoryItem key={category.id} category={category} /> )
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
