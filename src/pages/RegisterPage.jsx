import { toast } from "react-toastify";
import "./Register.scss";
import { requies } from "../server";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TOKEN } from "../container";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (!e.target.firstname.value,
      !e.target.lastname.value,
      !e.target.username.value,
      !e.target.password.value || !e.target.confirmpassword.value)
    ) {
      toast.error("Error");
    } else if (e.target.password.value !== e.target.confirmpassword.value) {
      toast.error("Error");
    } else {
      try {
        const user = {
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          username: e.target.username.value,
          password: e.target.password.value,
        };
        const {
          data: { token },
        } = await requies.post("auth/register", user);
        Cookies.set(TOKEN, token);
        setIsAuthenticated(true);
        toast.success("Successfully registered");
        navigate("/my-posts");
      } catch (error) {
        toast.error("Username or password is incorrect");
      }
    }
  };
  return (
    <div className="register" onSubmit={handleSubmit}>
      <h1 className="register-h1">Register</h1>
      <form className="register-form">
        <input
          name="firstname"
          className="register-input"
          type="text"
          placeholder="firstName"
        />
        <input
          name="lastname"
          className="register-input"
          type="text"
          placeholder="Lastname"
        />
        <input
          name="username"
          className="register-input"
          type="text"
          placeholder="Username"
        />
        <input
          name="password"
          className="register-input"
          type="password"
          placeholder="Password"
        />
        <input
          name="confirmpassword"
          className="register-input"
          type="password"
          placeholder="Confirm password"
        />
        <input
          className="register-input register-submit"
          type="submit"
          placeholder="RegisterPage"
        />
      </form>
    </div>
  );
};

export default RegisterPage;
