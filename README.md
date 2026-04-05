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

* `/frontend`: The marketing website and landing pages.
* `/dashboard`: The main trading application interface (Kite clone).
* `/backend`: The REST API server handling user data, orders, and authentication.

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
   npm start
   ```

3. **Setup the Frontend & Dashboard:**
   ```bash
   # Open two new terminals

   # Terminal 1 - For Frontend
   cd frontend
   npm install
   npm run dev

   # Terminal 2 - For Dashboard
   cd dashboard
   npm install
   npm run dev
   ```

4. Open the respective `localhost` URLs provided by Vite in your browser.

## 📝 License

This project is for educational purposes only.
