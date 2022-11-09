import { faBed, faHeart, faLocationDot, faShower, faUpRightAndDownLeftFromCenter, faWarehouse, faWaterLadder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import Price from '../atoms/Price/Price'
import Like from '../atoms/Button/Like/Like'
import Carousel from '../atoms/Carousel/Carousel'

const PropertyCard = ({
  title,
  location,
  price,
  availableFor,
  imgesUrl,
  details
}) => {
  // const imgUrl = 'data:image/jpeg;base64,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'

  return (
    <article id='PropertyCard' className="shadowHover flex flex-col overflow-hidden p-3 w-[320px] bg-white hover:-translate-y-2 transition"> {/* cursor-default */}
      <div className='relative'>
        {/* <img alt={title} src={imgesUrl[0]} className='h-[176px] w-full object-cover'/> */}
        <Carousel imagesList={imgesUrl} containerClasses={'h-[176px]'}/>
        <div className='right-1 bottom-1 absolute opacity-90 text-center bg-primary text-white py-[4px] px-1 fontBold uppercase'>
          {
            availableFor.map((operation,i) => `${i > 0?' & ':''}${operation}`)
          }
        </div>
      </div>
      <div className='flex gap-1 items-center mt-3 justify-between'>
        <h1 className='fontBold text-lg'>{title}</h1>
        <Like liked={false}/>
      </div>
      <p className='mt-1 mb-4 text-primary2 leading-2 flex gap-[6px] items-center text-sm'><FontAwesomeIcon icon={faLocationDot} />{location}</p>
      <div className='mt-auto'>
        {
          details ?
            <ul className='flex flex-wrap items-center justify-center border-t border-b py-1 gap-y-[4px] gap-x-4 px-2'>

              {
                (details?.rooms) ? 
                  <li className='h-[40px] gap-1 flex items-center'>
                    <FontAwesomeIcon icon={faBed} />
                    <strong className=''>x{details?.rooms}</strong>
                  </li> : ''
              }

              {
                (details?.toilets) ? 
                  <li className='h-[40px] gap-1 flex items-center'>
                    <FontAwesomeIcon icon={faShower} />
                    <strong className=''>x{details?.toilets}</strong>
                  </li> : ''
              }

              {
                (details?.squareMeters) ? 
                  <li className='h-[40px] gap-1 flex items-center'>
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    <strong className=''>{details?.squareMeters}<span className='text-xs'> m<sup>2</sup></span></strong>
                  </li> : ''
              }

              {
                (details?.swimmingPool) ? 
                  <li className='h-[40px] gap-1 flex items-center'>
                    <FontAwesomeIcon icon={faWaterLadder} />
                    <strong>Piscina</strong>
                  </li> : ''
              }

              {
                (details?.garage) ? 
                  <li className='h-[40px] gap-2 flex items-center'>
                    <FontAwesomeIcon icon={faWarehouse} />
                    <strong>x{details?.garage}</strong>
                  </li> : ''
              }

            </ul>
          : ''
        }

        <div className='flex gap-3 items-center pt-3 pb-[4px] justify-between text-right'>
          {/* <BtnPrimary text={'Ver propiedad'}/> */}
          <Price price={price} classes={`text-[24px] m-auto`}/>
        </div>
      </div>

    </article>
  )
}

export default PropertyCard