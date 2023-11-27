import React from 'react'
import { useSelector } from 'react-redux';
import Container from '../../../UI/Container';
import ProductItem from '../../ProductItem';
import { useParams } from 'react-router-dom';
import s from './style.module.css'
import ProductsFilters from '../../ProductsFilters';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import ScrollButton from '../../ScrollButton';

export default function CategoryProductPage() {
  const {id} = useParams();

  const navigate = useNavigate();


  const products = useSelector(({allProducts}) => allProducts.list);
  const categories = useSelector(({category}) => category.list)

    const category = categories.find(categories => categories.id === +id)
    const result = products.filter(product => product.categoryId === +id)

  return (
    <Container>
        
        <ProductsFilters showCheckbox={true}/>
        <Link to='#' onClick={() => navigate(-1)} className={s.navigate}>
          <RiArrowGoBackFill />  Back
        </Link>
        {category 
          ? <h2>{category.title} </h2>
          : [<h2>'Not found'</h2>,
          <img src="/media/oops.png" alt="OOPS"/>
      
      ]}
        
        <div className={s.item}>
            { 
              
              result
                .filter(({show}) => Object.values(show).every(elem => elem))
                .map(item => <ProductItem key={item.id} {...item} />)
            }
        </div>
        <div className={s.button}>
          
        </div>
        <ScrollButton />
    </Container>
  )
}
