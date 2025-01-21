import {useEffect, useState} from 'react'

const genres = ["Choose a genre", "Alternative Rock", "Blues", "Classic Rock", "Electronic", "Funk & Soul", "Hip Hop", "Jazz"]

const BestSellers = () => {
    const [vinyls, setVinyls] = useState([]);
    const [selectedGenre, setselectedGenre] = useState("Choose a genre");

    useEffect(() => {
        {/*Fetch vinyls data from JSON*/}
        fetch("vinyls.json")
        .then(res => res.json())
        .then((data) => setVinyls(data))
        .catch((error) => console.error("Error fetching vinyls:", error))
    }, [])

    {/*console.log(vinyls)*/}

    {/*Filter vinyls based on selected genre*/}
    const filteredVinyls = selectedGenre ==="Choose a genre" 
    ? vinyls
    : vinyls.filter(
        (vinyl) => vinyl.genre.toLowerCase() === selectedGenre.toLowerCase())

    console.log(filteredVinyls)



  return (
    <div className='py-6'>
        <h2 className='text-2xl font-semibold mb-5'>BestSellers</h2>

    {/*genre filter*/}
        <div className='mb-48 flex items-center'>
            <select 
            onChange={(e) => setselectedGenre(e.target.value)} name="genre" id="genre" className='border bg-[#d2d2d2] border-gray-400 rounded-md px-3 py-3 focus:outline-none'>
              {
                genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))
              }
            </select>
        </div>

    {/* Display Filtered Vinyls */}

        <div className="space-y-4">
            {filteredVinyls.map((vinyl) => (

                <div key={vinyl.id} className="p-4 border rounded-md shadow"> 
                    <h3 className="text-lg font-semibold">{vinyl.title}</h3>
                    <p className="text-sm text-gray-500 capitalize">{vinyl.artist}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestSellers