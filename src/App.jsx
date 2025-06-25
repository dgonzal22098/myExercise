import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Rutina from '../src/assets/components/Rutina';
import Main from "./assets/components/Main";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/rutinas" element={<Rutina />} />
        </Routes>
      </Router>

  )
}

export default App
