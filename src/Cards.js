import { useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import Card from './Card';
const Cards = (props) => {
  const { cards, update1, handleMinus, deleteCards } = props;

  return (
    <Box className='objcontent'>
      <Box className='btnArea'></Box>
      <Box className='cardsArea'>
        {cards.map((element) => (
          <Card
            element={element}
            update1={update1}
            handleMinus={handleMinus}
            deleteCards={deleteCards}
          ></Card>
        ))}
      </Box>
    </Box>
  );
};

export default Cards;
