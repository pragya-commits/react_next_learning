import { createContext, useContext, useState } from "react";

//create theme context//
const ThemeContext = createContext();

//Theme Provider component//
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`min-h-screen transition-all duration-500 ${
          theme === "dark"
            ? "bg-[#0F172A] text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

//Custom hook to use theme//
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be within ThemeProvider");
  }

  return context;
}

function ThemeToggleButton() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md border transition-all duration-300
      ${
        isDark
          ? "bg-blue-700 border-blue-500 text-white"
          : "bg-white border-gray-300 text-gray-800"
      }`}
    >
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

function ThemedCard({ title, children }) {
  const { isDark } = useTheme();
  return (
    <div
      className={`p-6 rounded-xl transition-all shadow-lg border duration-300 ${
        isDark
          ? "bg-[#1E293B] border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function ThemeToggler() {
  return (
    <div className="p-10 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Theme Toggler</h1>
        <ThemeToggleButton />
      </div>

      <p className="text-lg opacity-80 max-w-3xl">
        This section demonstrates theme toggling using Context API and props.
        The theme state is shared across all components without prop drilling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ThemedCard title="User Information">
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Role: Developer</p>

          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Edit Profile
            </button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-lg">
              Settings
            </button>
          </div>
        </ThemedCard>

        <ThemedCard title="Statistics">
          <p>
            Total Clicks: <span className="text-blue-500">0</span>
          </p>
          <p>
            Theme: <span className="font-semibold">Dark</span>
          </p>
          <p>
            Status: <span className="text-green-500 font-semibold">Active</span>
          </p>
        </ThemedCard>
      </div>

      <ThemedCard title="Why Context + Props?">
        <ul className="list-disc list-inside space-y-2">
          <li>Avoids prop drilling</li>
          <li>Makes theme accessible anywhere in the tree</li>
          <li>Components still receive props normally</li>
          <li>Combines global state with local config</li>
        </ul>
      </ThemedCard>
    </div>
  );
}

export default ThemeToggler;
