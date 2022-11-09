import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/molecules/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  const Style = {
    app: `bg-back min-h-screen text-third pb-side`,
  };

  return (
    <div className={Style.app}>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
