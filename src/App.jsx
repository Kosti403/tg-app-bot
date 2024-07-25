import "./App.css";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import { useTelegram } from "./components/hook/useTelegram";
import Header from "./components/header/header";

function App() {
  const { onToggleButton, tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <button onClick={onToggleButton}>Закрыть</button>
      <Footer />
    </>
  );
}

export default App;
