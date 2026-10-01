# Paradise Nursery Shopping Application

Paradise Nursery is an elegant, responsive e-commerce web application designed for houseplant enthusiasts. The platform provides an intuitive shopping experience where users can discover diverse collections of houseplants categorized by their unique benefits, manage their shopping cart, and calculate order costs seamlessly.

---

## Features

- **Landing Page**: Immersive full-screen background visual with company branding, engaging tagline, "Get Started" call-to-action button, and an integrated "About Us" section detailing the nursery's mission, story, offerings, and core values.
- **Categorized Plant Listing**: 18 curated houseplants organized into 3 distinct botanical categories:
  - *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera)
  - *Aromatic Fragrant Plants* (Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Hyacinth)
  - *Insect Repellent Plants* (Oregano, Marigold, Citronella, Catnip, Basil, Lemongrass)
- **Interactive Add to Cart**: One-click plant addition to the shopping cart with immediate visual feedback.
- **Persistent Disabled State**: "Add to Cart" button transforms to "Added to Cart" and becomes disabled when a plant is in the cart. The disabled state persists across navigation and automatically re-enables when the plant is removed from the cart.
- **Dynamic Cart Count Badge**: Sticky top navigation bar with a live circular badge displaying the total quantity of items in the cart across all pages.
- **Seamless Navigation**: Integrated navbar allowing effortless switching between the Landing page ("Home"), Plant catalog ("Plants"), and Cart page ("Cart").
- **Cart Management**:
  - Quantity increment (`+`) and decrement (`-`) controls for each selected plant.
  - Automatic removal when quantity decrements to zero.
  - Quick "Delete" button to instantly remove an item from the cart.
- **Cost Calculations**: Dynamic computation of itemized subtotals and the grand total cart amount, updating instantly with every quantity adjustment.
- **Shopping Flow Actions**:
  - "Continue Shopping" button returning directly to the plant catalog.
  - "Checkout" button triggering a "Coming Soon" prompt.
  - Empty cart placeholder state.

---

## Tech Stack

- **Frontend Library**: React (JavaScript, JSX)
- **Build Tool**: Vite
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`) & `react-redux`
- **Styling**: Pure Modern CSS (Responsive Flexbox and CSS Grid, no external UI frameworks)

---

## Project Structure

```text
paradise-nursery/
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── AboutUs.jsx
    ├── App.css
    ├── App.jsx
    ├── CartItem.css
    ├── CartItem.jsx
    ├── CartSlice.jsx
    ├── ProductList.css
    ├── ProductList.jsx
    ├── index.css
    ├── main.jsx
    └── store.js
```

---

## Setup and Installation Instructions

Follow these steps to run the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<user>/paradise-nursery.git
   cd paradise-nursery
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## Screenshots Placeholder

### 1. Landing Page
*Landing page with immersive background, hero section, and About Us company profile.*
```
[ Landing Page Screenshot Placeholder ]
```

### 2. Product Catalog
*Categorized houseplant grid with plant details, prices, and Add to Cart action buttons.*
```
[ Product Catalog Screenshot Placeholder ]
```

### 3. Shopping Cart View
*Cart overview displaying unit prices, quantity modifiers (+/-), per-item subtotals, grand total, and checkout.*
```
[ Shopping Cart Screenshot Placeholder ]
```
