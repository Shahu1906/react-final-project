import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?q=80&w=400&auto=format&fit=crop',
        description: 'Produces oxygen at night and filters toxins like formaldehyde and benzene.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484437-31820e39ec14?q=80&w=400&auto=format&fit=crop',
        description: 'Easy to grow and extremely effective at cleansing indoor pollutants.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=400&auto=format&fit=crop',
        description: 'Elegant white blooms that break down harmful airborne chemical vapors.',
        cost: '$18',
      },
      {
        name: 'Boston Fern',
        image: 'https://images.unsplash.com/photo-1628172901968-3e47e335272a?q=80&w=400&auto=format&fit=crop',
        description: 'Lush feathery fronds that naturally restore moisture to indoor air.',
        cost: '$16',
      },
      {
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=400&auto=format&fit=crop',
        description: 'Broad, glossy green leaves that excel at purifying ambient carbon monoxide.',
        cost: '$22',
      },
      {
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?q=80&w=400&auto=format&fit=crop',
        description: 'Succulent purifier known for soothing gel and purifying room air.',
        cost: '$14',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=400&auto=format&fit=crop',
        description: 'Calming floral aroma that promotes deep rest, relaxation, and serenity.',
        cost: '$15',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=400&auto=format&fit=crop',
        description: 'Sweet, intoxicating scent with delicate starry blossoms.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=400&auto=format&fit=crop',
        description: 'Invigorating woody fragrance that stimulates focus and culinary flair.',
        cost: '$12',
      },
      {
        name: 'Mint',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=400&auto=format&fit=crop',
        description: 'Crisp and refreshing menthol aroma that revitalizes any room.',
        cost: '$10',
      },
      {
        name: 'Lemon Balm',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400&auto=format&fit=crop',
        description: 'Zesty citrus scent renowned for uplifting mood and refreshing the spirit.',
        cost: '$14',
      },
      {
        name: 'Hyacinth',
        image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=400&auto=format&fit=crop',
        description: 'Rich, heady spring blossoms that fill your home with natural perfume.',
        cost: '$16',
      },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      {
        name: 'Oregano',
        image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=400&auto=format&fit=crop',
        description: 'Potent aromatic oils that naturally deter garden pests and mosquitoes.',
        cost: '$11',
      },
      {
        name: 'Marigold',
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=400&auto=format&fit=crop',
        description: 'Bright golden blooms containing natural pyrethrum to repel insects.',
        cost: '$13',
      },
      {
        name: 'Citronella',
        image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?q=80&w=400&auto=format&fit=crop',
        description: 'Classic crisp citrus scent famous for deterring biting insects.',
        cost: '$17',
      },
      {
        name: 'Catnip',
        image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=400&auto=format&fit=crop',
        description: 'Contains nepetalactone, a powerful natural repellent against mosquitoes.',
        cost: '$12',
      },
      {
        name: 'Basil',
        image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?q=80&w=400&auto=format&fit=crop',
        description: 'Fragrant culinary herb whose natural oils effectively repel house flies.',
        cost: '$10',
      },
      {
        name: 'Lemongrass',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&auto=format&fit=crop',
        description: 'Tall aromatic grass bursting with natural citronella compounds.',
        cost: '$15',
      },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Dynamic total count badge: sum of all item quantities in cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check if plant is already added to cart to disable button
  const isInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="product-page-root">
      {/* Sticky Top Navbar shared between Product Listing and Cart */}
      <header className="navbar">
        <div
          className="nav-brand"
          onClick={onHomeClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onHomeClick();
          }}
          aria-label="Paradise Nursery Home"
        >
          <span className="brand-name">Paradise Nursery</span>
          <span className="brand-tagline">Where Green Meets Serenity</span>
        </div>

        <nav className="nav-links">
          <button
            className="nav-link"
            onClick={onHomeClick}
            aria-label="Return to Home landing page"
          >
            Home
          </button>
          <button
            className={`nav-link ${!showCart ? 'active' : ''}`}
            onClick={() => setShowCart(false)}
            aria-label="View Plants listing"
          >
            Plants
          </button>
          <button
            className={`nav-link cart-nav-button ${showCart ? 'active' : ''}`}
            onClick={() => setShowCart(true)}
            aria-label="Shopping cart"
          >
            <svg
              className="cart-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="cart-count-badge" aria-live="polite">
              {totalQuantity}
            </span>
          </button>
        </nav>
      </header>

      {/* Main Content: Either Cart View or Plants Grid */}
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <main className="products-main-content">
          {plantsArray.map((categoryObj) => (
            <section
              className="category-section"
              key={categoryObj.category}
              aria-labelledby={`category-${categoryObj.category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <h2
                className="category-title"
                id={`category-${categoryObj.category.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {categoryObj.category}
              </h2>

              <div className="plant-grid">
                {categoryObj.plants.map((plant) => {
                  const added = isInCart(plant.name);
                  return (
                    <article className="plant-card" key={plant.name}>
                      <div className="plant-card-img-container">
                        <img
                          className="plant-card-img"
                          src={plant.image}
                          alt={plant.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="plant-card-body">
                        <h3 className="plant-card-title">{plant.name}</h3>
                        <p className="plant-card-desc">{plant.description}</p>
                        <div className="plant-card-footer">
                          <span className="plant-card-price">{plant.cost}</span>
                          <button
                            className="add-to-cart-btn"
                            disabled={added}
                            onClick={() => handleAddToCart(plant)}
                            aria-label={
                              added
                                ? `${plant.name} added to cart`
                                : `Add ${plant.name} to cart`
                            }
                          >
                            {added ? 'Added to Cart' : 'Add to Cart'}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
