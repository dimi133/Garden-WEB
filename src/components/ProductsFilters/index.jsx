import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import Container from '../../UI/Container';
import { priceFilter, sale, sortBy } from '../../store/slice/allProductsSlice';
import { useDispatch } from 'react-redux';
// import Select from 'react-select'
import { FaCheck } from "react-icons/fa";
import { nanoid } from 'nanoid';

export default function ProductsFilters({showCheckbox}) {

const id = nanoid();

const [price, setPrice] = useState({min: 0, max: Infinity});
const [isChecked, setIsChecked] = useState(false);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(priceFilter(price));
},[price, dispatch])

const priceHandler = {
    min: value => +value,
    max: value => value === '' ? Infinity : +value
}

    const changePrice = ({target}) => {
    const {name, value} = target;
    setPrice(state => ({...state, [name]: priceHandler[name](value)}))
    console.log(price)
}

    const saleFilter = () => {
        setIsChecked(!isChecked);
        dispatch(sale({ isChecked: !isChecked }));
    }


    const options = [
        {id: 1, value: 1, title: 'Name from A -> Z'},
        {id: 2, value: 2, title: 'Name from Z -> A'},
        {id: 3, value: 3, title: 'Price Low to High'},
        {id: 4, value: 4, title: 'Price High to Low'}
    ] 
    
    // const orderHandler = ({value}) => {
    //     dispatch(sortBy(value));
    // }

    const orderHandler = (event) => {
    dispatch(sortBy(+event.target.value));
    }

  return (
    <Container className={s.container}>
        <div className={s.item}>

            <div className={s.priceFilter}>
            <p>Price</p>
                <input 
                    type="number" 
                    name='min' 
                    placeholder='min' 
                    value={price.min === 0 ? '' : price.min}
                    onChange={changePrice}/>
                <input 
                    type="number" 
                    name='max' 
                    placeholder='max' 
                    value={price.max === Infinity ? '' : price.max}
                    onChange={changePrice}/>
            </div>
            {showCheckbox &&(
            <div className={s.discount}>
                <p>Discounted items</p>
                <input 
                    id={id}
                    type='checkbox'
                    checked={isChecked}
                    onChange={saleFilter} />
                    <label htmlFor={id}><FaCheck className={s.mark}/></label>
            </div>
            )}
            <div className={s.sorted}>
                <p>Sorted</p>
                {/* <Select placeholder='By Default' options={options} onChange={orderHandler} className={s.select}/> */}
                <select onChange={orderHandler} className={s.select} >
                <option defaultValue={''} selected disabled>By Default</option>
                {
                    options.map(elem => (
                        <option key={elem.id} value={elem.value}>{elem.title}</option>
                    ))
                }
             </select>
            </div>
            
        </div>
    </Container>
  )
}
