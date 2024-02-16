export interface MbtiResultType {
  [key: string]: {
    type: string;
    subTitle: string;
    mainTitle: string;
    character: string;
    canLists: string[];
    likeLists: string[];
    pleaseLists: string[];
    disLikeLists: string[];
  };
}

export const mbtiDatas: MbtiResultType = {
  ESTJ: {
    type: "ESTJ",
    mainTitle: "영리한 사업가",
    subTitle: "현실적이고 추진력이 있어 무었이든 주도하는 리더 어린이",
    character:
      "뛰어난 현실감각과 다양한 능력으로 타고난 지도자이지만, 때로는 친구들의 마음을 헤아리지 못할 수 있어요.",
    canLists: [
      "예의가 바르고 약속을 잘 지켜요.",
      "밝고 활발해서 주변에 친구들이 많아요.",
      "상황을 분석하고 효율적이어서 또래보다 똑똑해 보일 수 있어요.",
      "문제를 합리적인 방법으로 해결할 수 있어요.",
      "새로운 것을 빠르게 이해하고 습득할 수 있어요.",
    ],
    likeLists: [
      "혼자서 스스로 하는 것을 좋아해요.",
      "구체적인 사실과 상황이 있는 것을 좋아해요.",
      "경쟁에서 이기고 싶어해요.",
      "자신의 능력을 증명하고 싶어해요.",
    ],
    disLikeLists: [
      "느리고 천천히 하는 것을 좋아하지 않아요.",
      "경쟁에서 지는 것을 참을 수 없어요.",
      "다른 사람들이 비효율적이거나 단점이 보이면 불편해 해요.",
    ],
    pleaseLists: [
      "시간을 충분히 들여서 생각해 보는 것이 가치 있다고 알려주세요.",
      "경쟁에서 이기는 것 뿐만 아니라 함께 하는 것도 중요하다고 말해주세요.",
      "다른 사람의 마음과 관점을 이해할 수 있도록 해주세요.",
      "단체 활동이나 단체 스포츠 활동을 통해서 함께 협동하고 교류할 수 있도록 해주세요.",
    ],
  },
  ESTP: {
    type: "ESTP",
    mainTitle: "예리한 경영자",
    subTitle: "영리하고 센스 있는 모험적인 사업가 어린이",
    character:
      "매사에 호기심이 넘치고 궁금한 것이 있으면 도전하고 즐길 줄 알지만 안전에 주의하지 않아 쉽게 다칠 수 있어요.",
    canLists: [
      "감각적인 활동에 적극적으로 참여해요.",
      "변화에 빠르게 적응해서 모험과 도전을 두려워 하지 않아요.",
      "직접 경험하고 시행착오를 통해서 습득해요.",
      "판단력이 빠르고 임기응변이 뛰어나요.",
      "사회성이 좋고 친구들과 사이가 좋아요.",
    ],
    likeLists: [
      "만지고, 느끼고, 뛰어내리고, 올라타는 등 활발한 활동을 좋아해요.",
      "궁금한 것이 있으면 빠르게 도전하고 뛰어 들어요.",
      "위험과 스릴을 즐기고 해냈을 때 기뻐해요.",
      "매사에 호기심이 많고 참견하는 것을 좋아해요.",
    ],
    disLikeLists: [
      "가만히 앉아서 생각하는 것을 참지 못해요.",
      "비효율적이고 복잡한 문제를 해결하는 데 어려움이 있어요.",
      "새로운 지식을 잘 배우지만 마무리가 약해요.",
      "익숙하고 지루한 것을 참기 힘들어요.",
    ],
    pleaseLists: [
      "오감놀이 등 감각을 활용할 수 있는 활동을 많이 제공해주세요.",
      "위험한 도전으로 쉽게 다칠 수 있으니 안전에 특히 주의해 주세요.",
      "무리하게 억압하거나 제지하지 말고 자신의 방식대로 해볼 수 있도록 자유를 충분히 주세요.",
      "하던 것을 마무리할 수 있도록 해주세요.",
    ],
  },
  ESFJ: {
    type: "ESFJ",
    mainTitle: "인기 많은 마당발",
    subTitle: "다른 사람들에게 애정이 많고 인기 많은 마당발 어린이",
    character:
      "참을성이 많고 타고난 협력자이지만, 때로는 인정을 받지 못하거나 거절을 당했을 때 마음의 상처를 크게 받아요.",
    canLists: [
      "언어로 발표하거나 표현을 풍부하게 묘사를 잘해요.",
      "다른 사람들 앞에 나서는 것을 잘해요.",
      "규칙적이고 약속을 잘 지킬 수 있어요.",
      "책임감이 강하고 성실한 아이로 평가되요.",
      "다른 사람들에게 관심이 쏟고 협력을 잘해요.",
      "부모나 다른 사람들의 말을 세밀하고 정확하게 기억할 수 있어요",
    ],
    likeLists: [
      "자연 친화적인 오감을 사용하는 참여형 놀이를 좋아해요.",
      "자신의 이야기를 정성껏 들어줄 때 만족감이 커요.",
      "다른 사람들이 자신을 이해해주고 인정해주는 것을 좋아해요.",
      "다른 사람들이 자신으로 인해 기뻐할 때 자신도 기뻐해요.",
      "일관성 있고 질서 있는 상황을 좋아해요.",
    ],
    disLikeLists: [
      "도움을 준 다른 사람들이 자신에 대해 인정하지 않을 때 속상해요.",
      "친구들과 관계에 있어서 갈등과 변화를 극도로 싫어해요.",
      "규칙이 깨지거나 약속을 지키지 않는 것을 싫어해요.",
      "요구를 거절당했을 때 큰 상처를 받아요.",
    ],
    pleaseLists: [
      "말로 충분히 표현할 수 있게 많이 들어주세요.",
      "충분한 공감과 이해가 필요해요.",
      "사소한 일이라도 인정해 주는 표현을 해주세요.",
      "함께 정한 규칙이나 약속은 절대 어기지 마세요.",
      "다른 사람과의 갈등은 자연스러운 일이라는 것을 알려주세요.",
    ],
  },
  ESFP: {
    type: "ESFP",
    mainTitle: "즉흥적인 주인공",
    subTitle: "열정적이고 항상 밝은 자유로운 영혼의 연예인 어린이",
    character:
      "어떤 상황이든 잘 적응하고 유연하지만, 때로는 진지하지 못하고 가벼워 보일 수 있어요.",
    canLists: [
      "어떤 상황이든 잘 적응하고 즐길 수 있어요.",
      "관찰력이 좋고 창의적이예요.",
      "항상 밝고 유머가 넘쳐 주변 친구들이 많아요.",
      "상황의 분위기나 상대방의 감정을 빠르게 알아차려요.",
      "사람이나 사물을 다루는 사실적인 상식이 풍부해요.",
      "자신의 감정에 솔직하고 복잡하게 생각하지 않아요.",
    ],
    likeLists: [
      "미술, 음악, 체육 등 다양한 활동적인 예술활동에 참여하는 것을 좋아해요.",
      "계획적인 것보다는 상황에 맞게 판단하고 행동해요.",
      "친구들과 자신의 경험을 나누고 새롭고 즐거운 놀이를 만드는 것을 좋아해요.",
      "다른 사람들을 웃게 하고 싶어해요.",
    ],
    disLikeLists: [
      "규칙적이고 반복인 것을 싫어해요.",
      "자기 스스로 무언가를 할 수 없을 때 스트레스를 받아요.",
      "에너지를 표출하지 못할 때 불만이 쌓여요.",
      "진지하고 무거운 분위기를 불편해 해요.",
    ],
    pleaseLists: [
      "에너지 넘치고 늘 즐기지만 떄로는 진지함이 부족할 수 있어요. 진지한 상황에서의 적응도 필요해요.",
      "다양하고 감각적인 예술 활동을 많이 제공해 주세요.",
      "필요하다면 계획을 세우고 지키는 방법을 알려주세요.",
    ],
  },
  ENTJ: {
    type: "ENTJ",
    mainTitle: "매력적인 지도자",
    subTitle: "자신감이 넘치고 자신의 재능을 마음껏 발휘하는 지도자 어린이",
    character:
      "타고난 리더형으로 친구들을 잘 이끌고  주도하지만 때로는 거침없는 표현으로 친구들에게 상처를 주기도 해요.",
    canLists: [
      "자신감이 넘치고 자신의 장점을 마음껏 표현해요.",
      "마음먹은 일은 반드시 해내려고 해요.",
      "계획적이고 근면해요.",
      "모든 일에 최고의 결과를 내기 위해 최선을 다해요.",
      "새롭고 창의적인 놀이를 잘 찾아내요.",
    ],
    likeLists: [
      "목표를 세우고 주도적으로 행동하는 것을 좋아해요.",
      "호기심이 왕성해서 새로운 생각을 하는 것을 좋아해요.",
      "자신이 유능하다는 것을 보여주고 싶어해요.",
    ],
    disLikeLists: [
      "오래되고 고리타분한 장난감이 놀이 방식을 싫어해요.",
      "상대방이 자신의 생각과 다르다고 느끼면 참지 못해요.",
      "자신이 무능해 보인다면 많이 속상해해요.",
    ],
    pleaseLists: [
      "친구에게 강압적이거나 지배적인 태도를 가질 수 있어요. 조화롭게 협동하는 태도를 알려주세요.",
      "온화하고 다정하게 말해야 상대방에게 상처를 주지 않는다는 것을 알려주세요.",
      "감정도 중요한 것이라고 알려주세요.",
    ],
  },
  ENTP: {
    type: "ENTP",
    mainTitle: "호기심이 많은 도전가",
    subTitle: "지적 도전을 즐기는 영리하고 호기심 많은 사색가 어린이",
    character:
      "타고난 발명가로 상상력과 창의력이 뛰어나지만 반복적이고 일상적인 것에 싫증을 낼 수 있어요.",
    canLists: [
      "활기차고 경쾌한 에너지가 넘쳐요.",
      "어느 곳이나 적응을 빠르게 잘 할 수 있어요.",
      "상상력이 풍부해서 다양한 것에 관심이 많고 발명을 잘해요.",
      "창의적인 실험이나 새로운 도전을 겁내지 않아요.",
    ],
    likeLists: [
      "다양한 상황, 사람, 물건 들에 관심이 많아요.",
      "다양한 활동에 참여하는 것을 좋아해요.",
      "새로운 친구와 새로운 놀이를 하는 것을 좋아해요.",
      "상상력이 풍부해서 새로운 이야기를 주장하기도 해요.",
      "다른 사람과 생각이 다를 때 논쟁하는 것을 좋아해요.",
    ],
    disLikeLists: [
      "반복적이고 자극적이지 않은 것에 싫증을 빨리 내요.",
      "즉각적인 주의나 억압에 스트레스를 많이 받아요.",
      "반복적인 훈육이나 설명을 싫어해요.",
    ],
    pleaseLists: [
      "새로운 것에 이끌려 끈기가 부족할 수 있어요. 한 가지 활동도 지속할 수 있는 참을성을 길러주세요.",
      "비논리적 이어도 독창적인 생각을 존중해주세요.",
      "규칙이나 규범의 중요성을 알려주세요.",
      "지나친 간섭과 반복적인 설명은 오히려 독이 돼요.",
    ],
  },
  ENFJ: {
    type: "ENFJ",
    mainTitle: "똑똑한 프로 해결러",
    subTitle: "온화하지만 카리스마 넘치는 책임감이 강한 지도자 어린이",
    character:
      "언어 능력이 우수하고 어른들의 기대에 부응하기 위해 노력하지만, 때로는 스스로 지나치게 높은 기준을 정해 스트레스를 많이 받을 수 있어요.",
    canLists: [
      "집이나 학교에서 자신의 역할을 다하기 위해 노력해요.",
      "스스로 자신의 기준을 정하고 지키기 위해 노력해요.",
      "어휘력이나 의사소통 등 언어 능력이 우수해요.",
      "참을성과 책임감이 강해요.",
      "이타적이고 자신보다 다른 사람들의 의견을 더 존중해요.",
    ],
    likeLists: [
      "미래에 대해 생각하고 말하는 것을 좋아해요.",
      "또래보다 어른들에게 귀여움을 받고 사랑받는 것을 좋아해요.",
      "자신의 역할을 다하고 인정받았을 때 큰 기쁨을 느껴요.",
    ],
    disLikeLists: [
      "부모의 기대에 부응하지 못할 때 스트레스를 많이 받아요.",
      "주변 상황이나 사람들로 인해 영향을 많이 받아요.",
      "갈등이나 싸움을 극도로 싫어해요. 갈등을 피하기 위해 자신의 욕구를 포기하기도 해요.",
    ],
    pleaseLists: [
      "강한 비판과 질타보다는 감정과 노력을 먼저 인정해주세요.",
      "미래에 대해 함께 상상하고 충분한 공상을 즐겨주세요.",
      "갈등을 피하기 위해 무조건적인 수용을 하다 보면, 자신의 욕구를 억누를 수 있어요. 자신의 요구에 귀 기울이는 습관을 갖도록 하고, 다른 사람의 무리한 부탁에는 거절하는 법도 알려줘야 해요.",
    ],
  },
  ENFP: {
    type: "ENFP",
    mainTitle: "열정적인 활동가",
    subTitle: "열정적이고 창의적인 자유로운 영혼의 활동가 어린이",
    character:
      "기발하고 독창적인 아이디어가 넘쳐나지만, 때로는 흥미를 느끼지 못하는 일을 소홀히 하고 지속하는데 어려움이 있을 수 있어요.",
    canLists: [
      "풍부한 호기심과 아이디어가 많아요.",
      "에너지가 넘치고 열정적이예요.",
      "항상 새로운 가능성을 찾으려고 해요.",
      "다양한 것을 시도하고 경험하는 것을 잘해요.",
      "기발하고 독창적인 아이디어를 잘 내요.",
    ],
    likeLists: [
      "한 가지 활동보다는 여러가지 활동에 관심이 많아요.",
      "다른 사람들과 이야기를 나누는 것을 좋아해요.",
      "자신의 생각 흐름대로 말하다 보면 이야기가 다른 길로 새기도 해요.",
      "다른 사람들에게 자신의 감정이나 생각을 전달하고 싶어해요.",
      "왕성한 호기심으로 궁금한 것이 많아서 질문을 많이 해요.",
    ],
    disLikeLists: [
      "한 가지 활동을 오랫동안 지속해야 할 때 힘들어해요.",
      "정해진 규칙이나 상황을 참지 못해요.",
      "계획을 정해서 지키는 것이 어려워요.",
      "자신이 할 수 없는 현실에 직면하면 큰 좌절을 해요.",
    ],
    pleaseLists: [
      "왕성한 호기심과 질문에 성의껏 답변해주세요.",
      "많은 생각을 공유하고 자유롭게 탐구할 수 있도록 해주세요.",
      "다양한 것에 호기심이 많다 보면, 한 가지에 집중하기가 어려울 수 있어요. 집중해서 완수하는 연습이 필요해요.",
      "격려와 칭찬이 특히나 중요해요.",
    ],
  },
  ISTJ: {
    type: "ISTJ",
    mainTitle: "믿음직한 현실주의자",
    subTitle: "신중하고 책임감이 있으며 집중력이 강한 현실주의자 어린이",
    character:
      "매사에 계획적이고 규칙적이며 현실 감각이 매우 뛰어나지만, 떄로는 융통성이 부족하게 보여질 수 있어요.",
    canLists: [
      "신중하고 사려 깊어요.",
      "약속을 중요하게 생각하고 잘 지켜요.",
      "기억력이 뛰어나고 집중력이 뛰어나요.",
      "객관적이고 논리적인 것을 좋아해서 현실 감각이 뛰어나요.",
    ],
    likeLists: [
      "계획을 따르고 규칙적인 것을 좋아해요.",
      "낯선 외출보다는 집이나 익숙한 곳에서 시간을 보내는 것을 편안해 해요.",
      "객관적이고 논리적인 것을 좋아해요.",
      "직접 경험을 통해서 알기를 원해요.",
      "또래 보다는 어른들과 시간을 보내는 것을 좋아해요.",
    ],
    disLikeLists: [
      "규칙이 깨지고 약속을 어기는 것을 참지 못해요.",
      "목표와 계획이 없는 것을 힘들어 해요.",
      "갑작스러운 환경의 변화나 외출을 불안해해요.",
    ],
    pleaseLists: [
      "약속을 했다면 반드시 지켜줘야 해요.",
      "새로운 상황을 신중하게 관찰하며 조금씩 적응해요. 조급해 하지 말고 충분한 기다려 주세요.",
      "친구들에게 직설적인 말로 상처를 줄 수도 있어요. 원활할 관계를 위해서 적절하게 표현하는 방법을 알려주세요.",
      "계획을 지키지 않더라도 떄로는 괜찮다고 알려주세요.",
    ],
  },
  ISTP: {
    type: "ISTP",
    mainTitle: "대담한 다재다능러",
    subTitle: "조용하고 절제된 호기심으로 주변을 잘 관찰하는 재주꾼 어린이",
    character:
      "조용히 내면의 만족감을 위해 항상 도전하지만, 때로는 친구들의 마음에 공감하는 것이 어려워서 의도치 않게 상처를 줄 수 있어요.",
    canLists: [
      "조용해 보이지만 적응력이 좋아서 매우 열정적이예요.",
      "호기심이 강해서 도전을 두려워하지 않아요.",
      "직접 경험을 통해 이해하고 습득해요.",
      "자연을 탐구하는 것을 잘해요.",
      "스스로의 만족감이 큰 성취를 가장 좋아해요.",
    ],
    likeLists: [
      "사물을 분석해서 이해하는 것을 좋아해요.",
      "무엇이든 혼자 스스로 하고 싶어해요.",
      "미술, 댄스, 음악 등 참여하는 활동을 좋아해요.",
      "가능한 자신의 에너지를 다 쓰지 않으려고 해요.",
    ],
    disLikeLists: [
      "반복적이고 일상적인 것을 좋아하지 않아요.",
      "다른 사람이 자신을 통제하려고 할 때 불편해요.",
      "상대방의 기분이나 감정에 공감하는 것이 어려워요.",
    ],
    pleaseLists: [
      "충분한 신뢰관계 없이 통제하려고 하지 마세요.",
      "경험을 할수록 습득이 빨라져요.",
      "감정기복이 없더라도 내면은 누구보다 감정이 풍부해요.",
      "독립적이고 자립적인 도전을 인정해줘야 해요.",
      "친구들의 마음에 공감하는 것이 어려워서 의도치 않게 상처를 줄 수 있어요. 온화하고 다정한 단어를 사용할 수 있도록 알려주세요.",
    ],
  },
  ISFJ: {
    type: "ISFJ",
    mainTitle: "헌신적인 보호자",
    subTitle: "사려 깊고 친절해서 주변 친구들에게 헌신적인 따뜻한 어린이",
    character:
      "인내심과 참을성이 많고 책임감이 뛰어나지만 때로는 호불호가 강해서 고집이 센 아이로 보여질 수 있어요.",
    canLists: [
      "다른 사람들에게 사려깊고 친절해요.",
      "조용하지만 친구들과 사이좋게 잘 지낼 수 있어요.",
      "인내심과 참을성이 많고, 책임감이 뛰어나요.",
      "내적인 독립심이 강하고 취향이 매우 분명해요.",
      "내면의 감각이 풍부하고 감성적이예요.",
    ],
    likeLists: [
      "순서대로 배우거나 알아가는 것을 좋아해요.",
      "부모님을 의지하며 반복되는 일상이나 과정에서 편안함과 안정감을 느껴요.",
      "자신이 하고 싶은 것보다 다른 사람을 기쁘게 하는 것을 좋아해요.",
      "혼자 하는 놀이보다 친구들과 함께하는 놀이를 좋아해요.",
    ],
    disLikeLists: [
      "주변 상황의 변화를 극단적으로 무서워할 수 있어요.",
      "다른 사람의 비판에 많은 상처를 받을 수 있어요.",
      "취향이 매우 분명해서 고집이 센 아이로 비춰질 수 있어요.",
    ],
    pleaseLists: [
      "변화에 적응할 수 있도록 여유를 가지고 충분히 기다려 주세요.",
      "긍정적으로 격려하며 안정된 애정을 마음껏 표현해 주세요.",
      "조언이나 충고는 부드러운 어조로 이해시켜줘야 해요.",
      "다른 사람을 만족시키려는 마음이 크다 보니 자신의 욕구를 충족하지 못해서 불만이 쌓이기도 해요. 자신의 요구에 귀 기울이는 습관을 갖도록 하고, 다른 사람의 무리한 부탁에는 거절하는 법도 알려줘야 해요.",
    ],
  },
  ISFP: {
    type: "ISFP",
    mainTitle: "모험적인 예술가",
    subTitle: "항상 새로운 경험을 찾는 온화하고 유연한 매력쟁이 어린이",
    character:
      "갈등을 피하기 위해서 양보를 잘하고 다른 사람의 감정을 민감하게 파악하지만 때로는 결정력과 추친력이 필요할 수 있어요.",
    canLists: [
      "조용하지만 온화하고 다정하며 친절해요.",
      "적응력이 뛰어나고 다양한 경험을 두려워하지 않아요.",
      "자신뿐만 아니라 다른 사람들의 감정에 세심하고 민감해요.",
      "눈치가 빠르고 상황파악이 빨라요.",
    ],
    likeLists: [
      "호기심과 모험심이 많아요.",
      "실용적이면서도 창의적인 것을 좋아해요.",
      "새로운 놀이를 만들거나 참여하는 것을 좋아해요.",
      "처음에는 부끄러워하지만 모든 사람들과 잘 지내고 싶어해요.",
    ],
    disLikeLists: [
      "경쟁 구도나 권위적인 분위기를 싫어해요.",
      "갈등이나 비판이 없는 편안하고 조화로운 상황에서 편안해 해요.",
      "규칙에 얽매이는 것을 좋아하지 않아요.",
    ],
    pleaseLists: [
      "여유롭고 행동이 느리기 때문에 충분히 기다려 주세요.",
      "조언이나 충고는 부드러운 어조로 이해시켜줘야 해요.",
      "다른 사람들의 부탁들 거절하지 못하고 양보하는 것을 더 편안해 해요. 때로는 자신의 요구에 귀 기울이는 습관을 갖도록 하고, 다른 사람의 무리한 부탁에는 거절하는 법도 알려줘야 해요.",
    ],
  },
  INTJ: {
    type: "INTJ",
    mainTitle: "상상하는 전략가",
    subTitle: "독립적이고 자립심이 강하며 성실한 전략가 어린이",
    character:
      "새로운 지식을 배우고 습득하는 데 두려움이 없지만, 때로는 승부욕과 쟁취욕이 지나칠 수 있어요.",
    canLists: [
      "조용하고 성실하며 어른스러워요.",
      "지식을 배우고 습득하는 것을 잘해요.",
      "또래가 모르는 언어를 알고 상황에 맞게 사용할 수 있어요.",
      "시키지 않아도 끝까지 해내려고 해요.",
      "자립심과 의지가 강해요.",
    ],
    likeLists: [
      "배우고 분석하는 것을 좋아해요.",
      "거의 모든 일에 의문을 품고 더 좋은 방법을 찾아보려고 노력해요.",
      "거절당하거나 규칙을 깨는 것을 두려워하지 않아요.",
      "목표를 설정하고 성취하는 것을 좋아해요.",
    ],
    disLikeLists: [
      "다른 사람이 감정적이거나 근거가 없이 말하는 것을 좋아하지 않아요.",
      "자신이 생각한대로 계획대로 안되면 스트레스를 많이 받아요.",
      "승부욕이 강해서 이길 때까지 하고 싶어해요.",
      "외부적인 것들이나 기분과 감정들에 관심이 크게 없어요.",
    ],
    pleaseLists: [
      "새로운 지식을 많이 알려주세요.",
      "이유가 납득이 되지 않으면 끝까지 승복하지 않아요. 충분히 이해를 도와주어야 해요.",
      "일반적이지 않더라도 스스로 해볼 수 있도록 자율성을 주어야 해요.",
      "지나친 승부욕과 쟁취욕을 조절해주세요.",
    ],
  },
  INTP: {
    type: "INTP",
    mainTitle: "혁신적인 발명가",
    subTitle: "끝없이 지식을 갈망하는 과묵하지만 호기심이 많은 발병가 어린이",
    character:
      "이해가 빠르고 논리적이지만 때로는 직설적인 대답으로 친구들에게 상처를 줄 수 있어요.",
    canLists: [
      "호기심이 많고 다양한 활동과 정보에 관심이 많아요.",
      "이해가 빠르고 직관적으로 통찰하는 능력이 있어요.",
      "독창적인 아이디어를 내고 독특한 놀이도 만들 수 있어요.",
      "혼자서 생각하고 상상하며 고민하는 것을 잘해요.",
    ],
    likeLists: [
      "친구들과 함께 보다는 혼자서 책을 읽거나 상상하며 보내는 것을 좋아해요.",
      "분석하고 탐구하는 과정에서 큰 즐거움을 느껴요.",
      "어려운 문제에 도전하는 것을 좋아해요.",
      "퍼즐, 장난감 분해하기 등 다양한 활동을 즐겨해요.",
    ],
    disLikeLists: [
      "기존의 틀에 갇힌 활동을 좋아하지 않아요.",
      "개인 시간이 부족하다면 힘들어 할 수 있어요.",
      "관심이 없는 것은 시도조차 안 할 수 있어요.",
      "다른 사람의 도움을 간섭으로 느낄 수 있어요.",
      "체계적이고 규칙적인 것을 힘들어해요.",
    ],
    pleaseLists: [
      "악의는 없지만 때로는 친구들에게 상처주는 말을 할 수 있어요. 다른 사람을 지적하거나 질문을 할 때에는 일반적이고 다정한 단어를 사용할 수 있도록 알려주세요.",
      "관심이 없는 것도 시도해 볼 수 있도록 해주세요.",
      "체계적이고 규칙적인 것에 적응할 수 있어야 해요.",
      "독창적인 생각을 존중해 주세요.",
    ],
  },
  INFJ: {
    type: "INFJ",
    mainTitle: "신비한 이상주의자",
    subTitle: "인내심이 많고 통찰력이 뛰어나서 어른스러운 어린이",
    character:
      "정신적 리더 역할을 잘 해내지만 자신의 능력이 부족하다고 느낄 때 큰 좌절감을 느낄 수 있어요.",
    canLists: [
      "새로운 아이디어를 내고 창조적 활동을 잘해요.",
      "인내심이 많고 통찰력이 뛰어나요.",
      "또래 친구들보다 어른스러워요.",
      "어른들의 말을 잘 듣고 사려깊고 공감을 잘해요.",
      "이상적이고 미래에 대해 계획을 잘 세울 수 있어요.",
    ],
    likeLists: [
      "이야기로 다양한 경험을 하는 책 읽기를 좋아해요.",
      "새로운 이야기와 상상하는 것을 좋아해요.",
      "자신 스스로 완벽하고 싶은 욕심이 있어요.",
      "좋아하는 것과 싫어하는 것에 대한 차이가 분명해요.",
    ],
    disLikeLists: [
      "자신이 하고싶은 것이 불가능하다는 것을 알았을 때 큰 좌절감을 느껴요.",
      "자신의 능력이 부족하다고 스스로 느낄 때 속상해해요.",
      "분위기가 험하거나 상대방이 기분이 나빠 할 때 스트레스를 많이 받아요.",
    ],
    pleaseLists: [
      "완벽하지 않아도 괜찮다는 것을 알려주세요.",
      "복잡하거나 새로운 것을 배울 때에는 충분한 시간을 주세요.",
      "새로운 이야기가 가득한 책을 많이 보여주세요.",
    ],
  },
  INFP: {
    type: "INFP",
    mainTitle: "독창적인 프로 공감러",
    subTitle: "낭만적이고 부드럽지만 창의적이고 열정적인 이타주의자 어린이",
    character:
      "일반적인 것보다는 특별하고 창의적인 것을 잘해내지만 때로는 규칙적이고 실천하는 것에 어려움을 느낄 수 있어요.",
    canLists: [
      "상상력이 매우 풍부하고 공상 하는 것을 잘해요.",
      "상세하고 정교한 상상 속 이야기를 잘 만들어요.",
      "언어 능력이 우수할 수 있어요.",
      "다른 사람들의 감정에 민감해서 공감을 잘해요.",
    ],
    likeLists: [
      "새롭고 독창적인 이야기를 좋아해요.",
      "놀이를 할 때 장난감이나 상황에 상상의 세계를 부여하기를 좋아해요.",
      "일반적이고 평범한 것보다 창의적인 것을 선택해요.",
      "행동이 단순해 보이지만 명쾌해요.",
    ],
    disLikeLists: [
      "다른 사람이 슬퍼하거나 괴로워하면 영향이 클 수 있어요.",
      "시간 약속을 지키는데 어려움이 있어요.",
      "실천하는 데 행동이 느리고 꾸준하게 지속하는데 어려울 수 있어요.",
      "정해지거나 일반적인 것들을 상당히 지루해 할 수 있어요.",
    ],
    pleaseLists: [
      "자신의 생각과 의견이 다를 때 의문이 생겨요. 이 때 충분히 이해해주고 설명해줘야 해요.",
      "시간 약속을 지키고 규칙적인 활동을 하는 연습이 필요해요.",
      "목표를 설정하고 이룰 수 있는 방법을 알려주세요.",
      "공부를 놀이처럼 하면 좋아요.",
    ],
  },
};