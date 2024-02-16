import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

import { imgMbtiLists } from "./datas/imgMbtiLists";

interface IChoiceType {
  type: string;
  imgUrl: string;
}

export default function MbtiContainer() {
  const router = useRouter();

  // 진행바 state
  const [progress, setProgress] = useState(5);

  // 선택한 그림에 따른 type을 저장하는 List state
  const [mbtiList, setMbtiList] = useState<string[]>([]);

  // 데이터에서 다음 이미지를 불러오는 index를 증가시키는 state
  const [nextImg, setNextImg] = useState(0);
  const generateRandomKey = () => Math.floor(Math.random() * 100);

  // 최종 단계 도달시 저장된 type List가 20일때 라우팅 시키는 useEffect
  useEffect(() => {
    if (nextImg === 19 && mbtiList.length === 20) {
      const hashKey = generateRandomKey();
      const mbtiResult = countMbtiFn(mbtiList, hashKey);
      router.push({
        pathname: "mbti/result",
        query: { result: mbtiResult, key: hashKey },
      });
    }
  }, [nextImg, mbtiList]);

  // Mbti 각각의 알파벳을 카운팅
  // 카운팅된 알파벳중 3이상인 알파벳을 reduce함수로 누적
  // 4글자의 Mbti 도출 후 암호화 하는 함수
  const countMbtiFn = (mbtiList: string[], hashKey: number) => {
    const types = ["E", "I", "S", "N", "T", "F", "J", "P"];
    const countResult = types.map((type: string) => {
      return mbtiList.filter((mbti: string) => type === mbti).length;
    });

    const encryptMbti = (data: string, hashKey: number) => {
      const encryptedChars = data?.split("").map((char) => {
        const charCode = char?.charCodeAt(0) + hashKey;
        return String.fromCharCode(charCode);
      });
      const encrypted = encryptedChars?.join("");

      return encrypted;
    };

    const result = types.reduce((acc: string, curr: string, index: number) => {
      if (countResult[index] >= 3) {
        acc += encryptMbti(curr, hashKey);
      }
      return acc;
    }, "");

    return result;
  };

  // 이미지 클릭시 mbti type 저장
  // progress바 +5
  // img index +1 하는 함수
  const onClickImgFn = (imgMbti: IChoiceType) => {
    setMbtiList([...mbtiList, imgMbti.type]);
    if (nextImg < 20 && progress < 100) {
      setProgress(progress + 5);
      setNextImg(nextImg + 1);
    }
  };

  return (
    <BoxSTwrapper>
      {/* title */}
      <Typography variant="h4" color="initial">
        그림 MBTI 검사
      </Typography>
      {/* 진행바 */}
      <ProgressST variant="determinate" value={progress} />
      {nextImg + 1} / 20
      {/* img 고르는 section */}
      <BoxSTimgChoice>
        <Box>
          {/* img description */}
          <Box sx={{ textAlign: "center", fontSize: "20px", fontWeight: 900 }}>
            {imgMbtiLists[nextImg]?.description}
          </Box>

          {/* 이미지 배열 */}
          {imgMbtiLists[nextImg]?.choice?.map(
            (imgMbti: IChoiceType, index: number) => (
              <img
                src={imgMbti.imgUrl}
                style={{ cursor: "pointer" }}
                key={`mbti_choice_img_key${index}`}
                onClick={() => onClickImgFn(imgMbti)}
              />
            )
          )}
        </Box>
      </BoxSTimgChoice>
    </BoxSTwrapper>
  );
}

const ProgressST = styled(LinearProgress)(() => ({
  height: 15,
  width: "100%",
  borderRadius: 2,
  maxWidth: "500px",
  border: "1px solid green",
  backgroundColor: "#fafafa",
  [`&.${linearProgressClasses.colorPrimary}`]: {},
  [`& .${linearProgressClasses.bar}`]: { backgroundColor: "#308fe8" },
}));

const BoxSTimgChoice = styled(Box)(() => {
  return {
    width: "100%",
    height: "500px",
    display: "flex",
    maxWidth: "1200px",
    alignItems: "center",
    justifyContent: "center",
  };
});

const BoxSTwrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
