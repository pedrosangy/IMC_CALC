import React, { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, ""); // Permite apenas números e vírgula
  };

  const handleHeightChange = (e) => {
    setHeight(validDigits(e.target.value));
  };

  const handleWeightChange = (e) => {
    setWeight(validDigits(e.target.value));
  };

  return (
    <div className="calc-container">
      <h2>Calculadora</h2>
      <form id="imc-form" onSubmit={clearForm}>
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura</label>
            <input
              type="text" // Use "text" para permitir vírgulas
              id="height"
              name="height"
              placeholder="Em cm"
              value={height}
              onChange={handleHeightChange} // Função de manipulação correta
            />
          </div>
        </div>

        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="weight">Peso</label>
            <input
              type="text" // Use "text" para permitir vírgulas
              id="weight"
              name="weight"
              placeholder="Em KG"
              value={weight}
              onChange={handleWeightChange} // Função de manipulação correta
            />
          </div>
        </div>
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
