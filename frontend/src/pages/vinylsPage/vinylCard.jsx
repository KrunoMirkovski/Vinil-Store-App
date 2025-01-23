import { PiShoppingCartSimpleBold } from "react-icons/pi";
import GetImgUrl from "../../utils/getImgUrl";
import { Link } from'react-router-dom'
import PropTypes from 'prop-types';

const VinylCard = ({vinyl}) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div
    className=" border-2 border-red-800 rounded-lg pl-2 flex flex-col sm:flex-row sm:items-center sm:h-52  sm:justify-center gap-2 w-[92%] mx-auto"
  >
    <div className="sm:w-40 sm:h-40 flex-shrink-0 rounded-md overflow-hidden">
    <Link to={`/vinyls/${vinyl.id}`}>
        <img
          src={`${GetImgUrl(vinyl?.coverImage)}`}
          alt=""
          className="w-full h-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </Link>
    </div>

    <div className="flex flex-col flex-grow">
      <Link to={`/vinyls/${vinyl.id}`}>
        <h3 className=" w-70 text-lg font-bold hover:text-secondary  mb-2 leading-snug">{vinyl?.title}</h3>
      </Link>
      <p className="text-gray-500 text-base mb-5">{vinyl?.artist}</p>
      <p className="font-secondary text-sm mb-2">
        ${vinyl?.newPrice} <span className="line-through font-normal ml-3">${vinyl?.oldPrice}</span>
      </p>
      <button className="btn-primary w-auto px-3 py-1 text-sm space-x-1 flex items-center text-white rounded-md">
        <PiShoppingCartSimpleBold className="text-base"/>
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>
  )
}

VinylCard.propTypes = {
    vinyl: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
      newPrice: PropTypes.number.isRequired,
      oldPrice: PropTypes.number.isRequired,
    }).isRequired,
  };

export default VinylCard