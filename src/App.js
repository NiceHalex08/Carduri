import Cards from './Cards';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pag1 from './Pag1';
import Aplic from './Aplic';
import Pag2 from './Pag2';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path='/' element={<Aplic />} />
          <Route path='/Pag1' element={<Pag1 />} />
          <Route path='/Pag2' element={<Pag2 />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
