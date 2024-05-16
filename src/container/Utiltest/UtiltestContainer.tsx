import useResponsive from "@/hooks/useResponsive";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

export default function UtiltestContainer() {
  const isLarge = useResponsive("up", "lg");
  const isMedium = useResponsive("down", "lg");
  const isSmall = useResponsive("down", "md");
  // const isMedium = useResponsive("between", "md", "md", "lg");
  // const isSmall = useResponsive("between", "sm", "sm", "md");
  const isXs = useResponsive("down", "sm");

  const brFunction = (text: string) => {
    if (text.includes("\n&lg") && isLarge) {
      const replacedText = text.split("\n&lg").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
      return replacedText;
    }
    if (text.includes("\n&md") && isMedium) {
      const replacedText = text.split("\n&md").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
      return replacedText;
    }
    if (text.includes("\n&sm") && isSmall) {
      const replacedText = text.split("\n&sm").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
      return replacedText;
    }
    if (text.includes("\n&xs") && isXs) {
      const replacedText = text.split("\n&xs").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
      return replacedText;
    }
    return text
      .replaceAll("\n&lg", "")
      .replaceAll("\n&md", "")
      .replaceAll("\n&sm", "")
      .replaceAll("\n&xs", "");
  };

  const isMedium2 = useResponsive("down", "md");
  const isSmall2 = useResponsive("down", "sm");

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", textAlign: "center" }}>
      <TextWrapper>
        <Typography
          variant="h4"
          fontFamily={"NanumSquareRound"}
          fontWeight={800}
          color={"#212121"}
        >
          이제는 아이의 ‘마음’도
          {isMedium2 && isSmall2 && <br />}
          챙길 때입니다.
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily={"NanumSquareRound"}
          fontWeight={700}
          color={"#212121"}
        >
          서울시 초중고를 포함해
          {isMedium2 && isSmall2 && <br />}
          많은 학교, 기관에서
          <br />
          <span style={{ background: "#FFF8E1" }}>그림심리검사 서비스를</span>
          {isMedium2 && isSmall2 && <br />}
          사용하고 있습니다.
        </Typography>
      </TextWrapper>

      <hr />
      <hr />
      <hr />
      <hr />
      <TextWrapper>
        <Typography
          variant="h4"
          fontFamily={"NanumSquareRound"}
          fontWeight={800}
          color={"#3186ff"}
        >
          이제는 아이의 <br className="br-is400" />
          ‘마음’도
          <br className="br-isSmall" />
          챙길 때입니다.
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily={"NanumSquareRound"}
          fontWeight={700}
          color={"#3186ff"}
        >
          서울시 초중고를 포함해 <br className="br-isSmall" />
          많은 학교, 기관에서 <br />
          <span style={{ background: "#FFF8E1" }}>그림심리검사 서비스를</span>
          <br className="br-isSmall" />
          사용하고 있습니다.
        </Typography>
      </TextWrapper>
      <hr />
      <hr />
      <hr />
      <hr />
      <TextWrapper>
        <Typography
          variant="h4"
          fontFamily={"NanumSquareRound"}
          fontWeight={800}
          color={"#799fff"}
        >
          {brFunction("이제는 아이의 ‘마음’도\n&sm챙길 때입니다.")}
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily={"NanumSquareRound"}
          fontWeight={700}
          color={"#799fff"}
        >
          {brFunction("서울시 초중고를 포함해\n&sm 많은 학교, 기관에서")} <br />
          <span style={{ background: "#FFF8E1" }}>그림심리검사 서비스를</span>
          {brFunction("사용하고 있습니다.")}
        </Typography>
      </TextWrapper>
    </Box>
  );
}

const TextWrapper = styled(Box)(({ theme }) => {
  return {
    wordBreak: "keep-all",
    padding: "40px 0px",
    gap: "12px",
    display: "flex",
    flexDirection: "column",
  };
});
