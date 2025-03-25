import { useParams } from "react-router-dom";
import { useGetVinylByIdQuery, useUpdateVinylMutation } from "../../../redux/features/vinyls/vinylApi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../../utils/baseUrl";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";
import InputField from "../addVinyl/inputField";
import SelectField from "../addVinyl/selectedField";


const UpdateVinyl = () => {
    const { id } = useParams();// Extracting the vinyl ID from the URL
  const { data: vinylData, isLoading, isError, refetch } = useGetVinylByIdQuery(id);// Fetching vinyl data by ID from the API
  // console.log(vinylData)
  const [updateVinyl] = useUpdateVinylMutation();// Hook to perform vinyl update mutation
  const { register, handleSubmit, setValue, reset } = useForm();// Initializing form handlers

  // useEffect hook to prefill the form with existing vinyl data after it's fetched
  useEffect(() => {
    if (vinylData) {
      setValue('title', vinylData.title);
      setValue('artist', vinylData.artist);
      setValue('genre', vinylData?.genre);
      setValue('trending', vinylData.trending);
      setValue('oldPrice', vinylData.oldPrice);
      setValue('newPrice', vinylData.newPrice);
      setValue('coverImage', vinylData.coverImage)
    }
  }, [vinylData, setValue]) // Dependency on vinylData to update the form when the data changes

  // onSubmit handler for the form, which sends the updated vinyl data to the server
  const onSubmit = async (data) => {
    const updateVinylData = {
      title: data.title,
      artist: data.artist,
      genre: data.genre,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || vinylData.coverImage,// Using existing cover image if no new one is provided
    };
    try {
      await axios.put(`${BASE_URL()}/api/vinyls/edit/${id}`, updateVinylData, { // Sending PUT request to update vinyl data
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Including the token for authentication
        }
      })
    // Show success alert using SweetAlert2
      Swal.fire({
        title: "Vinyl Updated",
        text: "Your vinyl is updated successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      await refetch() // Refetch vinyl data to update the state
    } catch (error) {
      console.log("Failed to update vinyl.");
      alert("Failed to update vinyl.");
    }
  }
  if (isLoading) return <Loading /> // If the data is still loading, display a loading spinner
  if (isError) return <div>Error fetching vinyl data</div>

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Vinyl</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter vinyl title"
          register={register}
        />

        <InputField
          label="Artist"
          name="artist"
          placeholder="Enter vinyl artist"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Genre"
          name="genre"
          options={[
            { value: '', label: 'Choose A Genre' },
            { value: 'alternative rock', label: 'Alternative Rock' },
            { value: 'blues', label: 'Blues' },
            { value: 'classick Rock', label: 'Classick Rock' },
            { value: 'electronic', label: 'Electronic' },
            { value: 'funk & soul', label: 'Funk & Soul' },
            { value: 'hip hop', label: 'Hip Hop' },
            { value: 'jazz', label: 'Jazz' },
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          step="any"
          placeholder="Old Price"
          register={register}
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          step="any"
          placeholder="New Price"
          register={register}
        />

        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Cover Image URL"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-secondary text-white font-bold rounded-md">
          Update Vinyl
        </button>
      </form>
    </div>
  )
}

export default UpdateVinyl