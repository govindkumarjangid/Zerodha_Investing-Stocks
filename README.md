# Zerodha Clone - Trading and Investing Platform

A full-stack web application that replicates the core functionality and user interface of Zerodha, India's leading stockbroker. This project includes a marketing frontend and a fully functional trading dashboard.

## 🚀 Features

### Frontend (Landing Page)
* **Home:** Informational landing page highlighting features.
* **Products:** Overview of trading platforms (Kite, Console, Coin, etc.).
* **Pricing:** Detailed brokerage charges and fee structure.
* **About & Support:** Company information, team, and a support ticketing system.
* **Open Account / Signup:** User registration flow.

### Dashboard (Trading App)
* **Summary & Dashboard:** Overview of equity, margins, and holdings.
* **Watchlist:** Track favorite stocks in real-time.
* **Orders:** View pending, executed, and rejected orders.
* **Holdings & Positions:** Track long-term investments and short-term trades.
* **Buy/Sell Action Window:** Place market/limit orders.
* **Funds:** View available margins and add/withdraw funds.
* **Charts:** Visual representation of portfolio and market trends (Doughnut, Vertical Graphs).

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS / Vanilla CSS, React Router
* **Backend:** Node.js, Express.js (Assumed based on full-stack architecture)
* **Database:** MongoDB (or preferred DB for storing users, orders, and holdings)
* **Charts:** Chart.js / Recharts (for Dashboard visualizations)

## 📁 Project Structure

```text
Zerodha_Investing-Stocks/
├── backend/                 # Node.js + Express API Backend
│   ├── configs/             # Database connection setup
│   ├── controllers/         # Request handlers (Holding, Order, Position, User)
│   ├── middlware/           # Custom middlewares (e.g., Auth protection)
│   ├── models/              # Mongoose database schemas
│   ├── routes/              # Express API route definitions
│   └── index.js             # Main server entry point
└── frontend/                # React + Vite Frontend App
    ├── public/              # Static assets (images, SVGs)
    ├── src/
    │   ├── dashboard/       # Main Trading Dashboard App
    │   │   ├── components/  # Dashboard UI components (Holdings, Orders, Charts)
    │   │   ├── data/        # Mock data / static configurations
    │   │   ├── UI/          # Reusable UI components & Skeletons
    │   ├── landingpage/     # Marketing & Informational Website
    │   │   ├── about/       # About page components
    │   │   ├── home/        # Home/Landing page components
    │   │   ├── pricing/     # Pricing page components
    │   │   ├── products/    # Products page components
    │   │   ├── signup/      # Authentication pages
    │   │   ├── support/     # Support portal components
    │   │   └── UI/          # Reusable landing page UI components (Navbar, Footer)
    │   ├── context/         # React Context for state management
    │   ├── lib/             # Utility functions (Axios instance)
    │   ├── App.jsx          # App root & Routing setup
    │   └── main.jsx         # React application entry point
```

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Zerodha_Investing-Stocks
   ```

2. **Setup the Backend:**
   ```bash
   cd backend
   npm install
   # Create a .env file and add your MongoDB URI and PORT
   npm start
   ```

3. **Setup the Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Open the `localhost` URL provided by Vite in your browser to view the application.

## 📝 License

This project is for educational purposes only.
