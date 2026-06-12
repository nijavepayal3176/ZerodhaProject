# 🚀 Zerodha Clone - Full Stack Trading Platform

A full-stack **Zerodha-inspired stock trading platform** built using the MERN stack. The project includes a public landing page, an interactive trading dashboard, and a backend REST API connected to MongoDB.

## ✨ Features

* 📈 View stock holdings and positions
* 🛒 Place new buy/sell orders
* 📊 Interactive trading dashboard
* 🔗 REST API integration
* 💾 MongoDB database connectivity
* 🌐 Fully deployed using Render
* 🔄 GitHub integrated CI/CD deployment

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Body-Parser
* CORS

### Tools & Deployment

* Git & GitHub
* Render
* Postman
* Visual Studio Code

## 📂 Project Structure

```text
ZerodhaProject/
├── backend/      # Express.js REST API
├── frontend/     # Landing page (React)
└── dashboard/    # Trading dashboard (React)
```

## 🔗 Live Demo

* **Frontend:** https://zerodhaproject-1.onrender.com
* **Dashboard:** https://zerodhaproject-2.onrender.com
* **Backend API:** https://zerodhaproject-yrms.onrender.com

### Sample API Endpoints

* `GET /allHoldings`
* `GET /allPositions`
* `POST /newOrder`

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nijavepayal3176/ZerodhaProject.git
   ```

2. Install dependencies for each module:

   ```bash
   cd frontend && npm install
   cd ../dashboard && npm install
   cd ../backend && npm install
   ```

3. Configure environment variables in `backend/.env`:

   ```
   MONGO_URL=your_mongodb_connection_string
   PORT=3002
   ```

4. Start the applications:

   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm start

   # Dashboard
   cd ../dashboard
   npm start
   ```

## 🎯 Future Enhancements

* User authentication and authorization
* Real-time stock price updates
* Portfolio analytics and charts
* Watchlist and favorites feature
* Order history and transaction management

## 👩‍💻 Author

**Payal Nijave**
B.Tech (Computer Engineering) Student
GitHub: https://github.com/nijavepayal3176
