<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
</div>

<h1 align="center">Agrolink AI 🌱</h1>

<p align="center">
  <strong>A Smart Agriculture Marketplace for Small Farmers</strong><br>
  Empowering farmers to connect directly with conscious buyers, ensuring fair prices, transparent logistics, and AI-driven market predictions.
</p>

---

## 📖 Overview

**Agrolink AI** is a comprehensive full-stack digital platform designed to bypass agricultural intermediaries. By enabling direct selling, the platform significantly improves farmers' income and profitability while providing buyers with fresh, traceable local produce at fair market values.

Featuring dynamic role-based dashboards, integrated shopping carts, and a scalable Node.js backend alongside a Python Machine Learning engine, Agrolink AI is built for the future of rural commerce.

## ✨ Key Features

- 🧑‍🌾 **Role-Based Access**: Specialized interfaces for **Farmers** (to manage inventory, track listings) and **Buyers** (to browse the marketplace and add items to carts).
- 🛒 **Dynamic Shopping Cart**: A fully functional, state-driven cart system that calculates orders in Real-time (₹).
- 📈 **AI Market Predictions**: (Developing) Integrates a dedicated Python Flask service to forecast crop prices based on data-driven trends.
- 💳 **Secure Transactions**: Configured architecture ready to integrate UPI and online payment APIs.
- 📱 **Responsive Design**: A stunning, modern, and highly accessible user interface built ground-up with Tailwind CSS.

## 🛠️ Technology Stack

The project utilizes a modern decoupled micro-service architecture:

* **Frontend Client**: React (Vite), Tailwind CSS v3, React Router
* **Backend API**: Node.js, Express.js, MongoDB (Mongoose)
* **AI Engine**: Python, Flask

## 📂 Project Structure

```text
agrolink-ai/
├── client/           # React Frontend App
│   ├── src/          
│   │   ├── components/ # Reusable UI pieces (Navbar, ProductCard)
│   │   ├── context/    # Global State (ShopContext)
│   │   ├── pages/      # Route screens (Home, Dashboard, Cart, Auth)
│   │   └── ...
├── server/           # Express Backend API
│   ├── config/       # MongoDB Connection logic
│   ├── controllers/  # API Route Handlers
│   ├── models/       # Mongoose Schemas (Product, User)
│   └── routes/       # API Endpoint Definitions
└── ai/               # Python Prediction Microservice
    ├── api.py        # Flask Sub-Server
    └── model.py      # ML PricePredictor Class
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites
- [Node.js](https://nodejs.org/en/) & npm
- [Python 3.x](https://www.python.org/)
- MongoDB (Optional, the server has soft-fail measures to run without it)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/agrolink-ai.git
cd agrolink-ai
```

**2. Setup Frontend (`client`)**
```bash
cd client
npm install
npm run dev
```

**3. Setup Backend (`server`)**
Open a new terminal window:
```bash
cd server
npm install
npm start
```

**4. Setup AI Engine (`ai`)**
Open a new terminal window:
```bash
cd ai
python -m pip install flask
python api.py
```

### 🔐 Testing Roles Locally
Our mocked UI allows you to test roles natively before wiring up strict DB Auth:
- **Farmer Login**: Use `farmer@sell.com` or `framer@sell.com` to access the Farmer Dashboard.
- **Buyer Login**: Use any other email (e.g. `buyer@gmail.com`) to unlock cart functionalities.

---

> Designed & Built with ❤️ for the Agriculture Sector.
