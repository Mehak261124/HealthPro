import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IVFResultCard from './components/IVFResultCard';
import Main from './components/Main'; // Import Main component
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/result" element={<IVFResultCard />} /> {/* IVF Result page */}
        </Routes>
    </Router>
  );
}

export default App;
