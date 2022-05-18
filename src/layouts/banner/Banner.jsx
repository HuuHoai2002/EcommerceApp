import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper";

import { BannerItem } from "../components/bannerItem/index";

const Banner = () => {
  return (
    <Fragment>
      {
        <Swiper speed={1000} grabCursor={true} slidesPerView={"auto"}>
          {new Array(3).fill(0).map((item, index) => (
            <SwiperSlide key={item + index}>
              <BannerItem />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </Fragment>
  );
};

export default Banner;
