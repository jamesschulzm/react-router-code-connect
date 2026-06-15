import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoute } from "../components/ProtectedRoute/index.jsx";
import { AppLayout } from "../layouts/App/index.jsx";
import { AuthLayout } from "../layouts/Auth/index.jsx";
import { BlogPost } from "../pages/BlogPost/index.jsx";
import { Feed } from "../pages/Feed/index.jsx";
import { Login } from "../pages/Login/index.jsx";
import { Logout } from "../pages/Logout/index.jsx";
import { Register } from "../pages/Register/index.jsx";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* Define as rotas da aplicação */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="blog-post/:slug"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
