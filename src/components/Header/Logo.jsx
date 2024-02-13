import LogoImage from '../../assets/logo.svg'
export const Logo = () => {
    return (
        <a href="./index.html">
            <img className="h-9" src={LogoImage} alt="Weather App" />
        </a>
    )
}
