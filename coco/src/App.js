// 여기서 path 변경해서 사용 -- minsu
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./components/Home/Home";
import { SignUp } from "./components/Login/SignUp";
import { Login } from "./components/Login/Login";
import { Problems } from "./components/Problems/Problems";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/problems" element={<Problems/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
