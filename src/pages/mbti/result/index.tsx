import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";

import { mbtiDatas } from "@/container/mbti/datas/mbtiResult";

interface IMbtiReport {
  type: string;
  subTitle: string;
  mainTitle: string;
  character: string;
  canLists: string[];
  likeLists: string[];
  pleaseLists: string[];
  disLikeLists: string[];
  color: string;
  backgroundColor: string;
  [key: string]: string | string[];
}

export default function index() {
  const router = useRouter();

  // router.query 결과값 url에서 파싱
  const mbtiKey: string | undefined | string[] = router.query.result;
  const hashKey: string | undefined | string[] = router.query.key;

  // 결과 리포트에서 반복문 돌리기 위해 list 선언
  const reportLists = ["canLists", "likeLists", "disLikeLists", "pleaseLists"];

  // router.query 로 받아온 Mbti 와 결과 데이터를 맵핑시킨뒤 '저장'하는 state
  const [mbtiReport, setMbtiReport] = useState<IMbtiReport>();

  // router.query 로 받아온 결과를 복호화한 담에 결과를 state에 저장하는 useEffect
  useEffect(() => {
    const res = mbtiDatas[decryptData(mbtiKey as string, Number(hashKey))];
    setMbtiReport(res);
  }, [router.query.result, router.query.key]);

  // 결과값 복호화 하는 함수 -> 암호화시에 넣은 키와 똑같은거 넣어야 함
  const decryptData = (encryptedData: string, key: number) => {
    const encryptedChars = encryptedData?.split("");

    const decryptedChars = encryptedChars?.map((char) => {
      const charCode = char.charCodeAt(0) - key;
      return String.fromCharCode(charCode);
    });

    const decrypted = decryptedChars?.join("");

    return decrypted;
  };

  return (
    <BoxSTwrapper
      sx={{
        backgroundColor: mbtiReport?.backgroundColor,
      }}
    >
      {/* title */}
      <Typography variant="h3" color="initial">
        아트봉봉이 발견한 우리 아이 MBTI는 ?
      </Typography>

      {/* mbti 결과 시작 */}
      <BoxSTreport key={`mbti_report_key${index}`}>
        {/* type, mainTitle, subTitle */}
        <BoxSTreportDetail>
          <Typography variant="h4" color={mbtiReport?.color}>
            # {mbtiReport?.type} #
          </Typography>
          <Typography variant="h4"># {mbtiReport?.mainTitle} #</Typography>
          <Typography variant="h4"># {mbtiReport?.subTitle} #</Typography>
        </BoxSTreportDetail>

        {/* type , character */}
        <BoxSTreportDetail>
          <Typography variant="body1">
            # {mbtiReport?.type}의 특징은 #
          </Typography>
          <Typography variant="body1"># {mbtiReport?.character} #</Typography>
        </BoxSTreportDetail>

        {/* 결과 리포트 반복문  */}
        {reportLists.map((reportList: string, index: number) => (
          <BoxSTreportDetail key={`renderLists_map_key${index}`}>
            {/* 리포트 타이틀 */}
            <Typography variant="h5">
              {reportList === "canLists"
                ? "우리아이가 할 수 있는 것은 (can)"
                : reportList === "likeLists"
                ? "우리아이가 좋아하는 것은 (like)"
                : reportList === "pleaseLists"
                ? "우리아이에게 해주세요 (please)"
                : reportList === "disLikeLists"
                ? "우리아이가 싫어하는 것은 (disLike)"
                : ""}
            </Typography>

            {/* 리포트 내용 */}
            {(mbtiReport?.[reportList] as string[])?.map(
              (report: string, index: number) => (
                <Typography variant="body1" key={`report_map_key${index}`}>
                  # {report} #
                </Typography>
              )
            )}
          </BoxSTreportDetail>
        ))}
      </BoxSTreport>
    </BoxSTwrapper>
  );
}

const BoxSTwrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const BoxSTreport = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    maxWidth: "1200px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const BoxSTreportDetail = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    margin: "20px 0px",
    maxWidth: "1200px",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid blue",
    justifyContent: "center",
  };
});
