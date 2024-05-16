import { Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";

export default function NavtestContainer() {
  const Tabs = [
    {
      title: "메인 홈",
      color: "#E0F2F1",
    },
    {
      title: "클래스 관리",
      color: "#F9FBE7",
    },
    {
      title: "수강생 관리",
      color: "#FCE4EC",
    },
    {
      title: "강사 관리",
      color: "#EDE7F6",
    },
    {
      title: "청구 납부",
      color: "#EEEEEE",
    },
  ];

  const [selectedtab, setSelectedtab] = useState<number | null>();

  const handleTabClick = (index: number) => {
    setSelectedtab(index);
  };

  return (
    <Wrapper>
      <TabContainer>
        {Tabs.map((tab, index) => {
          return (
            <TabRadiusHiddenBox
              index={index}
              selectedtab={selectedtab}
              key={`${tab.title} key ${index}`}
            >
              <TabItem
                index={index}
                tabcolor={tab.color}
                selectedtab={selectedtab}
                onClick={() => handleTabClick(index)}
              >
                <TabTitleTypo
                  variant="body2"
                  index={index}
                  selectedtab={selectedtab}
                >
                  {tab.title}
                </TabTitleTypo>
              </TabItem>
            </TabRadiusHiddenBox>
          );
        })}
      </TabContainer>

      <UnderTabContents>
        <Typography variant="h6">컨텐츠 파트</Typography>
        <RefreshTabBtn variant="outlined" onClick={() => setSelectedtab(null)}>
          탭 초기화
        </RefreshTabBtn>
      </UnderTabContents>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };
});

const TabRadiusHiddenBox = styled(Box)<{
  selectedtab: number | null | undefined;
  index: number;
}>(({ selectedtab, index }) => {
  return {
    width: "100px",
    height: "80px",

    overflow: "hidden",
    borderRadius: "8px 10px 0px 10px",

    zIndex: selectedtab === index ? 2 : 1,

    display: selectedtab === index ? "unset" : "flex",

    transform: `scale(${selectedtab === index ? 1.5 : 1})  translateX(10px)`,
  };
});

const TabContainer = styled(Box)(() => {
  return {
    gap: "4px",
    width: "100%",
    display: "flex",
    maxWidth: "720px",
    position: "relative",
  };
});

const TabItem = styled(Box)<{
  selectedtab: number | null | undefined;
  index: number;
  tabcolor: string;
}>(({ selectedtab, index, tabcolor }) => {
  return {
    width: "120px",
    height: "80px",
    textAlign: "center",
    borderRadius: "8px",

    zIndex: selectedtab === index ? 2 : 1,

    backgroundColor: selectedtab === index ? "#3196ff" : tabcolor,

    transform: `scale(${selectedtab === index ? 1 : 0.8}) skew(${
      selectedtab === index ? "25deg" : ""
    }) translateX(-30px)`,

    clipPath:
      selectedtab === index ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" : "",
  };
});

const TabTitleTypo = styled(Typography)<{
  selectedtab: number | null | undefined;
  index: number;
}>(({ selectedtab, index }) => {
  return {
    fontSize: selectedtab === index ? "12px" : "unset",

    paddingTop: selectedtab === index ? "10px" : "0px",
    paddingLeft: selectedtab === index ? "40px" : "0px",

    transform: `scale(${selectedtab === index ? 1 : 0.7}) skew(${
      selectedtab === index ? "-25deg" : ""
    }) translateX(0px)`,
  };
});

const UnderTabContents = styled(Box)(() => {
  return {
    top: 410,
    zIndex: 3,
    gap: "20px",
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    minHeight: "600px",
    padding: "40px 0px",
    position: "absolute",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#c9e0f8",
  };
});

const RefreshTabBtn = styled(Button)(() => {
  return {
    width: "100%",
    height: "120px",
    maxWidth: "320px",
    borderRadius: "18px",
    backgroundColor: "#fafafa",
  };
});
