import React from 'react';
import './card.scss';
import user from '../../../assets/icons/user.png';
import group from '../../../assets/icons/group.png';

function Card({card, isActive, setUsage}) {

    function handleCardSelect(){
        setUsage({'usage':card.id})
    }

  return (
        <div className='card' onClick={handleCardSelect}
          style={{ border: isActive ? "2px solid #5A4AD1": "2px solid #e2ebf6" }}>
            <img style={{marginBottom:'0.7rem'}} 
            src={card.id === 1 ? user : group} 
            alt={card.title} height="20rem" width="20rem"/>
            <span className='cardTitle'>{card.title}</span>
            <span className='cardText'>{card.text}</span>
        </div>
  )
}

export default Card