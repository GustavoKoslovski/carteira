import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImgCarteira from "../carteira.png";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: "",
    },
    password: {
      hasChanged: false,
      value: "",
    },
  });

  const isEmailValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <main id="login">
      <body>
        <form className="login-form">
          <div className="logo">
            <img className="imgCarteira" src={ImgCarteira} alt="Happy" />
            <h1 className="text-title">WALLET</h1>
          </div>
          <div className="inputs">
            <div>
              <h3 className="text-title"> Login:</h3>
              <div>
                <input
                  className="input-style"
                  type="email"
                  placeholder="Email"
                  value={form.email.value}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      email: {
                        hasChanged: true,
                        value: event.target.value,
                      },
                    })
                  }
                  data-testid="email"
                />
                {form.email.hasChanged && !form.email.value && (
                  <div data-testid="email-required">Email é obrigatório</div>
                )}
                {form.email.hasChanged && !isEmailValid(form.email.value) && (
                  <div data-testid="email-invalid">Email é inválido</div>
                )}
              </div>
              <h3 className="text-title"> Senha:</h3>
              <div>
                <input
                  className="input-style"
                  type="password"
                  placeholder="Senha"
                  value={form.password.value}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      password: {
                        hasChanged: true,
                        value: event.target.value,
                      },
                    })
                  }
                  data-testid="password"
                />
                {form.password.hasChanged && !form.password.value && (
                  <div data-testid="password-required">Senha é obrigatória</div>
                )}
              </div>
            </div>
          </div>
          <div
            className="notificacao-invalida"
            id="notificacao-invalida-password"
          ></div>
          <button
            className="button-enter"
            type="button"
            data-testid="login-button"
            disabled={!isEmailValid(form.email.value) || !form.password.value}
            onClick={() => navigate("/form")}
          >
            ENTRAR
          </button>
        </form>
      </body>
    </main>
  );
}
export default Login;
