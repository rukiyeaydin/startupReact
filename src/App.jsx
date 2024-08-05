import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Hakkimizda from './routes/Hakkimizda'
import Hizmetlerimiz from './routes/Hizmetlerimiz'
import Iletisim from './routes/Iletisim';
import Boya from './routes/Boya'
import Alci from './routes/Alci';
import Wallpaper from './routes/Wallpaper';
import Parke from './routes/Parke';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path='/boya' element={<Boya/>} />
          <Route path='/alci' element={<Alci/>} />
          <Route path='/duvar-kagidi' element={<Wallpaper/>} />
          <Route path='/parke' element={<Parke/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
