import "./Register.scss";

const RegisterPage = () => {
  return (
    <div className="register">
      <h1 className="register-h1">Register</h1>
      <form className="register-form">
        <input className="register-input" type="text" placeholder="firstName" />
        <input className="register-input" type="text" placeholder="Lastname" />
        <input className="register-input" type="text" placeholder="Username" />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
        />
        <input
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
