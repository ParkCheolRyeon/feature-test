import { Box, Button, styled, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

interface IDayList {
  id: number;
  day: string;
  month: string;
  year: string;
  dayOfWeek: string;
}

export default function TimetableUpdateContainer() {
  const [dayLists, setDayLists] = useState<IDayList[]>([]);
  const [pick, setPick] = useState<IDayList>({
    id: 0,
    day: "",
    month: "",
    year: "",
    dayOfWeek: "",
  });

  const onClickDay = (dayList: IDayList) => {
    setPick(dayList);
    getPossibleTime.mutate(dayList);
  };

  const formatDayOfWeek = (dayOfWeek: string) => {
    let result = "";
    switch (dayOfWeek) {
      case "Monday":
        result = "월";
        return result;
      case "Tuesday":
        result = "화";
        return result;
      case "Wednesday":
        result = "수";
        return result;
      case "Thursday":
        result = "목";
        return result;
      case "Friday":
        result = "금";
        return result;
      case "Saturday":
        result = "토";
        return result;
      case "Sunday":
        result = "일";
        return result;
      default:
        return "";
    }
  };

  useEffect(() => {
    const today = dayjs();
    const next = today.add(2, "days");
    const days = [];
    for (let i = 0; i < 5; i++) {
      const date = next.add(i, "days");
      days.push({
        id: i,
        day: date.format("DD"),
        month: date.format("M"),
        year: date.format("YYYY"),
        dayOfWeek: formatDayOfWeek(date.format("dddd")),
      });
    }
    setDayLists(days);
  }, []);

  const getTimetable = async (pick: IDayList) => {
    const result = axios
      .post("http://localhost:9999/timetable", {
        user: "okay",
        date: pick,
      })
      .then((res: any) => {
        return res.data.result;
      });
    return result;
  };

  const getPossibleTime = useMutation({
    mutationKey: ["mutateTimetable"],
    mutationFn: (pick: IDayList) => getTimetable(pick),
  }); // useMutate 정의

  //   const onSavePerson = () => {
  //     savePerson.mutate(person); // 데이터 저장
  //   };

  //   const { data } = useQuery({
  //     queryKey: ["getTimetable"],
  //     queryFn: async () => getTimetable(),
  //   });

  //   console.log(data);

  return (
    <BoxSTcontainer>
      <BoxSTwrapper>
        <BoxSTtext>
          <Typography variant="h5" color="initial" fontWeight={600}>
            일정 수정
          </Typography>
          <Box>일정에 따라 선생님은 변경될 수 있습니다.</Box>
        </BoxSTtext>
        <BoxSTtext>
          <Typography variant="h6" color="initial" fontWeight={600}>
            요일, 시간 그대로 다음주 일정 적용
          </Typography>
          <Box>날짜 = 취소된 날 + 7 (시간 그대로)</Box>
        </BoxSTtext>
        <BoxSTdayLists>
          <Box>
            <Typography variant="subtitle2" color="initial" fontWeight={600}>
              희망 일정에 진행
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 10 }}>
            {dayLists.map((dayList: IDayList, index: number) => {
              return (
                <BoxSTday
                  onClick={() => onClickDay(dayList)}
                  key={`dayList_key_${index}`}
                  pick={pick}
                  index={index}
                >
                  <Box>{dayList.dayOfWeek}</Box>
                  <Box>{dayList.day}</Box>
                </BoxSTday>
              );
            })}
          </Box>
        </BoxSTdayLists>
        <BoxSTbtnGroup>
          <ButtonST variant="contained">확인</ButtonST>
          <ButtonST variant="outlined">닫기</ButtonST>
        </BoxSTbtnGroup>
      </BoxSTwrapper>
    </BoxSTcontainer>
  );
}

const BoxSTcontainer = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };
});

const BoxSTwrapper = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    padding: "20px",
    display: "flex",
    maxWidth: "500px",
    alignItems: "center",
    borderRadius: "15px",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid #9e9e9e",
  };
});

const BoxSTtext = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const BoxSTdayLists = styled(Box)(() => {
  return {
    gap: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const BoxSTbtnGroup = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const ButtonST = styled(Button)(() => {
  return {
    width: "100%",
    maxWidth: "120px",
    borderRadius: "20px",
  };
});

const BoxSTday = styled(Box)((props: { pick: IDayList; index: number }) => {
  const { pick, index } = props;
  return {
    width: "100%",
    padding: "10px",
    display: "flex",
    maxWidth: "40px",
    cursor: "pointer",
    borderRadius: "20px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    border: pick.id === index ? "1px solid #212121" : "",
  };
});
