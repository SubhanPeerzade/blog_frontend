import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import("./pages/Home"));
const SinglePost = lazy(() => import("./pages/singlePost"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const CreateBlog = lazy(() => import("./pages/CreateBlog"));
import Navbar from "./pages/NavBar";
const NotFound = lazy(() => import("./pages/NotFound"));
const MyAccount = lazy(() => import("./pages/MyAccount"));
import PrivateRoute from "./components/PrivateRoute";
// import About from "./pages/About";

function App() {
  return (
    <BrowserRouter> {/* ✅ Only one router */}
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<PrivateRoute><SinglePost /></PrivateRoute>} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/create" element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
          <Route path="/edit/:postId" element={<CreateBlog />} />
          <Route path="/create/:postId" element={<CreateBlog />} />
          <Route path="/my-account" element={<MyAccount />} />
          { /* <Route path="/about" element={<About />} /> */ }
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


