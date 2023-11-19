import {specialOffers} from '../../data/special-offers'
import Offer from './Offer'
import './special-offer.css'

const SpecialOffer = () => {
  return (
    <div className="special-offers">
      <h1 className="spacial-offers-title">
      Special offer aujourd'hui
      <span className='special-offers-icon-wrapper'>
        <i className='bi bi-stopwatch'></i>Pour 24H seulement 
      </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map(offer=><Offer key={offer.id} offer={offer}/>)}
      </div>
    </div>
  )
}

export default SpecialOffer