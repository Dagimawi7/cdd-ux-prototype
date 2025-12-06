import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Housing = React.lazy(() => import('./pages/Housing'));
const Permits = React.lazy(() => import('./pages/Permits'));
const Zoning = React.lazy(() => import('./pages/Zoning'));
const Events = React.lazy(() => import('./pages/Events'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="/permits" element={<Permits />} />
            <Route path="/zoning" element={<Zoning />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
