import { PiShoppingCartSimpleBold } from "react-icons/pi";
import GetImgUrl from "../../utils/getImgUrl";
import { Link } from'react-router-dom'
import PropTypes from 'prop-types';

const VinylCard = ({vinyl}) => {
  return (
    <div className="rounded-lg pl-1 transition-shadow duration-300">
  <div
    className=" border-2 border-red-800 rounded-lg pl-1 flex flex-col sm:flex-row sm:items-center sm:h-52  sm:justify-center gap-1 w-[86%] mx-auto"
  >
    <div className="sm:w-44 sm:h-44 flex-shrink rounded-md overflow-hidden">
    <Link to={`/vinyls/${vinyl.id}`}>
        <img
          src={`${GetImgUrl(vinyl?.coverImage)}`}
          alt=""
          className="w-full h-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </Link>
    </div>

    <div className=" w-auto h-full py-4 pr-2 flex flex-col flex-auto relative">
      <Link to={`/vinyls/${vinyl.id}`}>
        <h3 className="text-lg font-bold mb-3 hover:text-secondary leading-snug">{vinyl?.title}</h3>
      </Link>
      <p className="text-gray-500 text-base mb-2">{vinyl?.artist}</p>
      <p className="font-secondary text-sm">
        ${vinyl?.newPrice} <span className="line-through font-normal ml-3">${vinyl?.oldPrice}</span>
      </p>
      <button className="btn-primary w-auto text-sm sm:text-xs space-x-1 flex items-center text-white rounded-md absolute bottom-5">
        <PiShoppingCartSimpleBold className="text-lg sm:text-xs"/>
        <span className="text-sm">Add to Cart</span>
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