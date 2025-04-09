// імпортуємо стилі виключно для поточного компоненту
import "./App.css";

// основний компонент
const App = () => {
  return (
    <div className="App">
      <img
        id="mainImage"
        src="./android-chrome-512x512.png"
        alt="Немає зображення =("
      />
      <h1>React'ивний привіт від murCATolog'а!</h1>
      <a
        href="https://www.youtube.com/@codeCATolog"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-link"
      >
        Мій YouTube канал
      </a>
    </div>
  );
};

export default App;
