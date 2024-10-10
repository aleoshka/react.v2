import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = "Какое-то значение";
const firstName = "Алекс";
const lastName = "Брусьника";
const getRandom = () => Math.floor(Math.random() * 10);

root.render(
  <div>
    <h1>{value}</h1>
    <h2>{firstName} {lastName}</h2>
    <ul>
      {
        Array.from({ length: 5 }, (_, index) =>
          <li>Элемент {getRandom() % 2 ? "ODD" : "EVEN"}</li>)
      }
    </ul>
  </div>
);

// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello world!";
// const root = document.getElementById("root");
// root.appendChild(h1Element);