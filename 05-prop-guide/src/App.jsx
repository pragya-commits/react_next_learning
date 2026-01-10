import "./App.css";

import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeProps from "./components/ThemeToggler.jsx";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶🏻" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return <nav className={`sticky top-0 z-50 shadow-md`}></nav>;
}

function AppContent() {
  return (
    <div className={`min-h-screen bg-gray-800 text-white`}>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
