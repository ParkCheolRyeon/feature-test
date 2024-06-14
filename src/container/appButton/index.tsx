import { Button, styled } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  disable: boolean;
}

export default function AppButton(props: IProps) {
  const { text, disable } = props;
  return (
    <AppButtonST
      variant="contained"
      disabled={disable}
      disable={disable.toString()}
    >
      {text}
    </AppButtonST>
  );
}

const AppButtonST = styled(Button)<{ disable: string }>(({ disable }) => {
  return {
    width: "100%",
    height: "52px",
    fontWeight: 800,
    fontSize: "22px",
    maxWidth: "180px",
    borderRadius: "32px",
    padding: "10px 16px",
    fontFamily: "NanumSquareRound",
    color: disable === "true" ? "#BDBDBD" : "#fff",
    backgroundColor: disable === "true" ? "#eee" : "#3196FF",
    border: disable === "true" ? "2px solid #BDBDBD" : "2px solid #3186F0",

    "&:hover": {
      backgroundColor: "#67B5FF",
    },
  };
});
