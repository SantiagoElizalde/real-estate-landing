import React from 'react'
import { BtnPrimary, BtnSecondary } from '../../atoms/Buttons'

const HomeSearchBar = () => {
  

  return (
    <div id='HomeSearchBar' className={Style.HomeSearchBarContainer}>

      {/* Generic Filters */}
      <ul className='bg-white p-3 z-10 flex pb-0 appRadiustl appRadiustr'>
        <li><BtnPrimary text={'Buscar'} classes={`leading-[52px]`}/></li>
        <li><BtnSecondary text={'Alquiler'} classes={`leading-[52px]`}/></li>
        <li><BtnSecondary text={'Inversiones'} classes={`leading-[52px]`}/></li>
      </ul>

      {/* Generic Filters */}
      <div className='w-3/5 bg-white p-4 absolute items-center flex gap-3 appRadius radiustl0'>{/* shadow */}
        <div className="flex flex-col gap-1">
          <label htmlFor="location" className="font-medium text-gray-400">Ubicación</label>
          <input name="location" className="font-bold outline-none" value={`Barrio Sur, Montevideo`} type={"text"}/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="location" className="font-medium text-gray-400">Rango de Precios</label>
          {/* <input value={`$50.000 - $100.000`} type={"text"}/> */}
          <select name="location" className="font-bold outline-none">
            <option>$50.000 - $100.000</option>
            <option>$100.000 - $150.000</option>
            <option>$200.000 - $250.000</option>
            <option>Desde $250.000</option>
          </select>
        </div>
        <BtnPrimary text={'Buscar'} classes={`ml-auto`} />
      </div>
    </div>
  )
}

const Style = {
  HomeSearchBarContainer: ``,
}

export default HomeSearchBar