import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";

import { riasecResult } from "@/container/riasec/datas/riasecResult";
import { abilityLists } from "@/container/riasec/datas/abilityLists";

interface IRiasecReport {
  type: string;
  jobs: string;
  ability: string[];
  koreanTitle: string;
  englishTitle: string;
  detailContent: string[];
  [key: string]: string | string[];
}

export default function index() {
  const router = useRouter();

  // router.query.result 결과값 url에서 파싱
  const result: string | undefined | string[] = router.query.result;

  // router.query.key 복호화 키 url에서 파싱
  const hashKey: string | undefined | string[] = router.query.key;

  // router.query 로 받아온 Mbti 와 결과 데이터를 맵핑시킨뒤 '저장'하는 state
  const [riasecReport, setRiasecReport] = useState<IRiasecReport>();

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

  // router.query 로 받아온 결과를 state에 저장하는 useEffect
  useEffect(() => {
    const res = riasecResult[decryptData(result as string, Number(hashKey))];
    setRiasecReport(res);
  }, [router.query.result, router.query.key]);

  return (
    <BoxSTwrapper>
      {/* title */}
      <Typography variant="h3" color="initial">
        아트봉봉 흥미유형 검사 결과
      </Typography>

      {/* riasec 결과 시작 */}
      <BoxSTreport key={`mbti_report_key${index}`}>
        {/* 한글 능력 & 영어 능력 */}
        <BoxSTreportDetail>
          <Typography variant="h4"># {riasecReport?.koreanTitle} #</Typography>
          <Typography variant="h4"># {riasecReport?.englishTitle} #</Typography>
        </BoxSTreportDetail>

        {/* 관심가지는 직업 */}
        <BoxSTreportDetail>
          <Typography variant="body1">
            # {riasecReport?.koreanTitle}이 관심을 가지는 직업은? #
          </Typography>
          <Typography variant="body1"># {riasecReport?.jobs} #</Typography>
        </BoxSTreportDetail>

        {/* 상세 내용 */}
        <BoxSTreportDetail>
          <Typography variant="h5">좋아하는 활동은 무엇일까요?</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {riasecReport?.["detailContent"].map(
              (el: string, index: number) => (
                <Typography
                  variant="body1"
                  key={`detailContent_key_value${index}`}
                >
                  # {el} #
                </Typography>
              )
            )}
          </Box>
        </BoxSTreportDetail>

        {/* 성장능력 */}
        <BoxSTreportDetail>
          <Typography variant="h5">수업으로 성장할 수 있는 능력</Typography>
          {(riasecReport?.["ability"] as string[])?.map(
            (report: string, index: number) => (
              <Box
                key={`ability_key_index${index}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">
                  # {abilityLists[report]?.name} #
                </Typography>
                {abilityLists[report]?.contents.map(
                  (el: string, index: number) => (
                    <Typography
                      key={`ability_contents_key_index${index}`}
                      variant="body1"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      # {el} #
                    </Typography>
                  )
                )}
              </Box>
            )
          )}
        </BoxSTreportDetail>
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
