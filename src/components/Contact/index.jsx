import React from 'react'
import s from './style.module.css'
import Container from '../../UI/Container'
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";


export default function Contact() {
  return (
    <Container>
        <div className={s.info}>
            <div className={s.contact}>
                <h2>Contact</h2>
                <p>+49 999 999 99 99</p>
                <div className={s.links}>
                  <div>
                    <a href="https://www.whatsapp.com/?lang=de"><FaWhatsapp className={s.icon}/></a>
                    <p>WhatsApp</p>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/"><SlSocialInstagram className={s.icon}/></a>
                    <p>Instagram</p>
                  </div>
                </div>
            </div>
            <div className={s.address}>
                <h2>Address</h2>
                <a href="https://www.google.com/maps/place/Linkstra%C3%9Fe+2%2F8.+Etage,+10785+Berlin/@52.5079105,13.3725213,17z/data=!3m1!4b1!4m6!3m5!1s0x47a851cbdd6cfe0f:0xb4b0903f299decf1!8m2!3d52.5079105!4d13.3751016!16s%2Fg%2F11pvcv3309?entry=ttu">Linkstraẞe 2, 8 OG, 10785, Berlin, Deutschland</a>
                <p className={s.p1}>Working Hours:</p>
                <p className={s.p2}>24 hours a day</p>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4097370236505!2d13.372515112474897!3d52.507923571941426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1697825121812!5m2!1sru!2sde" width="1400" height="525" style={{marginRight: 'em'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title='1'></iframe>
    </Container>
  )
}
