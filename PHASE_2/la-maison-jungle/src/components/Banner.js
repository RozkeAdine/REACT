import '../Styles/Banner.css';
import logo from '../assets/images/logo.png';


function Banner() {
    const title ='La Maison JUNGLE'
    return <div className="lmj-banner">
                <img src={logo} alt='Lamaison jungle' className='lmj-logo'/>
                <h1 className='lmj-title'>{title}</h1>
            </div>
}

export default Banner