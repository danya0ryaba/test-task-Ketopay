import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home/Home";
import { Error } from "./pages/Error/Error";
import { Footer } from "./components/Footer/Footer";

import './styles/global.scss';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
