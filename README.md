# Blog Application

A full-stack blog application built with React and Node.js, featuring user authentication, blog creation, and management capabilities.

## 🚀 Features

- *User Authentication*: Secure user registration and login with JWT tokens
- *Blog Management*: Create, read, update, and delete blog posts
- *User Profiles*: Personal account management with bio and profile pictures
- *Responsive Design*: Modern UI built with Material-UI and custom SCSS
- *State Management*: Redux Toolkit for efficient state management
- *Protected Routes*: Secure access to authenticated features
- *Real-time Updates*: Dynamic content updates without page refresh

## 🛠 Tech Stack

### Frontend
- *React 19* - Modern React with hooks
- *Vite* - Fast build tool and development server
- *Redux Toolkit* - State management
- *React Router DOM* - Client-side routing
- *Material-UI* - Component library
- *Axios* - HTTP client
- *SCSS* - Styling

### Backend
- *Node.js* - JavaScript runtime
- *Express.js* - Web framework
- *MongoDB* - NoSQL database
- *Mongoose* - MongoDB object modeling
- *JWT* - JSON Web Tokens for authentication
- *bcryptjs* - Password hashing
- *CORS* - Cross-origin resource sharing




## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. *Clone the repository*
   bash
   git clone <repository-url>
   cd assigment
   

2. *Install backend dependencies*
   bash
   cd Blog_backend
   npm install
   

3. *Install frontend dependencies*
   bash
   cd ../blog_frontend
   npm install
   

4. *Environment Setup*
   
   Create a .env file in the Blog_backend directory:
   env
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   

5. *Start MongoDB*
   Make sure MongoDB is running on your system or configure the connection string for MongoDB Atlas.

### Running the Application

1. *Start the backend server*
   bash
   cd Blog_backend
   npm run dev
   
   The API will be available at http://localhost:5000

2. *Start the frontend development server*
   bash
   cd blog_frontend
   npm run dev
   
   The application will be available at http://localhost:5173

## 📚 API Endpoints

### Authentication
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/auth/profile - Get user profile (protected)

### Blog Posts
- GET /api/blogs - Get all blog posts
- GET /api/blogs/:id - Get single blog post
- POST /api/blogs - Create new blog post (protected)
- PUT /api/blogs/:id - Update blog post (protected)
- DELETE /api/blogs/:id - Delete blog post (protected)

## 🔧 Available Scripts

### Backend
- npm start - Start production server
- npm run dev - Start development server with nodemon

### Frontend
- npm run dev - Start development server
- npm run build - Build for production
- npm run preview - Preview production build
- npm run lint - Run ESLint

## 🎨 Features Overview

### User Authentication
- Secure password hashing with bcryptjs
- JWT-based authentication
- Protected routes and API endpoints
- User session management

### Blog Management
- Create and edit blog posts
- Rich text content support
- Image upload capability


### User Interface
- Responsive design for all devices
- Material-UI components
- Custom SCSS styling


## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- CORS configuration
- Protected API routes

## 🤖 Use of AI Tools  

During this project, I used **AI tools like ChatGPT and Cursor** to speed up learning and problem-solving.  

- **Prompting Techniques**: Clear, structured prompts and step-by-step queries (e.g., README creation → API docs → Postman integration).  
- **How AI Helped**: Generated boilerplate code, improved documentation, suggested best practices, and clarified errors.  
- **Challenges**: Needed to adjust outputs for compatibility, tweak configs, and ensure originality instead of over-relying on AI.  





## Screenshots
![Screenshot_18-9-2025_23379_localhost](https://github.com/user-attachments/assets/d51182bb-1b0e-4e9b-a868-3e661fc2f08c)
![Screenshot_18-9-2025_233727_localhost](https://github.com/user-attachments/assets/4a7e692f-aff3-42c2-b2fd-e6f1ff718a00)
![Screenshot_18-9-2025_233824_localhost](https://github.com/user-attachments/assets/d4a21eb9-d5fc-4c1c-913c-f73f837ae8f6)
![Screenshot_18-9-2025_233845_localhost](https://github.com/user-attachments/assets/7240b9dd-f6b3-4dd5-9985-39605ba4796c)

## Screen recording


https://github.com/user-attachments/assets/1742b753-33f0-46c5-ad5b-613eae93de20








## 👥 Author

-Subhan Peerzade- Initial work

