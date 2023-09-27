import { toast } from "react-toastify";
import "./Register.scss";
import { requies } from "../server";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { TOKEN } from "../container";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
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
      } = await requies.post("auth/login", input);
      console.log(token);
      Cookies.set(TOKEN, token);
      setIsAuthenticed(true);
      navigate("/account")
    } catch (err) {
      toast.error("Error");
    }
  };

  return (
    <div className="register">
      <h1 className="register-h1">Login</h1>
      <form className="register-form">
        <input
          id="username"
          // value={username}
          onChange={handleInput}
          className="register-input"
          type="text"
          placeholder="Username"
        />
        <input
          id="password"
          // value={password}
          onChange={handleInput}
          className="register-input"
          type="password"
          placeholder="Password"
        />
        <input
          className="register-input register-submit"
          placeholder="LoginPage"
          type="submit"
          onClick={login}
        />
      </form>
    </div>
  );
};

export default LoginPage;
