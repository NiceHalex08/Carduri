// SALUT DRAGOS
import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
const Cards = (props) => {
  const { cards, update1, handleMinus, deleteCards } = props;


  return (
    <div className='objcontent'>
      <div className='btnArea'></div>
      <div className='cardsArea'>
        {cards.map((element) => (
          <Card
            element={element}
            update1={update1}
            handleMinus={handleMinus}
            deleteCards={deleteCards}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
