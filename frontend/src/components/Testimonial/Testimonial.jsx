import React from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import clientAvatar from '../../assets/images/client-avatar.png';
import { HiStar } from 'react-icons/hi';

const TestimonialSlide = ({ name, text }) => (
    <div className="py-[30px] px-5 rounded-[13px] bg-[#fff] shadow-lg">
        <div className="flex items-center gap-[13px]">
            <img src={clientAvatar} alt={`${name}'s avatar`} className="w-[50px] h-[50px] rounded-full" />
            <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-emeraldGreen">
                    {name}
                </h4>
                <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, index) => (
                        <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                    ))}
                </div>
            </div>
        </div>
        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            {text}
        </p>
    </div>
);

const testimonialData = [
    {
        name: "Bwalya Maele",
        text: "Great job on deep clean. Quick Response. Affordable Price. Should have got it sooner!"
    },
    // Add more testimonials here
];

const Testimonial = () => {
    return (
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper 
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {testimonialData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialSlide {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;