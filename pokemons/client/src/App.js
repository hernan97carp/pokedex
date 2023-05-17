import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/Landing/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import CreatePokemon from "./components/createPokemon/CreatePokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/home/:id" element={<Detail></Detail>} />
        <Route
          path="/pokemonCreate"
          element={<CreatePokemon></CreatePokemon>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
