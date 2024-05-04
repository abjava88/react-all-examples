import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#bab4b4",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};
export default ThemedButton;
