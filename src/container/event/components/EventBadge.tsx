import { Box, styled } from "@mui/material";
import React from "react";

interface IProps {
  title: string;
}

export default function EventBadge(props: IProps) {
  const { title } = props;
  return <BoxST title={title}>{title}</BoxST>;
}

const BoxST = styled(Box)((props: { title: string }) => {
  const { title } = props;
  return {
    backgroundColor: title === "진행 중인 이벤트" ? "#FFECB3" : "#EEEEEE",
    color: title === "진행 중인 이벤트" ? "#FF6F00" : "#616161",
    maxWidth: title === "진행 중인 이벤트" ? "80px" : "60px",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "18px",
    height: "26px",
    borderRadius: "32px",
    padding: "4px 12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});
