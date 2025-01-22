import { PiShoppingCartSimpleBold } from "react-icons/pi";
import GetImgUrl from "../../utils/getImgUrl";
import { Link } from'react-router-dom'
import PropTypes from 'prop-types';

const VinylCard = ({vinyl}) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div
    className="flex flex-col sm:flex-row sm:items-center sm:h-68  sm:justify-center gap-5"
  >
    <div className="sm:h-68 sm:flex-shrink-0 border rounded-md">
    <Link to={`/vinyls/${vinyl.id}`}>
        <img
          src={`${GetImgUrl(vinyl?.coverImage)}`}
          alt=""
          className="w-full bg-cover p-3 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </Link>
    </div>

    <div>
      <Link to={`/vinyls/${vinyl.id}`}>
        <h3 className=" w-60 text-2xl font-semibold hover:text-secondary  mb-4">{vinyl?.title}</h3>
      </Link>
      <p className="text-gray-700 mb-4">{vinyl?.artist}</p>
      <p className="font-secondary mb-4">
        ${vinyl?.newPrice} <span className="line-through font-normal ml-2">${vinyl?.oldPrice}</span>
      </p>
      <button className="btn-primary px-6 space-x-1 flex items-center gap-1 text-white">
        <PiShoppingCartSimpleBold />
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