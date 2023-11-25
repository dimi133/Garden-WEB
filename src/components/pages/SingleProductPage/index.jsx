import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../../UI/Container';
import SingleProductItem from '../../SingleProductItem';


export default function SingleProductPage() {
    const {id} = useParams();
    

    const { list } = useSelector(state => state.allProducts)
    
    // const productId = Number(id); 
    const productId = +id;
    const product = list.find(products => products.id === productId)
    console.log(id)
    if (!product) { 
      return <p>Product not found</p> 
    } 
  return (
    <Container>
      <div>
        <SingleProductItem key={product.id} {...product}/>
      </div>
    </Container>
  )
}
