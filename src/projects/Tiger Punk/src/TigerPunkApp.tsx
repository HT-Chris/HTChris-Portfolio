import { TigerPunkContextProvider } from './Components/TigerPunkContext'
import { Home } from './Pages/Home'
import { Gallery } from './Pages/Gallery'
import { Merch } from './Pages/Merch'
import { TourDates } from './Pages/TourDates'
import { Contacts } from './Pages/Contacts'
import { Route, Routes} from 'react-router-dom'
import { ProductDetails } from './Pages/ProductDetails'
import { Cart } from './Pages/Cart'
import './TigerApp.css'


export const TigerPunkApp = () => {

  return (
    <>

    <TigerPunkContextProvider>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/Gallery' element={<Gallery/>} />
        <Route  path='/Merch' element={<Merch/>} />
        <Route  path='/TourDates' element={<TourDates/>} />
        <Route  path='/Contacts' element={<Contacts/>} />
        <Route  path='/Product/:productId' element={<ProductDetails />} />
        <Route  path='/Cart' element={<Cart />} />
     
    </Routes>
    </TigerPunkContextProvider>
    
    </>
  )
}

