import { useRouter } from "next/router";
import React, { useEffect } from "react";
import EventBadge from "./EventBadge";
import { Box, styled } from "@mui/material";

export default function Card(props: any) {
  const { title, uniqueId, thumbnailUrl } = props;
  const router = useRouter();

  const moveDetailFn = (uniqueId: string) => {
    router.push(`/event/${uniqueId}`);
    window.sessionStorage.setItem(
      "scroll",
      JSON.stringify({ y: window.scrollY })
    );
  };

  return (
    <BoxSTwrapper onClick={() => moveDetailFn(uniqueId)}>
      <BoxSTcontent>
        <EventBadge
          title={title.length % 2 === 0 ? "진행 중인 이벤트" : "지난 이벤트"}
        />
        <BoxSTtext>
          <BoxSTid>ID : {uniqueId}</BoxSTid>
          <BoxSTtitle>{title}</BoxSTtitle>
        </BoxSTtext>
      </BoxSTcontent>
      <Box>
        <ImgST src={thumbnailUrl} alt="thumbnailUrl" />
      </Box>
    </BoxSTwrapper>
  );
}

const BoxSTwrapper = styled(Box)(() => {
  return {
    borderRadius: "24px",
    border: "2.5px solid #eee",
    maxHeight: "264px",
    width: "100%",
    maxWidth: "760px",
    cursor: "pointer",
    display: "flex",
    backgroundColor: "#fff",
    padding: "32px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    boxShadow: "0.5px 1.6px 1.2px 0.7px #9e9e9e",
  };
});

const BoxSTcontent = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    maxWidth: "336px",
  };
});
const BoxSTtext = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };
});

const BoxSTtitle = styled(Box)(() => {
  return {
    color: "#212121",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "26px",
  };
});

const BoxSTid = styled(Box)(() => {
  return {
    color: "#717171",
    fontSize: "24px",
    fontWeight: 800,
    lineHeight: "30px",
  };
});

const ImgST = styled("img")(() => {
  return {
    width: "100%",
    minWidth: "336px",
    maxHeight: "210px",
    borderRadius: "16px",
  };
});
