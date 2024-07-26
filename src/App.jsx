import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './routes/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/get-demo" element={<DemoProduct />} />  */}
        </Routes>
      </Router>
    </>
  )
}

export default App
