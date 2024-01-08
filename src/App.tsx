
import {FELVUP} from './projects/FE-lv-up/src/FELVUP'
// import FE13 from './projects/FE13-project/src/App'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';


function App() {
 


 


  return (
    <>
    <Router>

    <Routes>

        {/* <Route path="/TigerPunk" element={<TigerPunk />} /> */}
        <Route path="/" element={<Homepage/>} />
        {/* <Route path="/FE13" element={<FE13/>} /> */}
        <Route path="/FELVUP/*" element={<FELVUP/>} />

      </Routes>

      </Router>
    
   
    </>

  )
}

export default App
