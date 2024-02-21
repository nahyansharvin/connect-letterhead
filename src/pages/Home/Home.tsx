import './Home.css'
import LogoButton from '../../components/LogoButton/LogoButton'

import Logo from '../../assets/Images/connect.svg'
import IedcLogo from '../../assets/Images/IEDC/IEDClogo_transparent.png'


const Home = () => {
  return (
    <div className='home'>
        <LogoButton logo={Logo} label="Connect" />
        <LogoButton logo={IedcLogo} label="IEDC EMEA" color='#24956a' />
    </div>
  )
}

export default Home