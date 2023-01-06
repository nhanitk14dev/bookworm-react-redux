import { useTheme } from "../app/hooks/useTheme";
import { Button } from "./../commonStyles";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Change Theme
    </Button>
  );
};

export default ToggleTheme;
