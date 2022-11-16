import "./form.css";
import { useState } from "react";
import ImgCarteira from "../carteira.png";
import { useMoedas } from "../../hooks/useMoedas";
import { SelectMoedas } from "../../components/moedas/SelectMoedas";

function Form() {
  const { moedas } = useMoedas();

  return (
    <main id="cadastroDespesa">
      <div className="logo2">
        <img className="imgCarteira" src={ImgCarteira} alt="Happy" />
        <h1 className="text-title">WALLET</h1>
      </div>
      <body>
        <h1 className="text-title-center">Cadastrar nova despesa:</h1>
        <form className="cadastroDespesa-form">
          <div className="inputsCadastro">
            <div className="form-linear">
              <h4 className="text-title"> Valor:</h4>
              <input
                className="input-style-form"
                placeholder="Somente números"
                type="email"
              ></input>
            </div>

            <div className="form-linear">
              <h4 className="text-title"> Descrição:</h4>
              <input
                className="input-style-form"
                placeholder="Digite a descrição"
                type="password"
              ></input>
            </div>
            <div className="form-linear">
              <h4 className="text-title"> Moeda:</h4>

              <select className="select-style2 input-style-form">
                <option onClick={SelectMoedas}></option>
              </select>
            </div>
            <div className="form-linear">
              <h4 className="text-title"> Tipo de Pagamento:</h4>
              <select className="select-style2 input-style-form">
                <option>Dinheiro</option>
                <option>Cartão de Crédito</option>
                <option>Cartão de Débito</option>
              </select>
            </div>
            <div className="form-linear">
              <h4 className="text-title"> Tag:</h4>
              <select className="select-style3 input-style-form">
                <option>Alimentação</option>
                <option>Lazer</option>
                <option>Trabalho</option>
                <option>Transporte</option>
                <option>Saúde</option>
              </select>
            </div>
          </div>

          <div
            className="notificacao-invalida"
            id="notificacao-invalida-password"
          ></div>
          <button className="button-Cadastro">CADASTRAR</button>
        </form>

        <h1 className="text-title-center2">Lista de despesas:</h1>

        <div className="table">
          <table>
            <thead className="green">
              <tr>
                <th>Valor</th>
                <th>Descrição</th>
                <th>Moeda</th>
                <th>Tipo de Pagamento</th>
                <th>Tag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{}</th>
                <th></th>
                <th>{}</th>
                <th>{}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </main>
  );
}

export default Form;
