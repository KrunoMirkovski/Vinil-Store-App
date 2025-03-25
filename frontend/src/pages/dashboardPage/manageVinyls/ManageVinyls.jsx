import { Link, useNavigate } from "react-router-dom";
import {useGetAllVinylsQuery, useDeleteVinylMutation} from "./../../../redux/features/vinyls/vinylApi"


const ManageVinyls = () => {
    const navigate = useNavigate(); // hook to navigate programmatically

    const {data: Vinyls, refetch} = useGetAllVinylsQuery() // Fetching all vinyls
    const [deleteVinyl] = useDeleteVinylMutation()  // Hook for deleting a vinyl

    // Handle deleting a vinyl
    const handleDeleteVinyl = async (id) => {
        console.log("Attempting to delete vinyl with ID:", id);
        try {
            await deleteVinyl(id); // Calling the delete mutation
            alert('Vinyl was deleted successfully!');
            refetch(); // Refetch the list of vinyls after deletion

        } catch (error) {
            console.error('Failed to delete vinyl:', error);
            alert('Failed to delete vinyl. Please try again.');
        }
    };

    // Navigate to the Edit Vinyl page when clicking the Edit button
    const handleEditClick = (id) => {
        navigate(`dashboard/edit-vinyl/${id}`);
    };
  return (
    <section className="py-1 bg-blueGray-50">
    <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-12">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">All Vinyls</h3>
                    </div>
                </div>
            </div>

            <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                #
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Vinyl Title
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Genre
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Price
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Vinyls && Vinyls.map((vinyl, index) => (
                                <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                   {index + 1}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {vinyl.title}
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {vinyl.genre}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    ${vinyl.newPrice}
                                </td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-4">
                                    <Link to={`/dashboard/edit-vinyl/${vinyl._id}`} className="font-semibold text-black-500 hover:text-red-700 pr-4 mr-2 hover:underline underline-offset-2">
                                        Edit
                                    </Link>
                                    <button 
                                    onClick={() => handleDeleteVinyl(vinyl._id)}
                                    className="font-medium bg-red-500 py-1 px-4 rounded-full text-white mr-2">Delete</button>
                                </td>
                            </tr> 
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</section>
  )
}

export default ManageVinyls