# 🛠️ BuilderMatch

BuilderMatch is a full-stack web application that connects clients to trusted, experienced builders in their area. Users can create accounts, find and save ideal builders, and communicate directly — all within a clean, intuitive interface.

---

## 🌍 Problem

Clients in Kenya and beyond often struggle to find reliable builders. The construction sector is plagued by delays, lack of trust, and limited visibility into a builder’s experience. **BuilderMatch** solves this by offering a transparent, filter-based matchmaking platform that prioritizes safety, quality, and professionalism.

---

## 💡 Solution

BuilderMatch empowers clients to:
- 🔍 Search for builders by **location** and **specialty**
- 🧱 View **experience**, **specializations**, and builder profiles
- 💾 **Save builders** to their dashboard
- 📩 **Contact builders** directly via in-app messaging
- 📊 Monitor builder trends via **interactive charts**

---

## ⚙️ Tech Stack

### Frontend
- **React.js**
- React Router
- CSS Modules
- Chart.js (for analytics)
- `fetch()` API for backend integration

### Backend
- **Node.js** + **Express**
- **PostgreSQL**
- JWT Authentication
- Bcrypt for password hashing

---

## 🚀 Features

| Feature                    | Description                                              |
|----------------------------|----------------------------------------------------------|
| 🧑‍💼 User Authentication   | Sign up, log in, secure access with JWT                   |
| 🏗️ Matchmaker              | Find builders based on location and specialty             |
| 💾 Saved Builders          | Add builders to personal dashboard                       |
| 💬 Messaging               | Contact saved builders through a secure modal            |
| 📊 Analytics               | View top builders by popularity & experience             |
| 🎨 Clean UI                | Mobile-first design, white background theme              |

---

## 📸 Screenshots

> Add screenshots here in a future update (Home page, Matching form, Dashboard, etc.)

---

## 🛠️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/buildermatch.git
cd buildermatch

2. Install Dependencies
# frontend
cd client
npm install

# backend
cd ../backend
npm install

3. Set up PostgreSQL

Create a database: builder_match

Run the SQL script to create tables (see docs/db-schema.sql)

Create a .env file inside /backend:

DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=builder_match
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRY=1d

4. Run the App
# in backend/
nodemon index.js

# in frontend/
npm run dev

Folder Structure
buildermatch/
│
├── client/          # React frontend
│   ├── components/
│   ├── pages/
│   └── styles/
│
├── backend/         # Node/Express API
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── models/
│
└── assets/          # Images & logos

👥 Team & Roles
Frontend Development – UI, MatchingForm, Dashboard

Backend Development – Auth, Matching API, PostgreSQL setup

UI/UX Design – Styling, responsive layout

Product Management – Demo structure, vision alignment with JaGedo

📈 Future Enhancements
✅ Stripe integration for hiring/payment

✅ Admin panel for builder verification

✅ SMS/email alerts for matched builders

✅ Rating and reviews

🤝 Integration Potential
BuilderMatch is designed for easy integration with JaGedo:

Sync with their builder registry

KYC verification via JaGedo APIs

Expand reach to underserved regions

📄 License
MIT License © 2025 BuilderMatch Team
