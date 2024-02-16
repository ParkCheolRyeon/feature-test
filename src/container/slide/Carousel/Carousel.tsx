import {
  Pagination,
  EffectFade,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/material";

import ImgNextArrow from "/public/images/icons/swiper-next-arrow.svg";
import ImgPrevArrow from "/public/images/icons/swiper-prev-arrow.svg";
import Image from "next/image";

const imageDatas = [
  {
    imgUrl: "/images/home/section-3-0.png",
    alt: "section-3-0.png",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    imgUrl: "/images/home/section-3-1.png",
    alt: "section-3-1.png",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    imgUrl: "/images/home/section-3-2.png",
    alt: "section-3-2.png",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    imgUrl: "/images/home/section-3-3.png",
    alt: "section-3-3.png",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    imgUrl: "/images/home/section-3-4.png",
    alt: "section-3-4.png",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    imgUrl: "/images/home/section-3-4.png",
    alt: "section-3-5.png",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    imgUrl: "/images/home/section-3-4.png",
    alt: "section-3-6.png",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideArrow(false);
    }, 750);
  }, [currentIndex]);

  const swiperRef = useRef<any>();

  const handleSlidePrev = () => {
    swiperRef?.current?.slidePrev();
    setHideArrow(true);
  };

  const handleSlideNext = () => {
    swiperRef?.current?.slideNext();
    setHideArrow(true);
  };

  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={80}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 2,
        slideShadows: false,
      }}
      pagination={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      style={{
        width: "100%",
        maxWidth: "1200px",
        height: "100%",
        display: "flex",
        gap: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
      loop={true}
      speed={800}
      loopAdditionalSlides={1}
      loopAddBlankSlides={false}
      onSlideChange={(e) => {
        setCurrentIndex(e.realIndex);
      }}
    >
      {imageDatas.map((imageData: any, index) => {
        const activeSlide = index === currentIndex;
        return (
          <>
            <SwiperSlide
              key={index}
              style={{
                width: "100%",
                height: "474px",
                maxWidth: "380px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "100%",
                  border: index === currentIndex ? "1px solid #24bef0" : "",
                  // animation: "ani 1s 1500ms ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "24px",
                  backgroundColor: index === currentIndex ? "#fff" : "",
                }}
              >
                <div
                  style={{
                    transition: "opacity 0.25s ease-in-out",
                    opacity: index !== currentIndex ? 0 : 1,
                  }}
                >
                  커리큘럼 제목 = {index}
                </div>
                <div
                  style={{
                    // transition: "width 1300s",
                    width: "100%",
                    // maxWidth: activeSlide ? "320px" : "240px",
                    maxWidth: "320px",
                    // height: "200px",
                    // border: "1px solid blue",
                    border: "1px solid #e0e0e0",
                    borderRadius: "16px",
                  }}
                >
                  <img
                    src={imageData.imgUrl}
                    alt={imageData.alt}
                    style={{
                      // 320 contain 교체
                      objectFit: "fill",

                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      maxWidth: "320px",
                      width: "100%",
                      height: "200px",
                      borderRadius: "16px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    transition: "opacity 0.25s ease-in-out",
                    opacity: index !== currentIndex ? 0 : 1,
                    width: "100%",
                    maxWidth: "320px",
                  }}
                >
                  {imageData.content}
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
      <Box
        sx={{
          width: "420px",
          display: "flex",
          // border: "1px solid green",
          position: "fixed",
          justifyContent: "space-between",
          zIndex: 1,
          alignItems: "center",
          visibility: hideArrow ? "hidden" : "visible",
        }}
      >
        <Box
          sx={{
            "&.swiper-button-next::after ": {
              display: "none",
            },
            "&.swiper-button-next": {
              width: "52px",
              height: "52px",
              borderRadius: "100%",
              backgroundColor: "#fff",
              backgroundPosition: "center",
              border: "1px solid #e0e0e0",
              backgroundRepeat: "no-repeat",
            },
            borderRadius: "100%",
            border: "1px solid #E0E0E0",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
          className="swiper-button-prev"
          onClick={handleSlidePrev}
        >
          <Image src={ImgPrevArrow} width={32} height={32} alt="prevArrow" />
        </Box>
        <Box
          sx={{
            "&.swiper-button-prev::after ": {
              display: "none",
            },
            "&.swiper-button-prev": {
              width: "52px",
              height: "52px",
              borderRadius: "100%",
              backgroundColor: "#fff",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid #e0e0e0",
            },
            borderRadius: "100%",
            justifyContent: "center",
            display: "flex",
            border: "1px solid #e0e0e0",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
          className="swiper-button-next"
          onClick={handleSlideNext}
        >
          <Image src={ImgNextArrow} width={32} height={32} alt="nextArrow" />
        </Box>
      </Box>
    </Swiper>
  );
}

const NextST = styled(Box)(() => {
  return {
    "&.swiper-button-next::after ": {
      display: "none",
    },
    "&.swiper-button-next": {
      width: "52px",
      height: "52px",
      borderRadius: "100%",
      backgroundColor: "#fff",
      backgroundPosition: "center",
      border: "1px solid #e0e0e0",
      backgroundRepeat: "no-repeat",
    },
    borderRadius: "100%",
    border: "1px solid #E0E0E0",
  };
});

const PrevST = styled(Box)(() => {
  return {
    "&.swiper-button-prev::after ": {
      display: "none",
    },
    "&.swiper-button-prev": {
      width: "52px",
      height: "52px",
      borderRadius: "100%",
      backgroundColor: "#fff",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: "1px solid #e0e0e0",
    },
    borderRadius: "100%",
  };
});

const BoxSTnavigationWrapper = styled(Box)(() => {
  return {};
});
