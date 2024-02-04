import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './navbar/NavBar'
import Home from './components/Home/Home'
import Sell from './components/sell/Sell'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        {/* <Route path="/add" element={<AddItem />} />
        <Route path="/vender" element={<Supplier />} /> */}
      </Routes>
    </Router>
  )
}

export default App
