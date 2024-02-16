export interface RiasecResultType {
  [key: string]: {
    type: string;
    jobs: string;
    ability: string[];
    koreanTitle: string;
    englishTitle: string;
    detailContent: string[];
  };
}

export const riasecResult: RiasecResultType = {
  R: {
    type: "R",
    koreanTitle: "조작형",
    englishTitle: "Handling",
    detailContent: [
      "기계를 활용하는 활동, 전자기기를 사용하는 것, 조립, 운동 등 스스로 물체나 신체를 다루는 일을 좋아합니다.",
      "보상이 있는 활동을 선호하고, 다른 사람과 어울리는 것을 피할 수 있습니다.",
      "손재주가 뛰어나 관찰력, 이해력 그리고 표현력을 미술 활동을 통해 개발한다면 성취도가 증가 할 수 있습니다.",
    ],
    jobs: "기술자, 비행기 조종사, 농부, 군인, 경찰, 소방관, 운동선수 등",
    //  표현, 관찰, 이해
    ability: ["Expressiveness", "Observation", "Understanding"],
  },
  I: {
    type: "I",
    koreanTitle: "이해형",
    englishTitle: "Understanding",
    detailContent: [
      "과학 실험, 지식 서적 독서, 자료 검색, 컴퓨터 활동 등 아이디어를 제시하고 생각하는 것을 좋아합니다.",
      "지식을 얻는 활동에 흥미를 갖기 쉽지만, 다른 사람과 함께 활동하는 것을 피하곤 합니다.",
      "창조성이 뛰어나 관찰력, 이해력 그리고 상상력을 미술 활동을 통해 개발한다면 성취도가 증가할 수 있습니다.",
    ],
    jobs: "언어학자, 심리학자, 물리학자, 생물학자, 경영분석가, 연구원 등",
    //  관찰, 상상, 이해
    ability: ["Observation", "Imagination", "Understanding"],
  },
  A: {
    type: "A",
    koreanTitle: "창작형",
    englishTitle: "Creating",
    detailContent: [
      "그림 그리기, 종이접기, 찰흙놀이, 글짓기, 노래, 춤이나 악기 연주 등 자신의 생각을 창작 활동을 통하여 표현하는 것을 좋아합니다.",
      "새로운 일에 흥미를 갖기 쉽고, 반복 작업에 피로를 느끼곤 합니다.",
      "감수성이 뛰어나 관찰력, 상상력 그리고 표현 능력을 미술 활동을 통해 개발한다면 성취도가 증가할 수 있습니다.",
    ],
    jobs: "화가, 디자이너, 웹툰 작가, 소설 작가, 시나리오 작가, 영화감독 등",
    //  표현, 관찰, 상상
    ability: ["Expressiveness", "Observation", "Imagination"],
  },
  S: {
    type: "S",
    koreanTitle: "공감형",
    englishTitle: "Empathizing",
    detailContent: [
      "교육, 상담, 봉사 활동처럼 고민을 들어주거나 가르치고 사람들을 도와주는 것을 좋아합니다.",
      "사람들과 함께하는 것에 흥미를 갖기 쉽고, 새로운 기계나 전자기기를 다루는 것에 무관심 할 수 있습니다.",
      "대인관계성이 뛰어나 관찰력, 의사소통 능력 그리고 공감 능력을 미술 활동을 통해 개발한다면 성취도가 증가할 수 있습니다.",
    ],
    jobs: "교사, 강사, 간호사, 종교지도자, 상담가, 사회복지사, 언어치료사 등",
    //  관찰, 의사소통, 공감
    ability: ["Observation", "Communication", "Empathy"],
  },
  E: {
    type: "E",
    koreanTitle: "관리형",
    englishTitle: "Managing",
    detailContent: [
      "리더로서 활동하는 것에 관심이 있고, 칭찬이나 능력을 인정 받는 것을 좋아합니다.",
      "사교적이고 열정적이지만, 성적이나 칭찬이 없는 공부나 상상력을 발휘하는 일에 관심이 없을 수 있습니다.",
      "리더쉽이 뛰어나 자기 개관화 능력, 의사소통 능력 그리고 공감 능력을 미술 활동을 통해 개발한다면 성취도가 증가할 수 있습니다.",
    ],
    jobs: "기업경영인, 정치가, 판사, 검사, 변호사, 연출가, 회사원 등",
    //  의사소통, 공감, 자기객관
    ability: ["Communication", "Empathy", "SelfObjectification"],
  },
  C: {
    type: "C",
    koreanTitle: "질서형",
    englishTitle: "Ordering",
    detailContent: [
      "일기쓰기, 정리 정돈, 시간 계획 세우기, 숫자 계산 등 계획을 세우거나 규칙 안에서 활동하는 것을 좋아합니다.",
      "규칙이 없어도 생활이 모범적이만, 소설이나 시를 쓰거나 상상화를 그리는 상상력을 이용한 창작 활동을 피할 수 있습니다.",
      "계획성이 뛰어나 이해력,  관찰력 그리고 의사소통 능력을 미술 활동을 통해 개발한다면 성취도가 증가할 수 있습니다.",
    ],
    jobs: "공무원, 회사원, 회계사, 세무사, 감사원, 안전관리사, 사서, 법무사  등",
    //  관찰 , 의사소통, 이해
    ability: ["Observation", "Communication", "Understanding"],
  },
};
