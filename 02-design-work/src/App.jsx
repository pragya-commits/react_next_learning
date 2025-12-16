import "./App.css";

import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Hero />
      <Header />
      <h1 className=" border-b-blue-400 bg-blue-950 text-white border-2 p-4 text-center text-3xl">
        ITS A DESIGN WORK PROJECT
      </h1>
      <div className="flex gap-4 text-center justify-center">
        <Card
          imageUrl="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          title="Join now javascript course"
          description="This is a javascript course , we are using tailwind in this course as a css.there are many projects in this course which you can add in your portfolio. "
        />

        <Card
          imageUrl="https://prod-discovery.edx-cdn.org/cdn-cgi/image/width=auto,height=auto,quality=75,format=webp/media/course/image/381a0046-5d78-4790-8776-74620d59f48e-e2e7f4677ce2.jpeg"
          title="Join now python course"
          buttonText="Pay Now"
          description="This is a python course , we are using tailwind in this course as a css.there are many projects in this course which you can add in your portfolio. "
        />
        <Card
          imageUrl="https://www.tisdigitech.com/wp-content/uploads/2024/06/React.png"
          title="Join now react course"
          description="This is a react course , we are using tailwind in this course as a css.there are many projects in this course which you can add in your portfolio. "
          buttonText="Pay Now"
        />
      </div>
    </>
  );
}

export default App;
