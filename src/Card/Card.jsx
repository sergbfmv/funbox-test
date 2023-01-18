import { useState } from 'react';
import './Card.css'

function Card({ title, count, gift, weight, description, disabled }) {
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)


  function handleClick() {
    if (active) {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  function hoverOn() {
    setHover(true)
  }

  function hoverOff() {
    setHover(false)
  }

  function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if ((n === 1) || (n === 0)) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }


  return (
    <>
      <div className="card">
        <div className={(disabled ? 'card__container card__container_disabled' : '') || (active ? 'card__container card__container_active' : 'card__container')} onClick={handleClick} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          {active && hover ? <p className='card__paragpraph card__paragpraph_cancel'>Котэ не одобряет?</p> : <p className='card__paragpraph'>Сказочное заморское явство</p>}
          <h2 className='card__title'>Нямушка</h2>
          <h3 className='card__text'>{title}</h3>
          <p className='card__portion'>{count} порций</p>
          <p className='card__portion'>{gift} {getNoun(gift, 'мышь', 'мыши', 'мышей')} в подарок</p>
          <div className={(disabled ? 'card__circle card__circle_disabled' : '') || (active ? 'card__circle card__circle_active' : 'card__circle')}><p className='card__circle-text'>{weight}</p><p className='span'>кг</p></div>
        </div>
        {disabled && <p className='card__link-text_disabled'>Печалька, с {title} закончился.</p>}
        {!disabled && <p className='card__link-text'>{active ? <p>{description}</p> : <p className='card__link-text'>Чего сидишь? Порадуй котэ, <a className='card__link' href='#' onClick={handleClick}>купи.</a></p>}</p>}
      </div>

    </>
  )
}

export default Card;