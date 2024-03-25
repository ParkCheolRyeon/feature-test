import { Box, Button, Grid, styled } from "@mui/material";
import { useRouter } from "next/router";

interface IData {
  url: string;
  text: string;
}

const datas: IData[] = [
  {
    url: "/event",
    text: "이벤트 페이지 ㄱㄱ",
  },
  {
    url: "/slide",
    text: "슬라이드 ㄱㄱ",
  },
  {
    url: "/datepicker",
    text: "데이트피커 ㄱㄱ",
  },
  {
    url: "/mbti",
    text: "MBTI ㄱㄱ",
  },
  {
    url: "/riasec",
    text: "Riasec ㄱㄱ",
  },
  {
    url: "/addr",
    text: "우편번호 검색 ㄱㄱ",
  },
  {
    url: "/timetableupdate",
    text: "일정 수정 ㄱㄱ",
  },
  {
    url: "/curriculum",
    text: "커리큘럼 날짜로직 ㄱㄱ",
  },
  {
    url: "/bottomsheet",
    text: "바텀시트 ㄱㄱ",
  },
];

export default function Index() {
  const router = useRouter();
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <GridST container>
        {datas.map((data: IData, index: number) => (
          <Grid item key={`index_btn_key_${index}`}>
            <ButtonST variant="contained" onClick={() => router.push(data.url)}>
              {data.text}
            </ButtonST>
          </Grid>
        ))}
      </GridST>
    </Box>
  );
}

const GridST = styled(Grid)(() => {
  return {
    gap: "30px",
    width: "100%",
    margin: "auto",
    display: "flex",
    maxWidth: "1200px",
  };
});

const ButtonST = styled(Button)(() => {
  return {
    width: "100%",
    maxWidth: "180px",
  };
});
