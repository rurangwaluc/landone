import { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Products from "./components/products/Products";
import Newsletter from "./components/newsletter/Newsletter";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);

  return (
    <div className="main">
      <Header
        myTheme={theme}
        onToggleTheme={toggleTheme}
        onSwitch={switchBtn}
      />
      <Hero myTheme={theme} />
      <Featured myTheme={theme} />
      <Products myTheme={theme} />
      <Newsletter myTheme={theme} />
      <Footer myTheme={theme} />
    </div>
  );
}

export default App;
