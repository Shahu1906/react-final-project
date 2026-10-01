import React, { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-root">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <div className="hero-section">
              <h1 className="company-title">Paradise Nursery</h1>
              <p className="tagline">Where Green Meets Serenity</p>
              <button
                className="get-started-btn"
                onClick={handleGetStartedClick}
                aria-label="Get Started and browse plants"
              >
                Get Started
              </button>
            </div>
            <AboutUs />
          </div>
        </div>
      ) : (
        <div className="product-list-container">
          <ProductList onHomeClick={handleHomeClick} />
        </div>
      )}
    </div>
  );
}

export default App;
