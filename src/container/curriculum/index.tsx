import { Box } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import React, { useEffect, useState } from "react";

export default function CurriculumContainer() {
  dayjs.locale("ko");
  const now = dayjs();
  const [dates, setDates] = useState<any[]>([]);
  const [weekdays, setWeekdays] = useState<string[]>([]);

  useEffect(() => {
    const datesArray = [];
    const weekdaysArray = [];

    for (let i = 0; i < 14; i++) {
      const currentDate = now.add(i, "day");
      datesArray.push(currentDate);
    }

    for (let i = 0; i < 7; i++) {
      const date = now.add(i, "day");
      const day = date.format("ddd");
      weekdaysArray.push(day);
    }

    setDates(datesArray);
    setWeekdays(weekdaysArray);
  }, []);

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          minHeight: "500px",
          margin: "auto",
          border: "1px solid green",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {weekdays.map((weekday, index) => (
            <Box
              key={index}
              sx={{
                margin: "0 10px",
                fontWeight: "bold",
                color: weekday === "토" || weekday === "일" ? "red" : "inherit",
              }}
            >
              {weekday}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {weekdays.map((weekday, index) => (
            <Box key={index} sx={{ margin: "0 10px" }}>
              {dates
                .filter((date) => date.format("ddd") === weekday)
                .map((date, idx) => (
                  <Box key={idx}>
                    {date.format("D") === "1"
                      ? date.format("M/D")
                      : date.format("D")}
                  </Box>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
