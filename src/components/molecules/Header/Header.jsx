import Logo from "../../../assets/Logo2.svg"
import { BtnLink } from "../../atoms/Button/Button"

const Header = () => {
  

  return (
      <header className={Style.HeaderContainer}> 
          <div className={Style.Logo}><a href='#'><img src={Logo}/></a></div>
          <nav className={Style.Nav}>
            <ul><li><BtnLink text={'Home'} /></li></ul>
            <ul><li><a href='#' className={`${Style.NavItem}`}>Nosotros</a></li></ul>
            <ul><li><a href='#' className={`${Style.NavItem}`}>Servicios</a></li></ul>
            <ul><li><a href='#' className={`${Style.NavItem}`}>Blog</a></li></ul>
            <ul><li><a href='#' className={`${Style.NavItem}`}>Contacto</a></li></ul>
          </nav>
      </header>
  )
}

const Style = {
  HeaderContainer: `flex h-[84px] px-side justify-between items-center`,
  Logo: `w-fit h-fit`,
  Nav: `flex gap-x-2`,
  NavItem: `px-4 h-[64px] flex justify-between items-center font-medium text-[14px]`,
  NavActiveItem: `bg-primary text-lighter fontBold !text-[16px]`,
}

export default Header