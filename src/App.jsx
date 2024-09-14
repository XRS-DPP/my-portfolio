import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className={styles.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
