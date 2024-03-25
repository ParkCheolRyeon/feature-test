import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { DatePicker, LocalizationProvider, koKR } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "dayjs/locale/ko";
import Image from "next/image";

interface SelectSTProps {
  pickdate: {
    year: number | undefined;
    month: number | undefined;
    day: number | undefined;
  };
  title: string;
}

export default function DatePickerContainer() {
  // 날짜 선택 값 State
  const [pickDate, setPickDate] = useState({
    year: undefined,
    month: undefined,
    day: undefined,
  });

  // 년도 List 생성
  const currentYear = dayjs().year();
  const yearsList = [];
  for (let year = currentYear; year >= 2005; year--) {
    yearsList.push(year);
  }

  // 월 List 하드코딩
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Select onChange 이벤트 감지 Fn
  const onChangeDate = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target;
    setPickDate({ ...pickDate, [name]: value as number });
  };

  // 날짜 List State
  const [dayList, setDayList] = useState<number[]>();

  // 날짜 선택 Fn (List 생성 후 state에 set)
  function generateDays(year: number, month: number) {
    const daysList = [];
    const daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
    for (let day = 1; day <= daysInMonth; day++) {
      daysList.push(day);
    }
    setDayList(daysList);
  }

  // 년도 & 월  선택 시 day List 생성 Fn 동작 시키는 useEffect
  useEffect(() => {
    if (pickDate.year && pickDate.month) {
      generateDays(pickDate.year, pickDate.month);
    }
  }, [pickDate.year, pickDate.month, pickDate.day]);

  // 생성된 Day List 에 포함되지 않는 날짜 (ex. 2월 31일) 라면 pickDate State에서 day 값 초기화
  useEffect(() => {
    if (
      dayList?.length !== 0 &&
      !dayList?.includes(Number(pickDate.day)) &&
      pickDate.day !== ""
    ) {
      setPickDate({ ...pickDate, day: undefined });
    }
  }, [dayList]);

  const [value, setValue] = useState();

  const now = dayjs();

  const nowdate = now.format("YYYY/MM/DD");
  // .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.Mui-selected

  return (
    <BoxST>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ko"}>
          <DatePicker
            label={nowdate}
            format="YYYY/MM/DD"
            value={value}
            onChange={(newValue: any) => setValue(newValue)}
            slots={{ openPickerIcon: CalendarMonthIcon }}
            slotProps={{
              day: {
                sx: {
                  "&.MuiPickersDay-root.Mui-selected": {
                    backgroundColor: "#2096f3",
                    "& :hover": {
                      backgroundColor: "transparent",
                    },
                  },
                  "&.MuiPickersDay-root:not(.Mui-selected)": {
                    border: "none",
                  },
                },
              },
              popper: {
                sx: {
                  "& .MuiPaper-root": {
                    borderRadius: "12px",
                    width: "100%",
                    maxWidth: "320px",
                  },
                  "& .MuiDayCalendar-monthContainer": {
                    paddingTop: "12px",
                    display: "flex",
                    gap: "2px",
                    flexDirection: "column",
                    alignSelf: "stretch",
                    alignItems: "center",
                    justifyContent: "end",
                  },
                  "& .MuiPickersCalendarHeader-root": {
                    paddingLeft: "36px",
                    paddingRight: "28px",
                  },
                },
              },
            }}
            sx={{}}
          />
        </LocalizationProvider>
      </Box>

      <Button onClick={() => console.log(pickDate)}>콘솔로그</Button>
      {/* 년도 Select */}
      <FormControl>
        <SelectST
          title="년도"
          pickdate={pickDate}
          name="year"
          value={pickDate.year || "년도"}
          onChange={onChangeDate}
          MenuProps={{
            PaperProps: {
              style: { maxHeight: 200, borderRadius: "12px" },
            },
          }}
        >
          <MenuItem value="년도" sx={{ display: "none" }}>
            년도
          </MenuItem>
          {yearsList.map((el: number, index: number) => {
            return (
              <MenuItem key={`year_menu_index:${index}`} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </SelectST>
      </FormControl>
      {/* 월 Select */}
      <FormControl>
        <SelectST
          title="월"
          pickdate={pickDate}
          onChange={onChangeDate}
          name="month"
          value={pickDate.month || "월"}
          MenuProps={{
            PaperProps: {
              style: { maxHeight: 200, borderRadius: "12px" },
            },
          }}
        >
          <MenuItem value={"월"} sx={{ display: "none" }}>
            월
          </MenuItem>
          {monthList.map((el: number, index: number) => {
            return (
              <MenuItem key={`month_menu_index:${index}`} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </SelectST>
      </FormControl>
      {/* 일 Select */}
      <FormControl>
        <SelectST
          title="일"
          pickdate={pickDate}
          onChange={onChangeDate}
          name="day"
          value={
            pickDate.day && dayList?.includes(Number(pickDate.day))
              ? pickDate.day
              : "일"
          }
          MenuProps={{
            PaperProps: {
              style: { maxHeight: 200, borderRadius: "12px" },
            },
          }}
        >
          <MenuItem value={"일"} sx={{ display: "none" }}>
            일
          </MenuItem>
          {dayList?.map((el: number, index: number) => {
            return (
              <MenuItem key={`day_menu_index:${index}`} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </SelectST>
      </FormControl>
    </BoxST>
  );
}

const BoxST = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    maxWidth: "1200px",
    alignItems: "center",
    justifyContent: "center",
  };
});

const SelectST = styled(Select)<SelectSTProps>(({ pickdate, title }) => {
  return {
    width: "100%",
    maxHeight: "52px",
    borderRadius: "12px",
    border: "1.5px solid #e0e0e0",
    "& fieldset": {
      border: "none",
    },
    "&:hover": {
      borderRadius: "12px",
      "&& fieldset": {
        borderRadius: "12px",
        border: "none",
      },
    },
    "&.MuiOutlinedInput-input:hover": {
      borderRadius: "12px",
      maxWidth: "165px",
      border: "none",
    },
    "&.MuiOutlinedInput-root": {
      color:
        (pickdate?.year && title === "년도") ||
        (pickdate?.month && title === "월") ||
        (pickdate?.day && title === "일")
          ? "#212121"
          : "#9e9e9e",
    },
  };
});
