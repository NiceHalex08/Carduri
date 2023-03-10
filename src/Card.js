// Library imports
import { useState } from "react";

//Design imports
import { Button, TextField, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/material";

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
    <Box className="obj">
      <Box id="ename">
        <Typography>Name: {element.name}</Typography>

        <Button
          fontSize="small"
          startIcon={<EditIcon />}
          onClick={() => setIsInput(!isInput)}
        />
        {isInput ? (
          <Box>
            <TextField
              id="input"
              label="New Name"
              value={value}
              onChange={onChange}
              size="small"
              margin="normal"
            />

            <Button startIcon={<SaveIcon />} onClick={onSave}></Button>
          </Box>
        ) : (
          <Box>{value}</Box>
        )}
      </Box>

      <p>count:{element.count}</p>

      <Button
        startIcon={<AddCircleIcon />}
        sx={{ margin: 0.5, backgroundColor: "skyblue" }}
        onClick={() => update1(element.id)}
      ></Button>
      <Button
        startIcon={<RemoveCircleIcon />}
        sx={{ margin: 0.5, backgroundColor: "skyblue" }}
        onClick={() => handleMinus(element.id)}
      ></Button>
      <Button
        startIcon={<DeleteIcon />}
        sx={{ margin: 0.5, backgroundColor: "skyblue" }}
        onClick={() => deleteCards(element.id)}
      />
    </Box>
  );
};
export default Card;
