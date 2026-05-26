import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../Spinner";

export const ProtectedRoute = ({ children }) => {
  // Verificar se o usuário está autenticado
  const { isAuthenticate, isLoading } = useAuth();

  // Hook para navegação
  const navigate = useNavigate();

  // Redirecionar para a página de login se o usuário não estiver autenticado
  useEffect(() => {
    if (!isLoading && !isAuthenticate) {
      // redirect para /auth/login
      navigate("/auth/login");
    }
  }, [isAuthenticate, isLoading, navigate]);

  // Exibir um spinner enquanto a autenticação está sendo verificada
  if (isLoading) {
    return <Spinner />;
  }

  // Se o usuário não estiver autenticado, redirecionar para a página de login
  if (!isAuthenticate) {
    return null;
  }

  // Se o usuário estiver autenticado, renderizar os filhos (conteúdo protegido)
  return children;
};
