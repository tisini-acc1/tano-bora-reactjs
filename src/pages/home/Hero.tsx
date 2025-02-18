import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/swiper-bundle.css";

import { data } from "@/lib/data";
import Button from "@/components/ui/Button";
import HeroHeader from "@/components/site/HeroHeader";

const HeroSection = () => {
  return (
    <section className="">
      <Swiper
        spaceBetween={30}
        speed={3000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {data.map(
          ({
            id,
            colorDeep,
            colorLite,
            mainText,
            subText,
            shadow,
            mobileShadow,
            img,
          }) => (
            <SwiperSlide
              key={id}
              style={{ backgroundColor: `${colorLite}` }}
              className="w-full h-screen flex flex-col md:gap-10"
            >
              <HeroHeader colorDeep={colorDeep} />

              <HeroSlider
                colorDeep={colorDeep}
                mainText={mainText}
                shadow={shadow}
                mobileShadow={mobileShadow}
                subText={subText}
                img={img}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

type SliderProps = {
  colorDeep: string;
  mainText: string;
  shadow: string;
  mobileShadow: string;
  subText: string;
  img: string;
};

const HeroSlider = ({
  colorDeep,
  mainText,
  shadow,
  mobileShadow,
  subText,
  img,
}: SliderProps) => {
  return (
    <div
      className={`flex flex-col items-start px-4 lg:flex-row lg:items-center z-10 relative overflow-hidden md:py-24 md:px-16 py-10`}
    >
      <div className="w-full flex items-center text-center mb-5 flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left md:mb-0">
        <h1 className="text-4xl mx-auto md:text-5xl lg:mx-0 font-bold leading-tight">
          We're about <span style={{ color: `${colorDeep}` }}>{mainText}</span>
        </h1>

        <p className="leading-normal text-lg md:text-2xl">{subText}</p>

        <Button
          onClick={() => {}}
          type={"button"}
          text={"Play Today"}
          className={
            "mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5"
          }
          style={
            window.innerWidth > 767
              ? { backgroundColor: `${colorDeep}`, boxShadow: `${shadow}` }
              : {
                  backgroundColor: `${colorDeep}`,
                  boxShadow: `${mobileShadow}`,
                }
          }
        />
      </div>

      <div className="w-full lg:w-3/5 lg:mt-6 relative">
        <img
          src={img}
          alt={img}
          loading="eager"
          className="w-3/5 mx-auto"
          width="500"
          height="400"
        />
      </div>
    </div>
  );
};

export default HeroSection;
