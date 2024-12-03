import './HeroStyles.css'
import video from '../../assets/maldivesVideo.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} autoPlay loop id='video' muted></video>
        <div className="overlay"></div>
        <div className="content">
            <h1>First Class Travel</h1>
            <h2>Top 1% Locations Worldwide</h2>
            <form className="form">
                <input type="text" placeholder='Search Destinations' />
                
                    <button><AiOutlineSearch className='icon'/></button>
                
            </form>
        </div>
    </div>
  )
}

export default Hero