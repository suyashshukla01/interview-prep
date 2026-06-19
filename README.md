🚀 Interview Briefed

An AI-powered interview preparation platform that analyzes resumes against job descriptions, generates personalized interview reports, and creates ATS-friendly tailored resumes in PDF format.

🌐 Live Demo

Frontend: https://interviewbriefed.vercel.app

Backend: https://interview-prep-backend-bkst.onrender.com

✨ Features
🔐 Authentication
User Registration & Login
JWT-based Authentication
Secure HTTP-only Cookies
Protected Routes
Logout with Token Blacklisting
📄 Resume Analysis
Upload Resume (PDF)
Extract Resume Content
Compare Resume with Job Description
Match Score Calculation
🤖 AI-Powered Interview Preparation
Technical Interview Questions
Behavioral Interview Questions
Skill Gap Analysis
Personalized Preparation Plan
Interview Readiness Insights
📑 AI Resume Builder
Generate ATS-Friendly Resume
Tailor Resume for Specific Job Roles
Professional Resume Formatting
Export Resume as PDF
☁️ Deployment
Frontend hosted on Vercel
Backend hosted on Render
MongoDB Atlas Database
Google Gemini AI Integration
🛠️ Tech Stack
Frontend
React.js
React Router
Axios
Tailwind CSS
Vite
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
Multer
PDF Parse
Puppeteer Core
Chromium
AI
Google Gemini AI
Zod
Zod to JSON Schema
Deployment
Vercel
Render
📂 Project Structure
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
⚙️ Environment Variables
Backend (.env)
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_google_gemini_api_key

FRONTEND_URL=http://localhost:5173
Frontend (.env)
VITE_API_URL=http://localhost:3000/api
🚀 Installation
Clone Repository
git clone https://github.com/yourusername/interview-prep.git

cd interview-prep
Backend Setup
cd Backend

npm install

npm run dev

Backend runs on:

http://localhost:3000
Frontend Setup
cd Frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173
📖 How It Works
User uploads a resume (PDF)
Resume content is extracted
User enters:
Self Description
Job Description
Gemini AI analyzes the profile
System generates:
Match Score
Technical Questions
Behavioral Questions
Skill Gap Report
Preparation Roadmap
User can generate a customized ATS-friendly resume
Resume is exported as a PDF
📸 Screenshots
Landing Page

Add screenshot here

Dashboard

Add screenshot here

Interview Report

Add screenshot here

Resume Generator

Add screenshot here

🔒 Security Features
Password Hashing using bcrypt
JWT Authentication
HTTP-only Secure Cookies
Token Blacklisting
Protected API Routes
CORS Protection
🎯 Future Improvements
Interview Question Practice Mode
AI Mock Interview
Voice-Based Interview Simulation
Resume Version History
Company-Specific Interview Kits
Email Report Sharing
User Analytics Dashboard
👨‍💻 Author

Suyash Shukla

GitHub: https://github.com/suyashshukla01
LinkedIn: https://www.linkedin.com/in/suyash-shukla01
⭐ Support

If you found this project helpful, consider giving it a star on GitHub!

⭐ Star this repository

Built with ❤️