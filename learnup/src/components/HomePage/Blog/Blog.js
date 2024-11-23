import React from 'react'
import './Blog.css'
import { FaCalendar,FaUsers,FaComment,FaLongArrowAltRight } from 'react-icons/fa';

const Blog = () => {
  return <>
  <div className="blogcontainer">
        <h3 className='blogheading'>Popular Insights</h3>
        <p className='blogparagraph'>Discover insights through the latest analysis to enhance your knowledge from our expert contributors.</p>
   </div>
   <div className='blog-container'>
   <div class="blog-item">
   <a href="/"
               className="blog-item-thumb">
                <img src="https://faculty.spagreen.net/demo/public/images/20230813190506image_406x240-418.png"
                     className='blogimg'alt="Course Thumbnail"/>
            </a>
            <ul className="blog-item-info">
                                <li className="blog-review">
                                    <span className="blogtotal-review"><FaCalendar className='caleneder-start'/>19-Oct-2023</span>
                                </li>
                            </ul>
            <h4 className="blogtitle">
                        <p className='blogdetailparagraph'>How to Use Behavioral Data to Master Your Marketing Strategy</p>
                    </h4>
                    <p class="blogcontent">
                Keen to know the ins and outs of behavioral data? From using CRM tools to mastering your social media algorithm, here&#039;s how to use behavioral data to inform and improve your marketing strategy.
            </p>
            <div className="blogleft-content">
                    <ul className="post-meta">
                        <span><a href="/"><FaComment className='comment-icon'/> 203</a></span>
                        <span><a href="/"><FaUsers className='name-icon'/>Mr John</a></span>
                    </ul>
                    <div class="blogright-content">
                    <a href="/" className="blogread-more-btn">Read More<FaLongArrowAltRight className='right-arrowhead'/></a>
                </div>
                </div>
              
    </div>
    <div class="blog-item">
   <a href="/"
               className="blog-item-thumb">
                <img src="https://faculty.spagreen.net/demo/public/images/20230816071340image_406x240-67.png"
                     className='blogimg'alt="Course Thumbnail"/>
            </a>
            <ul className="blog-item-info">
                                <li className="blog-review">
                                    <span className="blogtotal-review"><FaCalendar className='caleneder-start'/>19-Oct-2023</span>
                                </li>
                            </ul>
            <h4 className="blogtitle">
                        <p className='blogdetailparagraph'>How to Use Behavioral Data to Master Your Marketing Strategy</p>
                    </h4>
                    <p class="blogcontent">
                Keen to know the ins and outs of behavioral data? From using CRM tools to mastering your social media algorithm, here&#039;s how to use behavioral data to inform and improve your marketing strategy.
            </p>
            <div className="blogleft-content">
                    <ul className="post-meta">
                        <span><a href="/"><FaComment className='comment-icon'/> 203</a></span>
                        <span><a href="/"><FaUsers className='name-icon'/>Mr John</a></span>
                    </ul>
                    <div class="blogright-content">
                    <a href="/" className="blogread-more-btn">Read More<FaLongArrowAltRight className='right-arrowhead'/></a>
                </div>
                </div>
              
    </div>
    <div class="blog-item">
   <a href="/"
               className="blog-item-thumb">
                <img src="https://faculty.spagreen.net/demo/public/images/20230816071223image_406x240-211.png"
                     className='blogimg'alt="Course Thumbnail"/>
            </a>
            <ul className="blog-item-info">
                                <li className="blog-review">
                                    <span className="blogtotal-review"><FaCalendar className='caleneder-start'/>19-Oct-2023</span>
                                </li>
                            </ul>
            <h4 className="blogtitle">
                        <p className='blogdetailparagraph'>How to Use Behavioral Data to Master Your Marketing Strategy</p>
                    </h4>
                    <p class="blogcontent">
                Keen to know the ins and outs of behavioral data? From using CRM tools to mastering your social media algorithm, here&#039;s how to use behavioral data to inform and improve your marketing strategy.
            </p>
            <div className="blogleft-content">
                    <ul className="post-meta">
                        <span><a href="/"><FaComment className='comment-icon'/> 203</a></span>
                        <span><a href="/"><FaUsers className='name-icon'/>Mr John</a></span>
                    </ul>
                    <div class="blogright-content">
                    <a href="/" className="blogread-more-btn">Read More<FaLongArrowAltRight className='right-arrowhead'/></a>
                </div>
                </div>
              
    </div>
   </div>
  </>
}

export default Blog