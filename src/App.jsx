import "./App.css";
import Footer from "./components/footer/footer";
const tg = window.Telegram.WebApp;

function App() {
  const handleClose = () => {
    tg.close();
  };
  return (
    <>
      <div>
        <h1>Telegram Bot</h1>
      </div>
      <button onClick={handleClose}>Закрыть</button>
      <Footer />
    </>
  );
}

export default App;
