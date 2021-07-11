import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' >
            <video autoPlay loop muted
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;