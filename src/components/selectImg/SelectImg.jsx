import './SelectImgStyles.css'

const SelectImg = ({bgImg, text}) => {
  return (
    <div className='select-location'>
        <img src={bgImg} alt="/" />
        <div className="overlay">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SelectImg