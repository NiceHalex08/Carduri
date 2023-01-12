// Library imports
import { useState } from "react";

//Design imports
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";

const Form = (props) => {
  const { addCard } = props;

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box>
      <TextField
        className="textL"
        id="name"
        label="Name"
        value={name}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <TextField
        className="textL"
        // InputLabelProps={{ className: textL }}
        type="number"
        label="Count"
        id="count"
        name="count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        size="small"
        margin="normal"
      />
      <Button onClick={() => addCard(name, count)}>Add</Button>
    </Box>
  );
};
export default Form;
