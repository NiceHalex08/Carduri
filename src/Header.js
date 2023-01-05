import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Box>
      <Box>
        <Link to='/Pag1'>
          <button className='sideButton'>ggg</button>
        </Link>
      </Box>
      <Box>
        <Link to='/Pag2'>
          <button className='sideButton'>gggg</button>
        </Link>
      </Box>
    </Box>
  );
};
export default Header;
