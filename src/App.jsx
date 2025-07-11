import { Routes , Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Porjects from "./routes/Porjects";
import Muchku from "./routes/projects/Muchku";
import Pizzahunt from "./routes/projects/Pizzahunt";
import NoteJs from "./routes/projects/NoteJs";
import Pokemon from "./routes/projects/Pokemon";
import UIgallery from "./routes/projects/UIgallery";
import { Analytics } from "@vercel/analytics/react"
import { ImageOff } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <>
    <Analytics/>

     <Routes>
  
       
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Porjects/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/project/Muchku-lang" element={<Muchku/>}/>
        <Route path="/project/pizzahunt" element={<Pizzahunt/>}/>
        <Route path="/project/Note.js" element={<NoteJs/>}/>
        <Route path="/project/pokemon" element={<Pokemon/>}/>
        <Route path="/project/Uigallery" element={<UIgallery/>}/>



     </Routes>
    </>
  );
}

export default App;
