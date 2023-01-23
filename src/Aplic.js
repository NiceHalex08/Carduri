// Library imports
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Internal imports
import Cards from "./Cards";
import Header from "./Header";
import Form from "./Form";
import SimpleSnackbar from "./SnakBar";

//Design imports
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const Aplic = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const addCard = (name, count) => {
    setCards([...cards, { id: uuidv4(), name: name, count: count }]);
  };
  const update1 = (id) => {
    let newArr = [...cards];
    newArr.map((el) => {
      if (el.id === id) {
        el.count++;

        showMessage(`Cantitatea noua este de: ${el.count}`);
      }
      return el;
    });

    setCards(newArr);
  };

  const handleMinus = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        if (card.count > 0) {
          showMessage(`Cantitatea noua este de: ${card.count - 1}`);
          return { ...card, count: card.count - 1 };
        }
      }
      return card;
    });
    setCards(newCards);
  };

  const deleteCards = (id) => {
    const card = cards.find((card) => card.id === id);
    setCards(cards.filter((cards) => cards.id !== id));
    showMessage(`Ati sters cardul: ${card.name}`);
  };

  const showMessage = (message) => {
    setIsOpen(true);
    setMessage(message);
  };

  return (
    <Box>
      <Typography variant="h1" component=""></Typography>
      <Box className="stiky">
        <Box className="header">
          <Header />
        </Box>
      </Box>
      <Box className="center">
        <Box className="Sidebar">
          <Form addCard={addCard} />
        </Box>
        <Box className="main">
          <Cards
            cards={cards}
            update1={update1}
            handleMinus={handleMinus}
            deleteCards={deleteCards}
          />
        </Box>
      </Box>
      <Box className="footer" />
      {
        <SimpleSnackbar
          message={message}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      }
    </Box>
  );
};
export default Aplic;
