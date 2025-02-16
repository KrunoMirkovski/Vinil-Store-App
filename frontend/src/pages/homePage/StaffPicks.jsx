import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import VinylCard from '../vinylsPage/vinylCard';
import { useGetAllVinylsQuery } from '../../redux/features/vinyls/vinylApi';

const StaffPicks = () => {
     const{data:vinyls = [] } = useGetAllVinylsQuery();

  return (
    <div className='py-6 px-6 mb-12'>
         <h2 className='text-3xl font-bold pl-6 mb-2'>Staff Picks For You</h2>
         <div className='w-72 h-[4px] bg-primary ml-6 mb-8'></div>

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
                         vinyls.length > 0 && vinyls.slice(6, 16).map((vinyl, index) => (
         
                          <SwiperSlide key={index} ><VinylCard vinyl={vinyl}/></SwiperSlide>
                          
                         ))
                     }
               </Swiper>
    </div>
  )
}

export default StaffPicks