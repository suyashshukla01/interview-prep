# 🚀 (BRIEFED)Interview Prep AI

An AI-powered interview preparation platform that analyzes resumes against job descriptions, generates personalized interview reports, and creates ATS-friendly tailored resumes in PDF format.

---

## 🌐 Live Demo

**Frontend:** https://interviewbriefed.vercel.app

**Backend:** https://interview-prep-backend-bkst.onrender.com

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT-based Authentication
- Secure HTTP-only Cookies
- Protected Routes
- Logout with Token Blacklisting

### 📄 Resume Analysis
- Upload Resume (PDF)
- Extract Resume Content
- Compare Resume with Job Description
- Match Score Calculation

### 🤖 AI-Powered Interview Preparation
- Technical Interview Questions
- Behavioral Interview Questions
- Skill Gap Analysis
- Personalized Preparation Plan
- Interview Readiness Insights

### 📑 AI Resume Builder
- Generate ATS-Friendly Resume
- Tailor Resume for Specific Job Roles
- Professional Resume Formatting
- Export Resume as PDF

### ☁️ Deployment
- Frontend hosted on Vercel
- Backend hosted on Render
- MongoDB Atlas Database
- Google Gemini AI Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- PDF Parse
- Puppeteer Core
- Chromium

### AI
- Google Gemini AI
- Zod
- Zod to JSON Schema

### Deployment
- Vercel
- Render

---

## 📂 Project Structure

```bash
Interview-Prep/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_google_gemini_api_key

FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000/api
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/suyashshukla01/interview-prep.git

cd interview-prep
```

### Backend Setup

```bash
cd Backend

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:3000
```

### Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 📖 How It Works

1. Upload a Resume (PDF)
2. Enter Self Description
3. Enter Job Description
4. Gemini AI analyzes the profile
5. Generates:
   - Match Score
   - Technical Questions
   - Behavioral Questions
   - Skill Gap Analysis
   - Preparation Plan
6. Generate ATS-Friendly Resume
7. Download Resume as PDF

---

## 🔒 Security Features

- Password Hashing using bcrypt
- JWT Authentication
- HTTP-only Secure Cookies
- Token Blacklisting
- Protected API Routes
- CORS Protection

---

## 🎯 Future Improvements

- AI Mock Interview
- Voice-Based Interview Simulation
- Resume Version History
- Company-Specific Interview Kits
- Email Report Sharing
- User Analytics Dashboard

---

## 👨‍💻 Author

**Suyash Shukla**

- GitHub: https://github.com/suyashshukla01
- LinkedIn: https://www.linkedin.com/in/suyash-shukla01

---

## ⭐ Support

If you found this project helpful, consider giving it a star on GitHub.

⭐ Star this repository