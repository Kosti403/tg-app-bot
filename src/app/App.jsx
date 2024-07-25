import "./App.css";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import { useTelegram } from "./components/hook/useTelegram";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";
import Workers from "./pages/workers/workers";
import Statistics from "./pages/statistics/statistics";
function App() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
