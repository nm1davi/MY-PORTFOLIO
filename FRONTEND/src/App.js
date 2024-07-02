import "./App.css";
import Navbar from "./components/navbar.jsx";
import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";
import Project1 from "./components/project1.jsx";
import Project2 from "./components/project2.jsx";
import Project3 from "./components/project3.jsx";
import Project4 from "./components/project4.jsx";
import Project5 from "./components/project5.jsx";
import Curriculum from "./components/curriculum.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/project1" element={<Project1 />} />
            <Route exact path="/project2" element={<Project2 />} />
            <Route exact path="/project3" element={<Project3 />} />
            <Route exact path="/project4" element={<Project4 />} />
            <Route exact path="/project5" element={<Project5 />} />
            <Route exact path="/curriculum" element={<Curriculum />} /> 
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
