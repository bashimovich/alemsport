import './App.css'
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';


const Home = lazy(() => import('./pages/Home'));

function App() {

  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Suspense fallback={<div className="suspense-fallback-container"><Spin size="large" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
