import Homepage from "./pages/homepage.tsx";
import Feedback from "./pages/feedback.tsx";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import { Route, Routes } from "react-router-dom";
import styles from "./App.css";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
