import Home from "./components/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import EditUser from "./components/EditUser/EditUser";
function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/CreateUSer" element={<Form />} />
      <Route  path="/EditUser/:id" element={<EditUser />} />
    </Routes>
    </>
  );
}

export default App;
