import React from 'react'
import './PageDetail.css'
import { FaGraduationCap,FaUsers,FaSmile } from 'react-icons/fa';
const PageDetail = () => {
  return <>
    <div className='PageContainer'>
    <div className="counter-wrap">
    <p className="titlecourse"><FaGraduationCap className='totalcourse-icon'/>Total Course</p>
        <span className="counter">17</span>
        <span className="suffix">+</span>
    </div>
    <div className="counter-wrap">
    <p className="titlecourse"><FaGraduationCap className='totalcourse-icon'/>Total Tests</p>
        <span className="counter">18</span>
        <span className="suffix">+</span>
    </div>
    <div className="counter-wrap">
    <p className="titlecourse"><FaUsers className='totalcourse-icon'/>Total Users</p>
        <span className="counter">20</span>
        <span className="suffix">+</span>
    </div>
    <div className="counter-wrap">
    <p className="titlecourse"><FaSmile className='totalcourse-icon'/>Satisfied</p>
        <span className="counter">30</span>
        <span className="suffix">+</span>
    </div>
    </div>
  </>
}

export default PageDetail