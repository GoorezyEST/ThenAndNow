import React from "react";
import "./Before.css";
import { useNavigate } from "react-router-dom";

function Before() {
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    navigate("../");
  };

  return (
    <div className="body">
      <header>
        <h1 id="title">¿Que te parecio Mar del Plata?</h1>
        <p id="description">¡Cuentanos tu experiencia!</p>
      </header>

      <form id="survey-form" onSubmit={(e) => handlerSubmit(e)}>
        <label id="name-label">
          Ingrese su nombre
          <br />
          <input
            id="name"
            type="text"
            placeholder="Ingrese su nombre"
            required
          />
        </label>
        <br />

        <label id="email-label">
          Ingrese su email
          <br />
          <input
            id="email"
            type="email"
            pattern="[^ @]*@[^ @]*"
            placeholder="Ingrese su email"
            required
          />
        </label>

        <br />

        <label id="number-label">
          Ingrese su edad
          <br />
          <input
            id="number"
            type="number"
            placeholder="Edad"
            min="12"
            max="100"
            required
          />
        </label>

        <br />

        <legend>¿Como describis tu estancia en Mar del Plata?</legend>

        <select id="dropdown">
          <option value="value1">Excelente</option>
          <option value="value2">Buena</option>
          <option value="value3">Regular</option>
          <option value="value4">Mala</option>
        </select>

        <legend>¿Recomendarias a un amigo venir a esta ciudad?</legend>

        <br />

        <div id="recom">
          <label for="indoor">
            <input id="indoor" type="radio" name="attribute" value="1" />
            Por supuesto
            <br />
            <input id="indoor" type="radio" name="attribute" value="2" />
            Tal vez
            <br />
            <input id="indoor" type="radio" name="attribute" value="3" />
            No estoy seguro
          </label>
        </div>

        <br />

        <legend>¿Que fue lo que mas te gusto?</legend>

        <div id="gusta">
          <label for="gusto">
            <input id="gusto" type="checkbox" name="gusto" value="0" />
            La playa
            <br />
            <input id="gusto" type="checkbox" name="gusto" value="0" />
            Los boliches
            <br />
            <input id="gusto" type="checkbox" name="gusto" value="0" />
            La comida
            <br />
            <input id="gusto" type="checkbox" name="gusto" value="0" />
            Los hoteles
            <br />
            <input id="gusto" type="checkbox" name="gusto" value="0" />
            La costa
          </label>
        </div>

        <legend>¿Que opinas de los marplatenses?</legend>

        <textarea id="textarea" cols="20" maxlenght="200">
          Escriba su opinion aqui
        </textarea>

        <br />

        <button id="submit" type="submit">
          Enviar encuesta
        </button>
      </form>
    </div>
  );
}

export default Before;
