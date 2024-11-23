import React,{useState,useEffect} from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewCourseContent.css'
import { FaArrowLeft } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';

// ... (other imports)

const ViewCourseContent = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [video, setVideo] = useState(null);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [transcript, setTranscript] = useState('');

  const navigate = useNavigate();

  const getbycourseid = async () => {
    try {
      const response = await axios.get(`/api/v1/courses/getcoursebyid/${courseId}`);
      console.log("ViewCourse", response.data.GetCourseById);

      if (Array.isArray(response.data.GetCourseById)) {
        setCourses(response.data.GetCourseById);
        setSelectedVideo(response.data.GetCourseById.coursevideos[0]);
        setVideo(response.data.GetCourseById.coursevideos[0]);
      } else if (response.data.GetCourseById) {
        // If it's not an array but a single object, wrap it in an array
        setCourses([response.data.GetCourseById]);
        setSelectedVideo(response.data.GetCourseById.coursevideos[0]);
        setVideo(response.data.GetCourseById.coursevideos[0]);
      } else {
        setCourses([]);
      }

    } catch (error) {
      console.log("Error in ViewCourse", error);
    }
  }

  const handleVideoClick = (coursevideo) => {
    setVideo(coursevideo);
    setSelectedVideo(coursevideo);

    // Update completedVideos state
    if (!completedVideos.includes(coursevideo._id)) {
      setCompletedVideos([...completedVideos, coursevideo._id]);
    }
  };

  useEffect(() => {
    getbycourseid();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const calculateProgress = () => {
    const progress = (completedVideos.length / courses[0]?.coursevideos.length) * 100;
    return isNaN(progress) ? 0 : progress;
    
  };
  useEffect(() => {
    // Show feedback popup when the course progress reaches 100%
    if (calculateProgress() === 100) {
      setShowFeedbackPopup(true);
    }
  }, [completedVideos, courses]);
  const handleCloseFeedbackPopup = () => {
    setShowFeedbackPopup(false);
  };
  const handleTranscript = async()=>{
    try {
      const videoPath = `${selectedVideo.url}`;
      console.log(videoPath);
      const response = await axios.post('http://localhost:5000/transcribe', { videoPath }, { headers: { 'Content-Type': 'application/json' } });

      console.log(response);
      const transcript = response.data.transcript;
      setTranscript(transcript); // Update the state with the transcript
    } catch (error) {
      console.error('Error:', error);
    }

  }
  const handleDownloadTranscript = () => {
    const blob = new Blob([transcript], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'transcript.txt';
    link.click();
  };
  
  return (
    <>
    
      <div className='coursedetailsheader'>
        <button className="back-arrow-button" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
      </div>
      <div className="course-progress">
        <h3 className="section-header">Course Progress</h3>
        <p>{`${calculateProgress()}% Complete`}</p>
        <div className="progress-bar">
          <div style={{ width: `${calculateProgress()}%` }}></div>
        </div>
      </div>
      <div className="course-content">
        <div className="video-list">
          <h3 className="section-header">Course Content</h3>
          <ul className="video-list-items">
            
            {courses?.length > 0 && courses[0]?.coursevideos.map((coursevideo) => (
              
              <li
                key={coursevideo._id}
                onClick={() => handleVideoClick(coursevideo)}
                className={selectedVideo?._id === coursevideo._id ? 'active' : ''}
              >
                <span className='checkboxspan'>
                <input
                  type="checkbox"
                  checked={completedVideos.includes(coursevideo._id)}
                  readOnly
                />
                </span>
                {coursevideo.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="video-player">
          <h3 className="section-header">Course Video</h3>
          {selectedVideo && (
            <video
              className="video-player"
              src={`http://localhost:3000/media/uploads/${selectedVideo.url}`}
              controls
            />
          )}
        </div>
      </div>
      <div className='generatetrancriptcontainer'>
          <button className='generatetranscript' onClick={handleTranscript}>Generate Transcript</button>
          <div>
        </div>
        
      </div>
      {showFeedbackPopup && (
        <div className="feedback-popup">
          <h3 className='feedbackheadingcourse'>Course Completed!</h3>
          <p className='feedbackparacourse'>Thank you for completing the course.</p>
          <button onClick={handleCloseFeedbackPopup}>Close</button>
        </div>
      )}
      <div className='transcriptesgenerated'>
  <h3 className='transcriptsgeneratedheading'>Transcript</h3>
  <p className='transcriptsgeneratedparagraph'>{transcript}</p>
  <div className='transcript-download' onClick={handleDownloadTranscript}>
    <span className='transcript-download-icon'>
    <MdFileDownload />

    </span>
    Download Transcript
  </div>
</div>
    </>
  );
};

export default ViewCourseContent;
