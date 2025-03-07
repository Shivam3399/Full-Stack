**Full Stack Greeting App**
**A simple full-stack web application where users can enter their name and receive a personalized greeting.**

The frontend is built with React.js & Tailwind CSS, and the backend is powered by Node.js & Express.

Features:
- User-friendly interface with React & Tailwind CSS
- Backend API to process user input and return greetings - Error handling for invalid inputs
- Supports both local development and free deployment
  
Project Structure: /greeting-app

**Step 1: Prerequisites**
- Install Node.js (v18+) from nodejs.org - Install Git from git-scm.com
- Use a code editor like VS Code
  
Step 2: Clone the Repository
git clone https://github.com/yourusername/greeting-app.git cd greeting-app
Step 3: Setup Frontend (React.js)
1. Navigate to frontend folder
cd frontend
2. Install dependencies
npm install
3. Start development server
npm run dev
- Frontend will run on http://localhost:5173/
  
Step 4: Setup Backend (Node.js & Express)
1. Open a new terminal & navigate to backend
cd ../backend
2. Install dependencies
npm install
3. Start backend server
npm start
- Backend will run on http://localhost:5001/
How to Use:
1. Open browser and go to http://localhost:5173/
2. Enter your name in the input field
3. Click "Get Greeting" button
4. You will see a personalized greeting message
API Details:
GET /api/greet
Example Request:
GET http://localhost:5001/api/greet?name=John

Response:
{ "message": "Hello, John! Welcome to Younglabs." }
Error Response:
{ "message": "Name is required." }
