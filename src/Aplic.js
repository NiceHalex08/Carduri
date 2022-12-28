import Cards from './Cards';
import Header from './Header';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import SnakBar from './SnakBar';

const Aplic = () => {
  const [cards, setCards] = useState([{}]);
  const addCard = (name, count) => {
    setCards([...cards, { id: uuidv4(), name: name, count: count }]);
  };
  const update1 = (id) => {
    <SnakBar />
    let newArr = [...cards];
    newArr.map((el) => {
      if (el.id === id) {
        el.count++;
        // alert('Cantitate: ' + el.count);
      }
      return el;
    });
  
    setCards(newArr);
    
  };

  const handleMinus = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        if (card.count > 0) return { ...card, count: card.count - 1 };
        else {
          deleteCards(id);
        
        }
      }
      return card;
    });
    setCards(newCards);
  };
  const deleteCards = (id) => {
    setCards(cards.filter((cards) => cards.id !== id));
  };
  return (
    <div>
      <div className='stiky'>
        <div className='header'>
          <Header />
        </div>
      </div>
      <div className='center'>
        <div class='Sidebar'>
          <Form addCard={addCard} />
        </div>
        <div className='main'>
          <Cards
            cards={cards}
            update1={update1}
            handleMinus={handleMinus}
            deleteCards={deleteCards}
          />
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
};
export default Aplic;
