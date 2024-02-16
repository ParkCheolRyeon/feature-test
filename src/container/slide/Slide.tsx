import { Box, Typography, styled } from "@mui/material";
import { useRef, useState } from "react";
import Carousel from "./Carousel/Carousel";

const imageDatas = [
  {
    index: "0",
    src: "/images/home/section-3-0.png",
    alt: "img0",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    index: "1",
    src: "/images/home/section-3-1.png",
    alt: "img1",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    index: "2",
    src: "/images/home/section-3-2.png",
    alt: "img2",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    index: "3",
    src: "/images/home/section-3-3.png",
    alt: "img3",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    index: "4",
    src: "/images/home/section-3-4.png",
    alt: "img4",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    index: "5",
    src: "/images/home/section-3-4.png",
    alt: "img5",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    index: "6",
    src: "/images/home/section-3-4.png",
    alt: "img6",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
  {
    index: "7",
    src: "/images/home/section-3-4.png",
    alt: "img7",
    content:
      "커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.커리큘럼의 설명에 관한 부분으로 사업 기획에 따라 상세 설명을 추가합니다.",
  },
];

const CAROUSEL_IMAGES = [
  "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg",
  "https://img.freepik.com/premium-vector/abstract-pastel-color-background-with-pink-purple-gradient-effect-graphic-design-decoration_120819-463.jpg",
  "https://media.architecturaldigest.com/photos/6080a73d795a7b010f3dd2e0/2:1/w_2700,h_1350,c_limit/GettyImages-1213929929.jpg",
];

export default function SlideContainer() {
  const swiperRef = useRef<any>();

  const [prevDisable, setPrevDisable] = useState(true);
  const [NextDisable, setNextDisable] = useState(false);
  const [hide, setHide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("0");

  const handleSlidePrev = () => {
    swiperRef.current.slidePrev();

    setNextDisable(false);

    if (swiperRef.current.isBeginning) {
      setPrevDisable(true);
    }
  };

  return (
    <BoxSTsectionThreeWrapper>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "80px 24px",
          gap: "40px",
          display: "flex",
          border: "4px solid red",
          flexDirection: "column",
        }}
      >
        <BoxSTtextWrapper>
          <Box>
            <TypographySTtitle variant="h3">
              아트봉봉만의 커리큘럼
            </TypographySTtitle>
          </Box>
          <Box>
            <TypographySTsubTitle>
              아트봉봉만의 커리큘럼 한 줄 설명 아트봉봉만의 커리큘럼 한 줄 설명
              아트봉봉만의 커리큘럼 한 줄 설명
            </TypographySTsubTitle>
          </Box>
        </BoxSTtextWrapper>

        {/* <Box
          sx={{
            width: "100%",
            // border: "1px solid purple",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "474px",
          }}
        >
        </Box> */}
        <Carousel />
      </div>
    </BoxSTsectionThreeWrapper>
  );
}

const BoxSTsectionThreeWrapper = styled(Box)(() => {
  return {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    // gap: "40px",
  };
});

const BoxSTtextWrapper = styled(Box)(() => {
  return {
    gap: "8px",
    width: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
  };
});

const TypographySTtitle = styled(Typography)(() => {
  return {
    fontWeight: "700",
    color: "#212121",
    lineHeight: "44px",
  };
});

const TypographySTsubTitle = styled(Typography)(() => {
  return {
    fontSize: "16px",
    fontWeight: "600",
    color: "#616161",
    lineHeight: "22px",
  };
});
