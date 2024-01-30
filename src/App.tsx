
import {FELVUP} from './projects/FE-lv-up/src/FELVUP'
import {FE13} from './projects/FE13-project/src/FE13'
import { TigerPunkApp } from './projects/Tiger Punk/src/TigerPunkApp';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';

/*
fix hero section
project images
compile images
parallax placement
links
mobile
*/

function App() {
 
  return (
    <>
    <Router>

    <Routes>

        <Route path="/" element={<Homepage/>} />
        <Route path="/TigerPunk" element={<TigerPunkApp/>} />
        {/* other pages compliant
      edit placement
        mobile
        laptop
       */}
        <Route path="/FE13" element={<FE13/>} />
        <Route path="/FELVUP/*" element={<FELVUP/>} />

      </Routes>

      </Router>
    
   
    </>

  )
}

export default App
