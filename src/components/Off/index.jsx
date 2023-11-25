import React from 'react'
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css'
import Container from '../../UI/Container';

export default function Off() {

  const notify = () => toast.success("Discount received >>>" , {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  
  
    async function fetchAdd(data){
      const resp = await fetch("http://localhost:3333/sale/send", {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },    
      });
      const newPost = await resp.json()
      console.log(newPost);
  }
  

  const submit = (event) => {
      event.preventDefault();
      const {phone} = event.target;
      // if (phone.value.length === 0) {
      //   alert('Please, enter a phone number');
      //   return;
      // }
      const phoneNumber = /^\+49 \d{2} \d{3} \d{3} \d{2}$/;
    if (!phoneNumber.test(phone.value)) {
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
      const data = {
        phone: phone.value,
      }.lenght !==0;
          fetchAdd(data);
          notify();
          
      event.target.reset();
      }

  return (
    <Container>
      <div className={s.off}>
          <div>
              <img src="/media/goblin.png" alt="" />
          </div>
          <div className={s.textOff}>
              <p className={s.p1}>5% off <br />
              <span className={s.p2}>on the first order</span></p>
              <form onSubmit={submit}>
                <InputMask 
                  mask="+4\9 99 999 999 99" 
                  maskChar=" " 
                  placeholder='Phone number' 
                  name='phone'
                  />
                  <button type='submit' >Get a discount</button>
              </form>
          </div>
      </div>
    </Container>
  )
}
