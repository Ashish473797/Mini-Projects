import ProfileImg from '../assets/ProfileImg.png'
import './header.css'

function Header({name, profession, about}){
    return (
        <>
            <div className='header'>
            <div className='left-content'>
                <img src={ProfileImg} alt=""/>
            </div>
            <div className='right-content'>
                <div>
                    <h2>{name}</h2>
                    <h2>{profession}</h2>
                </div>
                <div>
                    <p>{about}</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Header;