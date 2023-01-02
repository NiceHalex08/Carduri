import { TextField } from '@mui/material';
import { useState } from 'react';

const Form = (props) => {
  const { addCard } = props;

  const [name, setName] = useState();
  const [count, setCount] = useState();
  const handleChange = (event) => {
    setName(event.target.value);}

  return (
    <div>   
      <TextField
  id="name"
  label="Name"
  value={name}
  onChange={handleChange}
  size="small"
  margin='normal'
/>
<TextField
   type='number'
   label="Count"
   id='count'
   name='count'
   value={count}
   onChange={(e) => setCount(e.target.value)}
   size="small"
   margin='normal'
/>
<button onClick={() => addCard(name, count)}>Add</button>
</div>

  );
};
export default Form;
