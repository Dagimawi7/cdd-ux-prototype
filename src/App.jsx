import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Housing from './pages/Housing';
import Permits from './pages/Permits';
import Zoning from './pages/Zoning';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/permits" element={<Permits />} />
          <Route path="/zoning" element={<Zoning />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
