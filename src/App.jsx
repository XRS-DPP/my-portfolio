import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/about" element={<About />} />
          </Route>
          {/* <Route path="*" element={<Error />} /> */}
          {/* <Header /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
