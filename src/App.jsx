import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import LogInPage from './pages/LogInPage'
import UserOtp from './components/user/UserOtp'
import ProfilePage from './pages/ProfilePage'
import NewsDetails from './components/news/NewsDetails'
import NewsEdit from './components/news/NewsEdit'
import NewsCreateForm from './components/news/NewsCreateForm'
import ContactUsPage from './pages/ContactUsPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/login' element={<LogInPage />} />
      <Route path='/otp' element={<UserOtp />} />

      <Route path='/profile' element={<ProfilePage />} />
       <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/newsdetails/:id' element={<NewsDetails />} />

      <Route path='/createnews' element={<NewsCreateForm />} />
      <Route path='/edit/:id' element={<NewsEdit />} />

      
    </Routes>
     
    </BrowserRouter>
  )
}

export default App