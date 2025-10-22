import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("html").setAttribute("data-theme", savedTheme);
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle Function
  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="flex cursor-pointer gap-2 items-center px-4">
      <input
        type="checkbox"
        className="toggle toggle-error"
        onChange={handleToggle}
        checked={theme === "dark"}
      />
      <span className="text-sm font-medium">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </label>
  );
};

export default ThemeToggle;
