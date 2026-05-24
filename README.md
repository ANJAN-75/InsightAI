# 🚀 InsightAI

InsightAI is an AI-powered chat application that enables users to interact with an intelligent assistant in real time. Users can ask questions, get AI-generated responses, learn concepts, brainstorm ideas, and improve productivity through a smooth chat experience.

---

## ✨ Features

- 💬 Real-time AI conversations
- 🔐 Authentication & Authorization
- 🍪 Secure cookie handling
- 📧 Email verification system
- 🧠 AI-powered responses
- 💾 Chat history storage
- ⚡ Fast and responsive interface
- 📱 Mobile-friendly design
- 🌙 Clean modern UI

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security
- JWT
- Bcrypt
- Cookie Parser

### Additional Tools
- Nodemailer
- dotenv

---

## 📂 Project Structure

```bash
InsightAI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── .env
│   └── package.json
│
├── README.md
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/InsightAI.git
```

Move into project directory:

```bash
cd InsightAI
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

## Backend `.env`

Create a `.env` file inside the `backend` folder:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

AI_API_KEY=your_ai_api_key

NODE_ENV=development
```

---

## Frontend `.env`

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api

VITE_APP_NAME=InsightAI
```

---

# 📦 package.json Scripts

### Backend

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}
```

### Frontend

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

# ▶️ Running the Application

Start backend server:

```bash
cd backend
npm run dev
```

Open another terminal and start frontend:

```bash
cd frontend
npm run dev
```

Application should run at:

```bash
Frontend → http://localhost:5173

Backend → http://localhost:5000
```

---

# 📸 Screenshots

Add screenshots here:

- Login Page
- Register Page
- AI Chat Interface
- Dashboard

---

# 🎯 Future Improvements

- 🎤 Voice assistant support
- 🖼 AI image generation
- 📄 File upload support
- 📥 Export chats
- 🤖 Multiple AI models
- 🧠 Personalized AI memory

---

# 🤝 Contributing

Contributions are welcome.

1. Fork repository

2. Create branch:

```bash
git checkout -b feature-name
```

3. Commit changes:

```bash
git commit -m "Added feature"
```

4. Push changes:

```bash
git push origin feature-name
```

5. Open Pull Request

---

# 📄 License

This project is licensed under MIT License.

---

# 👨‍💻 Author

Made with ❤️ by Anjan Chakraborty
