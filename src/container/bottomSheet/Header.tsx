import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

interface IProps {
  onClose: () => void;
}

export default function Header(props: IProps) {
  const { onClose } = props;
  return (
    <BoxSTwrapper>
      <Button variant="outlined" onClick={onClose}>
        close
      </Button>
      <BoxSThandle />
    </BoxSTwrapper>
  );
}

const BoxSTwrapper = styled(Box)(() => {
  return {
    height: "48px",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    position: "relative",
    paddingTop: "16px",
    paddingBottom: "4px",
  };
});

const BoxSThandle = styled(Box)(() => {
  return {
    width: "32px",
    height: "4px",
    borderRadius: "2px",
    backgroundColor: "#d0d0d0",
    margin: "auto",
  };
});
