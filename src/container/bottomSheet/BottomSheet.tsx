import { Box, styled } from "@mui/material";
import React from "react";
import Header from "./Header";

interface IProps {
  open: boolean;
  onClose: () => void;
}
export default function BottomSheet(props: IProps) {
  const { open, onClose } = props;
  return (
    <BoxSTwrapper
      sx={{
        transform: `translateY(${open ? 300 : 1200}px)`,
      }}
    >
      <Header onClose={onClose} />
    </BoxSTwrapper>
  );
}

const BoxSTwrapper = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    zIndex: 1,
    inset: 0,
    bottom: 0,
    borderTopRightRadius: "12px",
    borderTopLeftRadius: "12px",
    backgroundColor: "#fafafa",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.6)",
    height: `${600}px`,
    width: "100%",
    transition: "transform 550ms ease-out",
  };
});
