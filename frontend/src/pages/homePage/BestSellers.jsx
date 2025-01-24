import {useEffect, useState} from 'react'
import VinylCard from '../vinylsPage/vinylCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


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
    <div className='py-6 px-6 mb-12'>
        <h2 className='text-3xl font-bold mb-2 pl-6'>BestSellers</h2>
        <div className='w-44 h-[4px] bg-primary ml-6 mb-8'></div>

    {/*genre filter*/}
        <div className='mb-12 flex items-center pl-6'>
            <select 
            onChange={(e) => setselectedGenre(e.target.value)} name="genre" id="genre" className='border bg-[#efefef] border-gray-400 rounded-md px-3 py-2 focus:outline-none'>
              {
                genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))
              }
            </select>
        </div>

        <Swiper
        slidesPerView={1}
        spaceBetween={40}
        navigation={true}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
            {
                filteredVinyls.length > 0 && filteredVinyls.map((vinyl, index) => (

                 // <div key={vinyl.id} className="p-4 border rounded-md shadow"> 
                 //     <h3 className="text-lg font-semibold">{vinyl.title}</h3>
                 //     <p className="text-sm text-gray-500 capitalize">{vinyl.artist}</p>
                 // </div>

                 <SwiperSlide key={index} ><VinylCard vinyl={vinyl}/></SwiperSlide>
                 
                ))
            }
      </Swiper>

    {/* Display Filtered Vinyls */}

    </div>
  )
}

export default BestSellers