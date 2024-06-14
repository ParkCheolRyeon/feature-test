import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import BG_YELLOW from "@/public/images/home/bg-yellow.svg";
import BG_RED from "@/public/images/home/bg-red.svg";
import BG_BLUE from "@/public/images/home/bg-blue.svg";
import POINT1 from "@/public/images/home/point1.svg";
import SectionSwiper from "./SectionSwiper";

export default function TestContainer() {
  const [bgImage, setBgImage] = useState(BG_BLUE); // 초기 배경 이미지 설정
  const [bg, setBg] = useState("#B3E5FC"); // 초기 배경 이미지 설정

  // 배경 이미지 변경 함수
  const changeBackground = (value: string) => {
    console.log(value);

    if (value === "b") {
      setBgImage(BG_BLUE);
      setBg("#B3E5FC");
      return;
    }
    if (value === "r") {
      setBgImage(BG_RED);
      setBg("#FCE4EC");
      return;
    }
    if (value === "y") {
      setBgImage(BG_YELLOW);
      setBg("#FFECB3");
      return;
    }
    console.log(bgImage);
  };

  return (
    <Wrapper>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          padding: "80px 24px 24px 24px",
          border: "1px solid green",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Title variant="h2">아트봉봉 수업으로</Title>
        <Title variant="h2" color="#03A9F4">
          창의력 세계를 그리자
        </Title>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          minHeight: "320px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageST
          src={bgImage}
          alt="MAIN_BG"
          priority
          objectFit="cover"
          width={1200}
          height={320}
        />
      </Box>
      <Box
        sx={{
          gap: "60px",
          width: "100%",
          display: "flex",
          padding: "80px 24px",
          backgroundColor: bg,
          flexDirection: "column",
          alignItems: "center",
          transition: "backgroundColor 1.5s ease-in-out",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <Image src={POINT1} alt="POINT1" width={140} height={56} />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title variant="h2">최고 명문 미대 출신 선생님과</Title>
            <Title variant="h2" color="#03A9F4">
              1:1 맞춤 미술 수업!
            </Title>
          </Box>
        </Box>

        <SectionSwiper
          onClick={(value: any) => {
            changeBackground(value);
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <ButtonST onClick={() => changeBackground("y")}>Yellow</ButtonST>
        <ButtonST onClick={() => changeBackground("r")}>Red</ButtonST>
        <ButtonST onClick={() => changeBackground("b")}>Blue</ButtonST>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const Title = styled(Typography)(() => ({
  fontFamily: "NanumSquareRound",
  fontWeight: 800,
}));

const ImageST = styled(Image)(() => ({
  objectFit: "cover",
  transition: "duration 1.5s ease-in-out", // opacity 전환 효과 추가
}));

const ButtonST = styled(Button)(() => ({
  margin: "0 10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#03A9F4",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  outline: "none",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#0288D1",
  },
}));
