import { useState } from "react";
import { useForm } from "react-hook-form";
import {usePostVinylMutation} from "./../../../redux/features/vinyls/vinylApi";
import InputField from "./inputField";
import SelectField from "./selectedField";
import Swal from "sweetalert2";

const AddVinyl = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Destructuring react-hook-form methods to handle form state and validation
    const [imageFile, setimageFile] = useState(null);  // State hook for managing image file
    const [imageFileName, setimageFileName] = useState('') // State for storing the selected image file name

    const [addVinyl, {isLoading, isError}] = usePostVinylMutation() // Mutation hook for posting vinyl data
    
    // Handle form submission
    const onSubmit = async (data) => {
        const newVinylData = { // Prepare data including image file name
            ...data,
            coverImage: imageFileName
        }
        try {
            await addVinyl(newVinylData).unwrap(); // Add vinyl to the database with the image name
            Swal.fire({
                title: "Vinyl added",
                text: "Your vinyl is uploaded successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
              });
              reset(); // Reset form and clear image selection
              setimageFileName('')
              setimageFile(null);
        } catch (error) {
            console.error(error);
            alert("Failed to add vinyl. Please try again.")   
        }
      
    }

    // Function to handle image file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setimageFile(file);
            setimageFileName(file.name);
        }
    }
  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Vinyl</h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        {/* Reusable Input Field for Title */}
        <InputField
          label="Title"
          name="title"
          placeholder="Enter vinyl title"
          register={register}
        />

        {/* Reusable Textarea for Artist */}
        <InputField
          label="Artist"
          name="artist"
          placeholder="Enter artist name"
          type="textarea"
          register={register}

        />

        {/* Reusable Select Field for Genre */}
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

        {/* Trending Checkbox */}
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

        {/* Old Price */}
        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          step="any"
          placeholder="Old Price"
          register={register}
         
        />

        {/* New Price */}
        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          step="any"
          placeholder="New Price"
          register={register}
          
        />

        {/* Cover Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
          {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-2 bg-primary text-white font-bold rounded-md">
         {
            isLoading ? <span className="">Adding.. </span> : <span>Add Vinyl</span>
          }
        </button>
      </form>
    </div>
  )
}

export default AddVinyl