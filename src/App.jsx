import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import AppLayout from "../layouts/AppLayout";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className={styles.App}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* <Route path="*" element={<Error />} /> */}
          {/* <Header /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
