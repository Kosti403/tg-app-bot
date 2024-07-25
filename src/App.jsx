import "./App.css";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import { useTelegram } from "./components/hook/useTelegram";

function App() {
  const { onToggleButton, tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <div>
        <h1>Telegram Bot</h1>
      </div>
      <button onClick={onToggleButton}>Закрыть</button>
      <Footer />
    </>
  );
}

export default App;
