import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
