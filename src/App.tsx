import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { useState, useEffect } from "react";
import { GlobalStyles } from "./themes/globalStyles";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Journey from "./pages/journey";
import Projects from "./pages/projects";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing";
import Footer from "./components/footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")?.length ?? -1 > 0
      ? JSON.parse(localStorage.getItem("theme") as string)
      : themes.dark
  );

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", JSON.stringify(themes.dark));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Landing />
      <Navbar setTheme={setTheme} />
      <Routes>
        <Route path="" element={<About />} />
        <Route path="journey" element={<Journey />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
