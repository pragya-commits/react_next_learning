import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4">
        It's a Design work project
      </h1>
      <div className="flex gap-4">
        <Card
          title="Join now javascript course"
          buttonText="Pay Now"
          description="This is a javascript course , we are using tailwind in this course as a css.there are many projects in this course which you can add in your portfolio. "
        />
        <Card
          title="Join now python course"
          buttonText="Pay Now"
          description="This is a python course , we are using tailwind in this course as a css.there are many projects in this course which you can add in your portfolio. "
        />
        <Card
          title="Join now react course"
          description="This is a react course , we are using tailwind in this course as a css.there are many projects in this course which you can add in your portfolio. "
          buttonText="Pay Now"
        />
      </div>
    </>
  );
}

export default App;
