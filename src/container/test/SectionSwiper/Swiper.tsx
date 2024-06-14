import { Box, styled } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LEFT_ARROW from "@/public/images/icons/arrow/keyboard-arrow-left-black.svg";
import RIGHT_ARROW from "@/public/images/icons/arrow/keyboard-arrow-right-black.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import Image from "next/image";

interface IProps {
  onClick: (value: any) => void;
}

export default function SwiperComponent(props: IProps) {
  const { onClick } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = useState<any>("blue");

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const mp4Url = "/images/curriculum/packages/section-video/video-trial.mp4";

  const mp4Video = (
    <VideoST playsInline muted autoPlay loop mp4Url={mp4Url}>
      <source src={mp4Url} />
    </VideoST>
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <SwiperST
        slidesPerView={1}
        spaceBetween={30}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: "#art_psychology_slider_pagination",
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
        style={{
          margin: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{
          "& .swiper-pagination-bullet-active": {
            backgroundColor: "#fff",
          },
          "& .swiper-pagination-bullet": {
            backgroundColor: "#000",
          },
        }}
      >
        <SwiperSlideST key={0}>
          <BoxST sx={{ padding: "12px" }}>
            {mp4Url.toString() ===
              "/images/curriculum/packages/section-video/video-regular.mp4" && (
              <HideRegularVideoBorder />
            )}
            {mp4Video}
          </BoxST>
        </SwiperSlideST>
        <SwiperSlideST key={1}>
          <BoxST sx={{ padding: "12px" }}>
            {mp4Url.toString() ===
              "/images/curriculum/packages/section-video/video-regular.mp4" && (
              <HideRegularVideoBorder />
            )}
            {mp4Video}
          </BoxST>
        </SwiperSlideST>
        <SwiperSlideST key={2}>
          <BoxST sx={{ padding: "12px" }}>
            {mp4Url.toString() ===
              "/images/curriculum/packages/section-video/video-regular.mp4" && (
              <HideRegularVideoBorder />
            )}
            {mp4Video}
          </BoxST>
        </SwiperSlideST>
      </SwiperST>
      <SliderButton
        ref={prevRef}
        direction="prev"
        onClick={() => {
          if (activeIndex === 0) {
            onClick("b");
            setValue("blue");
          } else if (activeIndex === 1) {
            onClick("y");
            setValue("yellow");
          } else if (activeIndex === 2) {
            onClick("r");
            setValue("red");
          }
        }}
      >
        <Image
          src={LEFT_ARROW}
          width={32}
          height={32}
          alt="left-arrow"
          style={{ marginRight: "2px" }}
        />
      </SliderButton>
      <SliderButton
        ref={nextRef}
        direction="next"
        onClick={() => {
          if (activeIndex === 0) {
            onClick("b");
          } else if (activeIndex === 1) {
            onClick("y");
          } else if (activeIndex === 2) {
            onClick("r");
          }
        }}
      >
        <Image
          src={RIGHT_ARROW}
          width={32}
          height={32}
          alt="left-arrow"
          style={{ marginLeft: "2px" }}
        />
      </SliderButton>

      <SliderPagination id="art_psychology_slider_pagination" value={value} />
    </Box>
  );
}

const SwiperST = styled(Swiper)(({ theme }) => {
  return {
    zIndex: 0,
    "& .swiper-wrapper": {
      boxSizing: "border-box",
    },
    "& .swiper-button-next::after,.swiper-button-prev::after ": {
      display: "none",
    },
    "& .swiper-button-next": {
      width: "52px",
      height: "52px",
      borderRadius: "100%",
      backgroundColor: "#fff",
      border: "2.5px solid #e0e0e0",
      background: `url(/images/icons/swiper-next-arrow.svg) no-repeat center center #fff`,
      backgroundSize: "0% 0% 0% 0%",
    },
    "& .swiper-button-prev": {
      width: "52px",
      height: "52px",
      borderRadius: "100%",
      backgroundColor: "#fff",
      border: "2.5px solid #e0e0e0",
      background: `url(/images/icons/swiper-prev-arrow.svg) no-repeat center center #fff`,
      backgroundSize: "0% 0% 0% 0%",
    },
    "& .swiper-slide": {
      alignSelf: "center",
      justifyContent: "center",
      backgroundPosition: "center",
    },

    [theme.breakpoints.down("sm")]: {
      "& .swiper-button-prev": {
        display: "none",
      },
      "& .swiper-button-next": {
        display: "none",
      },
    },
    "&.swiper-horizontal > .swiper-pagination-bullets": {
      bottom: 0,
    },
  };
});

const SwiperSlideST = styled(SwiperSlide)(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    position: "relative",
    backgroundSize: "contain",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
});

const BoxST = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    maxWidth: "760px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#e0e0e0",
    borderRadius: "24px",
    // [theme.breakpoints.down("md")]: {
    //   borderRadius: "31px",
    //   maxWidth: "406px",
    // },
  };
});

const VideoST = styled("video")<{ mp4Url: string }>(({ theme, mp4Url }) => {
  return {
    width: "736px",
    height: "553px",
    borderRadius: "18px",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      borderRadius: "24px",
    },
  };
});

const HideRegularVideoBorder = styled(Box)(({ theme }) => {
  return {
    inset: 0,
    position: "absolute",
    overflow: "hidden",
    border: "11.5px solid #e0e0e0",
    borderRadius: "24px",
    [theme.breakpoints.down("md")]: {
      border: "13.5px solid #e0e0e0",
      borderRadius: "31px",
    },
  };
});

const SliderButton = styled("button")<{ direction: "prev" | "next" }>(
  ({ theme, direction }) => ({
    cursor: "pointer",

    position: "absolute",
    top: "45%",
    left: direction === "prev" ? "6px" : "auto",
    right: direction === "next" ? "6px" : "auto",
    transform: "translateY(-50%)",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    visibility: "hidden",

    width: "52px",
    height: "52px",
    borderRadius: "52px",
    backgroundColor: "white",
    border: "1px solid #E0E0E0",
    color: "#424242",
    fontSize: "32px",

    transition: "opacity 0.5s ease",

    "&.swiper-button-disabled": {
      opacity: 0,
    },

    [theme.breakpoints.up("md")]: {
      visibility: "visible",
    },
  })
);

const SliderPagination = styled(Box)<{ value: any }>(({ theme, value }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",

  marginTop: "24px",

  ".swiper-pagination-bullet": {
    margin: "0 !important",
    width: "12px",
    height: "12px",
    backgroundColor: "#E0E0E0",
    opacity: 1,
  },

  ".swiper-pagination-bullet-active": {
    backgroundColor: value,
  },
}));
