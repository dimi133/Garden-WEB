import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import s from './style.module.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clear } from '../../store/slice/cartSlice';
import { useDispatch } from 'react-redux';

export default function PhoneInput({cart}) {

const [phone, setPhone] = useState();

const notify = () => toast.success("Order complited >>>" , {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });


  const dispatch = useDispatch()

  async function fetchAdd(data){
    const resp = await fetch("http://localhost:3333/order/send", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },    
    });
    const newPost = await resp.json()
    console.log(newPost);
    if(newPost.status === "OK"){
      dispatch(clear());
      setPhone('');
    }
}

const submit = (event) => {
    event.preventDefault();
    // const {phone} = event.target;
    const phoneNumberValue = event.target.phone.value;
    // if (phone.value.length === 0) {
    //   alert('Please, enter a phone number');
    //   return;
    // }
    const phoneNumber = /^\+49 \d{2} \d{3} \d{3} \d{2}$/;
    if (!phoneNumber.test(phoneNumberValue)) {
      toast.error("Error! Please, enter a valid phone number!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return; 
    }
    if(cart.length === 0){
      toast.error("Error! You have no items in your cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return; 
    }
    const data = {
      phone: phoneNumberValue
    };
    console.log(data)
        fetchAdd(data);
        notify();
    event.target.reset();
    }

  return (
    <>
    <form onSubmit={submit}>
      <div className={s.phone}>
          <InputMask 
            mask="+4\9 99 999 999 99" 
            maskChar=" " 
            placeholder='Phone number' 
            name='phone'
            // defaultValue={phone}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}/>
              {/* {(inputProps)=>(<input {...inputProps} name='phone'/>)} */}
          {/* </InputMask> */}
      </div>
      <div className={s.btn}>
          <button type="submit">Order</button>
      </div>
    </form>
    </>
    
  )
}
