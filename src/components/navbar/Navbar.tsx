import { FC, useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
const Navbar: FC<{ setTheme: (theme: DefaultTheme) => void }> = ({
  setTheme,
}) => {
  const theme = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme?.name === "light") {
      localStorage.setItem("theme", JSON.stringify(themes.dark));
      setTheme(themes.dark);
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    }
  };
  return (
    <div>
      Navbar <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Navbar;
