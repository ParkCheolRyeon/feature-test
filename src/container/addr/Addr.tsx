import { Box, Button } from "@mui/material";
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
  const [zipNo, setZipNo] = useState("");
  const [roadAddr, setRoadAddr] = useState("");
  const [jibunAddr, setJibunAddr] = useState("");

  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: handleAddressCompletion,
    }).open();
  };

  const handleAddressCompletion = (data: IAddr) => {
    setRoadAddr(data.roadAddress);
    setZipNo(data.zonecode);
    setJibunAddr(data.jibunAddress);
  };
  return (
    <Box>
      <Button variant="contained" onClick={openAddressSearch}>
        우편번호 찾기
      </Button>
      <Box>
        <Box>우편번호 : {zipNo}</Box>
        <Box>도로명 : {roadAddr}</Box>
        <Box>지번 : {jibunAddr}</Box>
      </Box>
    </Box>
  );
}
