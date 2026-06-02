import { useNavigate } from "react-router";
import { AuthFormContainer } from "../../components/AuthFormContainer";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Fieldset } from "../../components/Fieldset";
import { Form } from "../../components/Form";
import { IconArrowFoward } from "../../components/icons/IconArrowFoward";
import { IconAssignement } from "../../components/icons/IconAssignement";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Link } from "../../components/Link";
import { Providers } from "../../components/Providers";
import { TextDivider } from "../../components/TextDivider";
import Typography from "../../components/Typography";
import { useAuth } from "../../hooks/useAuth";
import { AuthLayout } from "../../layouts/Auth";
import banner from "./banner-login.png";
import styles from "./login.module.css";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const response = login(email, password);

    // console.info(response);

    if (response.success) {
      navigate("/");
    } else {
      console.error(response.error);
    }
  };

  return (
    <AuthLayout>
      <AuthFormContainer bannerSrc={banner}>
        <Typography variant="h1" color="--offwhite">
          Login
        </Typography>
        <Typography variant="h2" color="--offwhite">
          Boas-vindas! Faça seu login.
        </Typography>
        <Form action={onSubmit}>
          <Fieldset>
            <Label>E-mail</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
          </Fieldset>
          <Fieldset>
            <Label>Senha</Label>
            <Input name="password" id="password" type="password" required />
            <Checkbox label="Lembrar-me" />
          </Fieldset>
          <Button type="submit">
            Login <IconArrowFoward />
          </Button>
        </Form>
        <div>
          <TextDivider text="ou entre com outras contas" />
          <Providers />
        </div>
        <footer className={styles.footer}>
          <Typography variant="body" color="--offwhite">
            Ainda não tem conta?
          </Typography>
          <Link href="/auth/register">
            <Typography variant="body" color="--highlight-green">
              Crie seu cadastro!
            </Typography>
            <IconAssignement color="#81FE88" />
          </Link>
        </footer>
      </AuthFormContainer>
    </AuthLayout>
  );
};
