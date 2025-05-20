import { Routes , Route } from "react-router-dom";
import Home from "./routes/Home";
import Porjects from "./routes/Porjects";

function App() {
  return (
    <>
     <Routes>
  
       
       <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Porjects/>}/>


     </Routes>
    </>
  );
}

export default App;
