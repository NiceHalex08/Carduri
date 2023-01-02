import { Button } from '@mui/material';
import { useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = (props) => {
  const { element, update1, handleMinus, deleteCards } = props;
  useEffect(() => {
    console.log('Salut');
  }, [handleMinus]);

  return (
    <div className='obj'>
      <p>name:{element.name}</p>
      <p>count:{element.count}</p>
      <Button startIcon={<AddCircleIcon/>} sx={{margin:0.5, backgroundColor:"skyblue"}} onClick={() => update1(element.id)}></Button>
      <Button startIcon={<RemoveCircleIcon/>} sx={{margin:0.5, backgroundColor:"skyblue"}} onClick={() => handleMinus(element.id)}></Button>
      <Button startIcon={<DeleteIcon/>} sx={{margin:0.5, backgroundColor:"skyblue"}} onClick={() => deleteCards(element.id)}></Button>
    </div>
  );
};
export default Card;
