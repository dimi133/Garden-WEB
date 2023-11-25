import React from 'react'
import Container from '../../UI/Container'
import s from './style.module.css'

export default function NotFound() {
  return (
    <Container className={s.item}>
        <img src="/media/404.jpeg" alt="" />
    </Container>
  )
}
