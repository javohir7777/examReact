import { useContext, useState } from "react";
import "./Register.scss";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { requies } from "../server";
import Cookies from "js-cookie";
import { TOKEN } from "../container";
import { useNavigate } from "react-router-dom";
import LogautPage from "./LogautPage";
const AccountPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const { setIsAuthenticed } = useContext(AuthContext);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await requies.post("auth/register", input);
      console.log(token);
      Cookies.set(TOKEN, token);
      setIsAuthenticed(false);
      Cookies.remove(TOKEN);
      navigate("/login");
    } catch (err) {
      toast.error("Error");
    }
  };

  return (
    <div className="register">
      <LogautPage />
      <h1 className="register-h1">Register</h1>
      <form className="register-form">
        <input
          onChange={handleInput}
          id="firstname"
          className="register-input"
          type="text"
          placeholder="firstName"
        />
        <input
          onChange={handleInput}
          id="lastname"
          className="register-input"
          type="text"
          placeholder="Lastname"
        />
        <input
          onChange={handleInput}
          id="username"
          className="register-input"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={handleInput}
          id="password"
          className="register-input"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={handleInput}
          id="confirmpassword"
          className="register-input"
          type="password"
          placeholder="Confirm password"
        />
        <input
          className="register-input register-submit"
          type="submit"
          placeholder="RegisterPage"
          onClick={login}
        />
      </form>
    </div>
  );
};

export default AccountPage;
