import { useParams } from "react-router-dom";
import { useGetVinylByIdQuery } from "../../redux/features/vinyls/vinylApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/counter/counterSlice";
import GetImgUrl from "../../utils/getImgUrl";

const SingleVinyl = () => {
    const {id} = useParams();
    const {data: vinyl, isLoading ,isError} = useGetVinylByIdQuery(id);

    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error fetching vinyl details!</div>
  return (
    <div className="flex justify-center items-center h-[calc(100vh-50px)] bg-gradient-to-br from-[#851203] via-[#C5001A] to-[#031954]">
            <div className="bg-white shadow-lg rounded-lg p-8 w-3/5 flex gap-8 relative">
                <div className="w-[50%]">
                    <img
                        src={`${GetImgUrl(vinyl.coverImage)}`}
                        alt={vinyl.title}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                <div className='w-[50%] space-y-4 relative'>
                <h1 className="text-3xl font-bold text-primary mb-12">{vinyl.title}</h1>
                    <p className="text-gray-700"><strong>Artist:</strong> {vinyl.artist || 'Unknown Artist'}</p>
                    <p className="text-gray-700 capitalize">
                        <strong>Genre:</strong> {vinyl?.genre}
                    </p>
                    <p className="flex flex-col gap-4 font-secondary text-sm mb-1"><strong>New Price:</strong>
                        ${vinyl?.newPrice} <strong>Old Price:</strong> <span className="line-through font-normal">${vinyl?.oldPrice}</span>
                    </p>
                    <p className="text-gray-700">
                        <strong>Published:</strong> {new Date(vinyl?.createdAt).toLocaleDateString()}
                    </p>
                </div>

                <div className="absolute bottom-5 right-5">
                        <button
                            onClick={() => handleAddToCart(vinyl)}
                            className="border border-primary text-secondary px-8 py-3 mb-2 rounded-lg shadow-md transition duration-300 hover:bg-primary hover:text-white"
                        >
                            Add to Cart
                        </button>
                    </div>
            </div>
        </div>
  )
}
export default SingleVinyl