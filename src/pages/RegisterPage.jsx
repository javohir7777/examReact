import "./Register.scss";

const RegisterPage = () => {
  return (
    <div className="register">
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
