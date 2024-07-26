import { Form, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Profile from "./pages/profile/profile";
import Workers from "./pages/workers/workers";
import Statistics from "./pages/statistics/statistics";
import { useEffect } from "react";
import { useTelegram } from "./shared/hook/useTelegram";
import "./app/App.css";
import Footer from "./components/footer/footer";
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
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
