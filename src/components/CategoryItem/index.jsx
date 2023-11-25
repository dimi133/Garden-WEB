import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../UI/Container';
import s from './style.module.css'

export default function CategoryItem({category}) {
    
    const URLIMAGE = "http://localhost:3333/";
  return (
    <Container>
        
        <div className={s.item}>
            <div className={s.pics}>
                <Link  to={`/categories/${category.id}`} >
                  <img src={`${URLIMAGE}${category.image}`} alt="ittle" />
                </Link>
            </div>
      
            <p>{category.title}</p>
            
        </div>
    </Container>
  )
}
