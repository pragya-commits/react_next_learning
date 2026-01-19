import "./App.css";

import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/ThemeToggler.jsx";

function Navigation() {
  const { isDark } = useTheme();

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶🏻" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-all duration-500 ${
        isDark ? "bg-[#1E293B] text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all mr-5 mt-5 ml-5
                ${
                  isDark
                    ? "bg-blue-700 text-white hover:bg-blue-900"
                    : "bg-blue-600 text-white hover:bg-blue-800"
                }`}
              key={section.id}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark ? "bg-[#0F172A] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors duration-500 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React props explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>

          <div id="children" className="scroll-mt-200">
            <ChildrenProps />
          </div>

          <div id="complex" className="scroll-mt-200">
            <ComplexProps />
          </div>

          <div id="ref" className="scroll-mt-200">
            <RefProps />
          </div>

          <div id="theme" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>

        <footer
          className={`mt-12 text-center pb-8 transition-all duration-500 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p>Made with ❤️ using Bun, Vite, React, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
