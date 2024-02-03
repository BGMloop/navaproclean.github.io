

import React from "react";
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import clientAvatar from '../../assets/images/client-avatar.png'
import {HiStar} from 'react-icons/hi'


const Testimonial = () => {
    return (
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper 
            modules={[Pagination]}
            spaceBetween={30}
            slidePerView={1}
            pagination={{clickable:true}}
            breakpoints={{
                    640: {
                        slidePerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidePerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidePerView: 3,
                        spaceBetween: 30,
                    },
            }}>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                    <div className="flex items-center gap-[13px]">
                        <img src={clientAvatar} alt="" />
                        <div><h4 className="text-[18px] leading-[30px] font-semibold text-emeraldGreen">
                           Bwalya Maele
                        </h4>
                        FaqItem
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                        </div>
                     </div>
                    </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Great job on deep clean. Quick Response. Affordable Price.
                     Should have got it sooner!"
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                    <div className="flex items-center gap-[13px]">
                        <img src={clientAvatar} alt="" />
                        <div><h4 className="text-[18px] leading-[30px] font-semibold text-emeraldGreen">
                           Bwalya Maele
                        </h4>
                        {/* ============ supposed to be yellowColor  ============= */}
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                        </div>
                     </div>
                    </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Great job on deep clean. Quick Response. Affordable Price.
                     Should have got it sooner!"
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                    <div className="flex items-center gap-[13px]">
                        <img src={clientAvatar} alt="" />
                        <div><h4 className="text-[18px] leading-[30px] font-semibold text-emeraldGreen">
                           Bwalya Maele
                        </h4>
                        {/* ============ supposed to be yellowColor  ============= */}
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                        </div>
                     </div>
                    </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Great job on deep clean. Quick Response. Affordable Price.
                     Should have got it sooner!"
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                    <div className="flex items-center gap-[13px]">
                        <img src={clientAvatar} alt="" />
                        <div><h4 className="text-[18px] leading-[30px] font-semibold text-emeraldGreen">
                           Bwalya Maele
                        </h4>
                        {/* ============ supposed to be yellowColor  ============= */}
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                            <HiStar className="text-safetyOrange w-[18px] h-5" />
                        </div>
                     </div>
                    </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Great job on deep clean. Quick Response. Affordable Price.
                     Should have got it sooner!"
                  </p>
                </div>
            </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default Testimonial