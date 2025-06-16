import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import ScrollToHashElement from "./components/ScrollToHashElement"
import emailjs from ".emailjs/browser"

function App() {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); 
  return (
    <>
      <BrowserRouter>
        <ScrollToHashElement/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
