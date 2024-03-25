import SEARCH from "@/public/images/icons/search.svg";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

declare global {
  interface Window {
    daum: any;
  }
}
interface IAddr {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
}

export default function AddrContainer() {
  // 다음 우편 검색 스크립트
  // <script
  //   src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  //   async
  // />

  // 우편번호
  const [zipNo, setZipNo] = useState("");
  // 도로명
  const [roadAddr, setRoadAddr] = useState("");
  // 지번
  const [jibunAddr, setJibunAddr] = useState("");

  // 우편번호 검색 오픈
  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: handleAddressCompletion,
    }).open();
  };

  // 검색 완료시 state 저장
  const handleAddressCompletion = (data: IAddr) => {
    setRoadAddr(data.roadAddress);
    setZipNo(data.zonecode);
    setJibunAddr(data.jibunAddress);
  };

  return (
    <Box sx={{ gap: "24px", display: "flex", flexDirection: "column" }}>
      <Typography variant="subtitle2">배송 받을 주소</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TextField
          sx={{ maxWidth: "320px", margin: "4px 0px" }}
          variant="outlined"
          InputProps={{
            readOnly: true,
            style: { cursor: "pointer", paddingRight: "12px" },
            endAdornment: (
              <Image src={SEARCH} alt="search" width={32} height={32} />
            ),
          }}
          placeholder="우편번호 찾기"
          onClick={openAddressSearch}
          value={roadAddr}
        />

        {roadAddr && (
          <TextField
            sx={{ maxWidth: "320px", margin: "4px 0px" }}
            variant="outlined"
            InputProps={{ style: { paddingRight: "12px" } }}
            placeholder="상세 주소 입력"
          />
        )}
      </Box>
    </Box>
  );
}
