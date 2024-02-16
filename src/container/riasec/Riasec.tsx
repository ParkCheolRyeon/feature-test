import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { finalQuestions } from "./datas/finalQuestions";
import { imgRiasecLists } from "./datas/imgRiasecLists";

interface IChoiceImgType {
  imgUrl: string;
  type?: string | undefined;
}

interface ISelectJobType {
  id: number;
  rank: number;
  type: string;
}

interface IFinalQuestionType {
  id: number;
  type: string;
  jobs: string;
}

interface ICountType {
  type: string;
  count: number;
}

export default function RiasecContainer() {
  const router = useRouter();

  /** useState */
  // 진행바 state
  const [progress, setProgress] = useState(3.3);

  // 선택한 그림에 따른 type을 저장하는 List state
  const [riasecList, setRiasecList] = useState<string[]>([]);

  // 데이터에서 다음 이미지를 불러오는 index를 증가시키는 state
  const [nextImg, setNextImg] = useState(0);

  // 최종 직업 선택 view state
  const [showFinal, setShowFinal] = useState(false);

  // 최종 직업 선택 state
  const [select, setSelect] = useState<ISelectJobType[]>([]);

  // 최종 직업 선택 순위 state
  const [rank, setRank] = useState(0);

  /** Function */
  // 암호화를 위해 난수 생성하는 함수

  // 문항에 따라서 RIASEC 각각의 타입을 카운팅하는 함수 (최고점만 계산후 반환)
  // ex) R 5점 I 5점 A 5점일 때의 return -> [{type: "R" , count : "5"},{type: "I" , count : "5"},{type: "A" , count : "5"}] 반환
  const countRiasecFn = (riasecList: string[]) => {
    const types = ["R", "I", "A", "S", "E", "C"];
    const countResult = types.map((type) => {
      const count = riasecList.filter((riasec) => type === riasec).length;
      return { type, count };
    });

    // count 조회
    const maxCount = Math.max(
      ...countResult.map((item: ICountType) => item?.count)
    );

    // count 가 가장 높은 type을 배열로 생성
    const highScore = countResult.filter(
      (item: ICountType) => item?.count === maxCount
    );

    return highScore;
  };

  // 이미지 클릭시 riasec type 저장 / progress바 +3.3344 / img index +1 하는 함수
  const onClickImgFn = (riasecImg: IChoiceImgType) => {
    setRiasecList([...riasecList, riasecImg.type as string]);
    if (nextImg < 30 && progress < 100) {
      setProgress(progress + 3.3344);
      setNextImg(nextImg + 1);
    }
  };

  // 최종 직업 선택 화면에서 직업 순위 매기는 함수 (순위 6개가 최대 && 한번 클릭했던 순위는 다시 클릭 불가능)
  const onClickJobsFn = (finalQuestion: IFinalQuestionType) => {
    if (
      select.length < 7 &&
      select.find(
        (selectedJob: ISelectJobType) => selectedJob.id === finalQuestion.id
      ) === undefined
    ) {
      setRank(rank + 1);
      setSelect([
        ...select,
        { id: finalQuestion.id, rank: rank + 1, type: finalQuestion.type },
      ]);
    }
  };

  // Riasec 결과 암호화
  const encryptRiasec = (data: string, hashKey: number) => {
    const encryptedChars = data?.split("").map((char) => {
      const charCode = char?.charCodeAt(0) + hashKey;
      return String.fromCharCode(charCode);
    });
    const encrypted = encryptedChars?.join("");

    return encrypted;
  };

  // 최고점이 1개 or n개 일 경우 나눠서 처리하는 함수
  // 최고점이 1개일 때 -> 바로 결과 router.query.result에 담아서 riasec/result 페이지로 라우팅
  // 최고점이 n개일 때 -> 직업선택 결과를 포함한 결과 담아서 riasec/result 페이지로 라우팅
  // 최고점이 n개일 때 계산 방식 -> 최고점이 R , I , E , C 인 경우 R, I, E, C 중에 가장 순위가 높은 (rank가 높은) 값을 결과로 return
  const getResultFn = (countedResults: ICountType[], hashKey: number) => {
    // 최고점 1개일 때 바로 라우팅
    if (countedResults.length === 1 && select.length === 6) {
      // 최고점 결과 값 Array ["E"] 반환
      const resultTypeArray = countedResults.map(
        (countedResult: ICountType) => countedResult.type
      );

      // 최종 암호회된 결과 및 hashKey값
      const result = encryptRiasec(resultTypeArray[0], hashKey);

      router.push({
        pathname: "/riasec/result",
        query: { result: result, key: hashKey },
      });
      return;
    }

    // 최고점 n개일 때 동점들중에 1순위 직업을 result로 담아서 라우팅
    if (countedResults.length !== 1 && select.length === 6) {
      // 동점들의 type만 담은 array
      const sameScoreArray = countedResults.map(
        (countedResult: ICountType) => countedResult.type
      );

      // 선택된 직업들중에 동점만 가지고있는 Array 생성
      const selectAndSameScore = select.filter((selectedJob: ISelectJobType) =>
        sameScoreArray.includes(selectedJob.type)
      );

      // rank 조회
      const findTopRank = Math.min(
        ...selectAndSameScore.map((item: ISelectJobType) => item?.rank)
      );

      // 순위가 가장 높은 type을 배열로 생성
      const topRankArray = selectAndSameScore.filter(
        (item: ISelectJobType) => item?.rank === findTopRank
      );

      // 결과값 type 반환 ['R'] 형태
      const resultTypeArray = topRankArray.map(
        (topRankType: ISelectJobType) => topRankType.type
      );

      // 최종 암호회된 결과 및 hashKey값
      const result = encryptRiasec(resultTypeArray[0], hashKey);

      router.push({
        pathname: "/riasec/result",
        query: { result: result, key: hashKey },
      });

      return;
    }
  };

  // 최종 직문 선택 render 함수
  const renderFn = (showFinal: boolean) => {
    // const countedResults = countRiasecFn(riasecList);
    // const sameScoreArray = countedResults.map(
    //   (countedResult: ICountType) => countedResult.type
    // );
    if (showFinal) {
      return (
        <>
          {/* 동점인 직업만 보여주면 너무 비어보여서 고민중 */}
          {/* 그리고 최고점이 이미 나와있는 상태에서 -> 직업선택 의미없는 경우에 6개 다보여준다? */}
          {/* 동점이 생긴상태에서 동점이 2개면 -> 2개만 보여준다? (너무 비어보임) */}
          {/* {finalQuestions.filter((finalQuestion , index)=>sameScoreArray.includes(finalQuestion.type)).map()} */}
          {finalQuestions.map((finalQuestion, index) => {
            return (
              <BoxSTfinalQuestion key={`finalQuestion_key_index${index}`}>
                <Box sx={{ width: "100%" }}>{finalQuestion.jobs}</Box>
                <BoxSTjobRank onClick={() => onClickJobsFn(finalQuestion)}>
                  {select
                    .filter(
                      (selectedJob: ISelectJobType) =>
                        selectedJob.id === finalQuestion.id
                    )
                    .map((selectedJob: ISelectJobType) => selectedJob.rank)}
                </BoxSTjobRank>
              </BoxSTfinalQuestion>
            );
          })}
        </>
      );
    }
    return (
      <BoxSTimgChoice>
        <BoxST>
          {/* O,X 질의 description */}
          <Typography variant="h6">
            {imgRiasecLists[nextImg]?.description}
          </Typography>

          {/* 이미지 배열 */}
          <Box sx={{ display: "flex", gap: "40px" }}>
            {imgRiasecLists[nextImg]?.choice?.map(
              (riasecImg: IChoiceImgType, index: number) => (
                <img
                  src={riasecImg.imgUrl}
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  key={`riasec_choice_img_key${index}`}
                  onClick={() => onClickImgFn(riasecImg)}
                />
              )
            )}
          </Box>
        </BoxST>
      </BoxSTimgChoice>
    );
  };

  /** useEffect */

  // 마지막 O,X 질문 이후에 최종 직업선택 질문 보여주고, progressBar 100%, 진행 상태 30/30으로 만드는 useEffect
  useEffect(() => {
    if (nextImg === 30 && riasecList.length === 30) {
      setShowFinal(true);
      setProgress(100);
      setNextImg(29);
    }
  }, [nextImg, riasecList]);

  // 최종 직업 선택 이후 처리 useEffect
  useEffect(() => {
    // 암호화 key값 난수 생성
    const generateRandomKey = () => Math.floor(Math.random() * 100);

    // 최고점 계산 된 결과 값
    const countedResults = countRiasecFn(riasecList);
    // 암호화 key값
    const hashKey = generateRandomKey();

    getResultFn(countedResults, hashKey);
  }, [riasecList, select]);

  return (
    <BoxSTwrapper>
      {/* title */}
      <Typography variant="h4" color="initial">
        아트봉봉 흥미유형 O,X 검사
      </Typography>
      {/* 진행바 */}
      <ProgressST variant="determinate" value={progress} />
      {nextImg + 1} / 30
      {/* showFinal 에 따라서 최종 질문 or O, X 이미지 render */}
      {renderFn(showFinal)}
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

const BoxSTfinalQuestion = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    maxWidth: "600px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #9e9e9e",
  };
});

const BoxSTjobRank = styled(Box)(() => {
  return {
    width: "100%",
    height: "50px",
    fontWeight: 800,
    display: "flex",
    maxWidth: "50px",
    cursor: "pointer",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "1px solid #9e9e9e",
  };
});

const BoxST = styled(Box)(() => {
  return {
    gap: "40px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
});
