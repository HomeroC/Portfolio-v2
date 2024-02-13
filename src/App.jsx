import Nav from "./components/Nav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <About/>
      <Projects />
      <Contact />
      <Outlet/>
    </div>
  );
}

export default App;
