import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = "Какое-то значение";

root.render(
  <div className="conteiner col-10">
    <h1 className="h1-style m-3">{value}</h1>

    {Array.from({ length: 5 }, (_, index) =>
      <div className="card m-3">
        <img src={`https://picsum.photos/${200 + index}/100`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Заголовок 1</h5>
          <p className="card-text">Описание 1</p>
        </div>
      </div>
    )}
    <p className="m-3">&copy; Авторский права мои {new Date().getFullYear()}</p>
  </div>
)

// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello world!";
// const root = document.getElementById("root");
// root.appendChild(h1Element);
