import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Profile from "./pages/profile/profile";
import Workers from "./pages/workers/workers";
import Statistics from "./pages/statistics/statistics";
import { useTelegram } from "./shared/hook/useTelegram";
import "./app/App.css";
import { FormSelect } from "./pages/form/formSelect";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  const { tg } = useTelegram();
  const location = useLocation();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <>
      <Header />
      <div className="flex-1 pb-20 px-5">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/formSelect" element={<FormSelect />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </div>
      {location.pathname !== "/formSelect" && <Footer />}
      {location.pathname !== "/productList" && <Footer />}
    </>
  );
}

export default App;
