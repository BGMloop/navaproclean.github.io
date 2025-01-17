import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import CleanerList from '../components/Cleaners/CleanerList'
import CleanerDetails from '../pages/Cleaners/CleanerDetails'
import CleanersPage from '../pages/Cleaners/CleanersPage'
import BookingPage from '../pages/Booking/BookingPage'

import {Routes, Route} from 'react-router-dom'

function Routers() {
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cleaners" element={<CleanersPage/>} />
        <Route path="/cleaners/:id" element={<CleanerDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/booking" element={<BookingPage />} />
    </Routes>
}

export default Routers; 