import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import sideImg from '../../assets/bgauth.avif'

const DashboardBoard = () => {
    const images = [
        "https://images.unsplash.com/photo-1736182792109-2db1c298a703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1734549547878-9de3d46d8fc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1736857723116-9f6dffc39207?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <div className="grid grid-cols-12 mt-6 gap-4">
            <div className="col-span-12 md:col-span-7">
                <div className="w-auto p-6 h-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between gap-2 min-h-[250px]">
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-lg text-left font-bold text-gray-900 dark:text-white">worlddd</p>
                                <div className="text-sm text-left font-semibold text-gray-900 dark:text-white">
                                    worlddd hfkh hihfiw hi7f gdqjhq text fjhfwg cufw gufhw
                                </div>
                            </div>
                            <div>
                                <button className="mt-4 w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">
                                    Read more
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src={sideImg}
                                width="250px"
                                className="h-full"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-5">
            <div className="w-auto p-6 h-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Swiper
                        pagination={{ clickable: true }} // Enable pagination dots
                        loop={true} // Enable infinite loop
                        autoplay={{
                            delay: 2000, // Slide transition every 2 seconds
                            disableOnInteraction: false, // Keep autoplay active after interaction
                        }}
                        modules={[Pagination, Autoplay]} // Use Swiper modules
                        className="mySwiper"
                        style={{ height: "100%" }} // Ensure the Swiper takes full height
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default DashboardBoard;
