import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
          </Route>
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
