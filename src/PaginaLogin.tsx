import React, { useState } from "react";
import "./PaginaLogin.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="login-button">
        Entrar
      </button>
    </form>
  );
};

const PaginaLogin: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <LoginForm />
        <div className="login-links">
          <a href="#" className="link">
            Esqueci minha senha
          </a>
          <a href="#" className="link">
            Criar conta
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaginaLogin;
