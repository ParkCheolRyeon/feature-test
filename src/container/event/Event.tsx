import { Box, Button, Typography, styled } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Card from "./components/Card";
import cover from "/images/event1.png";

const IMG = "/event1.png";
const EventContainer = () => {
  const fetchData = async (page: number) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=${3}`
    );
    return res.data;
  };

  const {
    data: datas,
    isSuccess,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["event_datas"],
    queryFn: ({ pageParam = 0 }) => fetchData(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _) => {
      // lastPage 의 log 결과 [{…}, {…}, {…}] -> 가장 마지막에 fetching된 데이터의 집합
      // allPages 의 log 결과 [Array(3), Array(3)] -> 현재까지 생성된 페이지의 갯수
      // 결국 return 하는 nextPage 가 fetchData의 파라미터로 들어가기때문에 (현재는 json Placeholder의 start값 세팅)
      // lastPage[lastPage - 1].id -> 가장 최근 데이터의 마지막 인덱스의 id값 이후 부터 가져와라 라는 의미 -> 1,2,3
      // allPages.length * 3 -> 현재까지 생성된 페이지 * 3 (1페이지당 3개의 데이터) 다음 페이지의 데이터 3개를 가져오라는 의미
      // 사용하지 않는 매개변수는 _ 로 처리

      const nextPage = lastPage[lastPage.length - 1].id;
      // const nextPage = allPages.length * 3;

      return nextPage;
    },
    // staleTime: 10000,
  });

  useEffect(() => {
    const scroll: any = window.sessionStorage.getItem("scroll");
    const res2 = JSON.parse(scroll);
    window.scrollTo(0, res2?.y);

    window.addEventListener("beforeunload", () => {
      // sessionStorage.setItem("isRefresh", "true");
    });
  }, []);

  return (
    <BoxSTeventWrapper
      sx={{
        backgroundImage: `url(${IMG})`,
        // backgroundPosition: `right bottom`,
        backgroundRepeat: `repeat`,
        backgroundSize: `300px 300px`,
        height: "100%",
        width: "100%",
      }}
    >
      {/* <img src="/event1.png" alt="dd" /> */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 24px",
        }}
      >
        <TyphographyST variant="h6" color="initial">
          이벤트 페이지
        </TyphographyST>
      </Box>
      <BoxSTcardWrapper>
        {datas?.pages.map((page: any) => {
          return page.map((data: any, index: any) => {
            return (
              <Card
                key={index}
                title={data.title}
                uniqueId={data.id}
                thumbnailUrl={data.thumbnailUrl}
              />
            );
          });
        })}

        <ButtonST
          variant="contained"
          onClick={() => {
            fetchNextPage();
            // sessionStorage.setItem(
            //   "prevDatas",
            //   String(Number(datas?.pages.length) * 3)
            // );

            // sessionStorage.setItem("isRefresh", "false");
          }}
        >
          더보기
        </ButtonST>
      </BoxSTcardWrapper>
    </BoxSTeventWrapper>
  );
};
export default EventContainer;

const BoxSTeventWrapper = styled(Box)(() => {
  return {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    backgroundImage: 'url("/public/images/event1.png")',
  };
});
const BoxSTcardWrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  };
});

const TyphographyST = styled(Typography)(() => {
  return {
    width: "100%",
    fontFamily: "cursive",
    color: "#212121",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 800,
    lineHeight: "26px",
  };
});

const ButtonST = styled(Button)(() => {
  return {
    display: "flex",
    width: "100%",
    maxWidth: "180px",
    maxHeight: "44px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 16px",
    borderRadius: "32px",
    backgroundColor: "#424242",
    marginBottom: "80px",
  };
});
