import React from 'react'
import Header from '../Header/Header.js'
import LandingPage from '../LandingPage/LandingPage.js'
import CoursePage from '../CoursesPage/CoursePage.js'
import PageDetail from '../PageDetail/PageDetail.js'
import Blog from '../Blog/Blog.js'
import Contactus from '../ContactUs/Contactus.js'
const Home = () => {
  return <>
   <Header/>
  <LandingPage/>
  <CoursePage/>
  <PageDetail/>
  <Blog/>
  <Contactus/>
  </>
}

export default Home