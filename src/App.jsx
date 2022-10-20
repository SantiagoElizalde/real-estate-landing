import Logo from "./assets/Logo2.svg" 
import HomeSearchBar from "./components/pageComponents/HomeSearchBar/HomeSearchBar"
import PropertyCard from "./components/PropertyCard/PropertyCard"

function App() {
  const Style = {
    app: `bg-back min-h-screen text-third`,
    main: `px-side`,
    header: `flex h-[84px] px-side justify-between items-center`,
    logo: `w-fit h-fit`,
    nav: `flex gap-x-2`,
    navItem: `px-4 h-[64px] flex justify-between items-center font-medium text-[14px]`,
    navActiveItem: `bg-primary text-lighter !font-bold !text-[16px]`,
  }

  return (
    <div className={Style.app}>
      <header className={Style.header}> 
          <div className={Style.logo}><a href='#'><img src={Logo}/></a></div>
          <nav className={Style.nav}>
            <ul><li><a href='#' className={`${Style.navActiveItem} ${Style.navItem}`}>Home</a></li></ul>
            <ul><li><a href='#' className={`${Style.navItem}`}>Nosotros</a></li></ul>
            <ul><li><a href='#' className={`${Style.navItem}`}>Servicios</a></li></ul>
            <ul><li><a href='#' className={`${Style.navItem}`}>Blog</a></li></ul>
            <ul><li><a href='#' className={`${Style.navItem}`}>Contacto</a></li></ul>
          </nav>
        </header>
      <main className={Style.main}>

        {/*  */}
        <section className="flex border-b mb-8 pb-8 mt-6 h-[600px] relative">
          <HomeSearchBar/>
          <img className=' w-[56%] ml-auto' alt='' src={'https://i0.wp.com/theorangebackpack.nl/wp-content/uploads/2019/03/andrea-leopardi-694660-unsplash-scaled.jpg?fit=2560%2C1707&ssl=1'}/>
        </section>

        {/*  */}
        <section className="flex gap-3 flex-wrap ">
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
        </section>
      </main>
    </div>
  )
}

export default App
