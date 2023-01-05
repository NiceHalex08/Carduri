import { Button, TextField } from '@mui/material';
import { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Card = (props) => {
  const { element, update1, handleMinus, deleteCards } = props;
  const [value, setValue] = useState();
  const [isInput, setIsInput] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSave = () => {
    element.name = value;
    let get = document.getElementById(element.id);
    get.innerHTML = value;
  };
  return (
    
    <div className='obj'>
      <p id='ename'>
        <p>
          name:<label id={element.id}>{element.name}</label>
          <Button fontSize="small" startIcon={<EditIcon/>}  onClick={() => setIsInput(!isInput)}></Button>
          {isInput ? (
            <div>
         
              <TextField
  id="input"
  label="New Name"
  value={value}
  onChange={onChange}
  size="small"
  margin='normal'
/>

              <Button startIcon={<SaveIcon/>} onClick={onSave}></Button>
            </div>
          ) : (
            <div>{value}</div>
          )}
        </p>
      </p>
      <p>count:{element.count}</p>
    
      <Button startIcon={<AddCircleIcon/>} sx={{margin:0.5, backgroundColor:"skyblue"}} onClick={() => update1(element.id)}></Button>
      <Button startIcon={<RemoveCircleIcon/>} sx={{margin:0.5, backgroundColor:"skyblue"}} onClick={() => handleMinus(element.id)}></Button>
      <Button startIcon={<DeleteIcon/>} sx={{margin:0.5, backgroundColor:"skyblue"}} onClick={() => deleteCards(element.id)}></Button>
    </div>
  );
};
export default Card;
