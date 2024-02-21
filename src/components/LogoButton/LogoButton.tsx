import './LogoButton.css'

type LogoButtonProps = {
    color?: string,
    logo: string,
    label: string,
    onClick?: () => void,
}

const LogoButton = ({
    color='#15216b',
    logo,
    label,
    onClick,
}: LogoButtonProps) => {
  return (
    <div className='logo-btn' style={{backgroundColor: color}} onClick={onClick}>
        <img className='logo' src={logo} alt='logo' />
        <span className='btn-txt'>{label}</span>
    </div>
  )
}

export default LogoButton