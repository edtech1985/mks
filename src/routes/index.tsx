import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "./Routes";
import { Home } from "../pages/HomePage";
import { CartProvider } from "../CartContext";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </Main>
  );
}
