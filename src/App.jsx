import './App.css'
import Header from "./components/Header/Header"
// import Header from "./components/Header"
import Footer from './components/Footer'
// page content components
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Category from './pages/Category'

// component => .jsx
// capitalized for the component
function App() {
  
  return (
<>
      <main>
    <BrowserRouter>
    <div className='row'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/category" element={<Category />} />
      <Route path="/quiz/:selectedId" element={<Quiz />} />
    </Routes>
    </div>
    </BrowserRouter>
    <Footer />
    </main>


</>
  )
}

export default App
