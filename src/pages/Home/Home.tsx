import './Home.css'
import LogoButton from '../../components/LogoButton/LogoButton'
import { Clubs } from '../../data/Clubs'
import { Dispatch, SetStateAction } from 'react'

type HomeProps = {
  setClub: Dispatch<SetStateAction<string>>
}

const Home = ({ setClub }: HomeProps) => {

  return (
    <div className='home'>
      <h2>Create your Letter Head</h2>
      {Object.entries(Clubs).map(([key, value]) =>
        <LogoButton key={key} logo={value.logo} label={value.name} color={value.color} onClick={() => setClub(key)} />
      )}
    </div>
  )
}

export default Home