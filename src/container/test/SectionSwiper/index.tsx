import { Box, styled } from "@mui/material";

import SwiperComponent from "./Swiper";

interface IProps {
  onClick: (value: any) => void;
}

export default function SectionSwiper(props: IProps) {
  const { onClick } = props;

  return (
    <BoxSTwrapper>
      <BoxSTswiper>
        <SwiperComponent
          onClick={(value: any) => {
            onClick(value), console.log("asdfadsfadsf", value);
          }}
        />
      </BoxSTswiper>
    </BoxSTwrapper>
  );
}

const BoxSTwrapper = styled(Box)(({ theme }) => {
  return {
    gap: "60px",
    width: "100%",
    display: "flex",
    maxWidth: "1200px",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 0px",
    [theme.breakpoints.down("lg")]: {
      gap: "40px",
      maxWidth: "900px",
      textAlign: "center",
      padding: "80px 0px",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      gap: "40px",
      maxWidth: "600px",
      padding: "80px 24px 60px 24px",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "40px",
    },
  };
});

const BoxSTswiper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "928px",
    alignItems: "center",
    justifyContent: "center",
  };
});
