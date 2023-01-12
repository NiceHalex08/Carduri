//Internal imports
import "./App.css";
import Card from "./Card";

//Design imports
import { Box } from "@mui/material";

const Cards = (props) => {
  const { cards, update1, handleMinus, deleteCards } = props;

  return (
    <Box className="objcontent">
      <Box className="btnArea"></Box>
      <Box className="cardsArea">
        {cards.map((element) => (
          <Card
            key={element.id}
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
