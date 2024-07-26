import "./App.css";

import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Header from "../components/header/header";
import Profile from "../pages/profile/profile";
import Workers from "../pages/workers/workers";
import Statistics from "../pages/statistics/statistics";
import Footer from "../components/footer/footer";
import { useTelegram } from "../components/hook/useTelegram";
// import Form from "../pages/form/form";

function App() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <div className="flex-1 pb-20 px-5">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
