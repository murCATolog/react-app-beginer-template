// підключаємо React
import React from "react";
// підключаємо ReactDOM
import ReactDOM from "react-dom/client";
// стилі для всієї HTML-сторінки
import "./index.css";
// імпорт компоненту App
import App from "./App";

// Знаходимо  елемент по id в який буде рендеретись JSX-код
const root = ReactDOM.createRoot(document.getElementById("root"));
// метод який буде рендерити КОРЕНЕВИЙ компонент в DOM (App із App.js)
root.render(<App />);
