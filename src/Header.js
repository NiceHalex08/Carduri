// Library import
import { Link } from "react-router-dom";

//Design imports
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Box>
        <Link to="/Pag1">
          <button className="sideButton">ggg</button>
        </Link>
      </Box>
      <Box>
        <Link to="/Pag2">
          <button className="sideButton">gggg</button>
        </Link>
      </Box>
    </Box>
  );
};
export default Header;
