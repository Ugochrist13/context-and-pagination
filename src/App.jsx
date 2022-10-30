import { ContextProvider } from "./components/contextApi/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Suspense fallback={<h1>Loading...</h1>}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ContextProvider>
    </div>
  );
}

export default App;
