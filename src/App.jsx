import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLayout from "./components/layout/front";
import HomePage from "./pages/HomePage";
import AbouteUsPage from "./pages/AbouteUsPage";
import AccountPage from "./pages/AccountPage";
import AllPostsPage from "./pages/AllPostsPage";
import BlogPostPage from "./pages/BlogPostPage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import MyPostsPage from "./pages/MyPostsPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AbouteUsPage />} />
          <Route path="posts" element={<AllPostsPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="my-posts" element={<MyPostsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
