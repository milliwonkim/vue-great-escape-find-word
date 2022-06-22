function getList(
  array: {
    question: string;
    answer: string;
  }[],
  city: string,
  level: string,
) {
  return array.map((el) => ({ ...el, category: city, level }));
}

function getRandomArray(array: any) {
  // eslint-disable-next-line no-plusplus
  for (let index = array.length - 1; index > 0; index--) {
    // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
    const randomPosition = Math.floor(Math.random() * (index + 1));

    // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
    const temporary = array[index];
    // eslint-disable-next-line no-param-reassign
    array[index] = array[randomPosition];
    // eslint-disable-next-line no-param-reassign
    array[randomPosition] = temporary;
  }

  return array;
}

export const SEOUL_WORDS = [
  {
    question:
      '서울에서 가장 한국다움을 느낄 수 있는 곳. 600년 전부터 양반층이 살던 곳으로 지금도 실제 주민들이 거주하며 한옥마을을 보존하고 있다. 현재의 가회동, 삼청동, 원서동, 재동, 계동 일대에 해당한다.',
    answer: '북촌한옥마을',
  },
  {
    question:
      '1970년 만들어진 고가도로가 2017년 17개의 사람이 다니는 길로 다시 태어난다는 뜻에서 명명된 서울역고가도로의 도시 재생 공원화 사업명이다.',
    answer: '서울로7017',
  },
  {
    question:
      '대한민국 서울특별시 청와대로에 있는 조선 왕조의 법궁(法宮, 정궁)이다. 태조 4년인 1395년 창건되어 1592년 임진왜란으로 전소되었고, 1868년 흥선대원군의 주도로 중건되었다. 일제 강점기에 훼손되어 현재 복원사업이 진행중이다.',
    answer: '경복궁',
  },
  {
    question:
      '1967년, 다시 대통령 선거에 출마하였다. 5·3 대통령 선거에서 민주공화당의 이사람은 경제개발의 성과와[159] 비전을 내세우면서, 이를 지속하기 위한 정치적 지지를 호소했다. 반면에 신민당의 윤보선은 쿠데타 이후에 추진된 경제개발의 폭력성과 독재성을 규탄했다. 이 대통령은 누구인가',
    answer: '박정희',
  },
  {
    question:
      '군부 정권의 위협으로 여러 번 죽을 고비를 넘기면서 김영삼과 함께 오랫동안 민주 진영의 지도자로 활동하며 군사 정권에 항거하였다.[2] 이후 대통령에 당선되며 직선제 및 민간 정부 출범 이후 최초의 평화적인 정권교체를 이루었다.',
    answer: '김대중',
  },
];

export const GYEONG_JU_WORDS = [
  {
    question:
      '안압지 서쪽에 위치한 신라 왕궁의 별궁터이다. 다른 부속건물들과 함께 왕자가 거처하는 동궁으로 사용되면서 나라의 경사가 있을 때나 귀한 손님을 맞을 때 이곳에서 연회를 베풀었다고 한다. 신라 경순왕이 견훤의 침입을 받은 뒤, 931년에 왕건을 초청하여 위급한 상황을 호소하며 잔치를 베풀었던 곳이기도 하다.',
    answer: '동궁과월지',
  },
  {
    question:
      '신라 중기의 석조 건축물로, 선덕여왕때에 세워진 세계에서 현존하는 가장 오래된 천문대로 알려져 있다. 1962년 12월 20일 국보 제31호로 지정되었다.',
    answer: '첨성대',
  },
  {
    question:
      '신라시대인 경덕왕에서 혜공왕 시대에 걸쳐 대규모로 중창되었다. 신라 이후 고려와 조선시대에 이르기까지 여러 번 수축되었으나 임진왜란 때 불타버렸다. 대한불교 조계종 제11교구 본사이고, 1995년 유네스코 세계문화유산으로 지정되었다.',
    answer: '불국사',
  },
  {
    question:
      '경북 경주시에 있는 신라 시대의 고분군.본래 사적 경주노동리고분군(慶州路東里古墳群), 사적 경주노서리고분군(慶州路西里古墳群), 사적 경주황남리고분군(慶州皇南里古墳群), 사적 경주황오리고분군(慶州皇吾里古墳群), 사적 경주인왕리고분군(慶州仁旺里古墳群)으로 분리되어 있었으나, 2011년 7월 28일 문화재청이 역사성과 특성을 고려하여 경주 평야 한복판에 서로 인접해 있는 신라 시대의 고분군을 통합하여 재지정하였다.',
    answer: '대릉원',
  },
  {
    question:
      '1985년 5월 도투락월드로 개장하였으며, 1991년 10월부터 이것으로 변경되었다. 또한, 옆에 위치한 캘리포니아비치는 지난 2008년 개장한 워터파크이다.',
    answer: '경주월드',
  },
  {
    question:
      '신라 22대 지증왕의 능으로 추정되는 경주의 고분이다. 지름 47m, 높이 12.7m이며, 1973년에 발굴되어, 천마도, 금관, 금모 등 11,297점의 부장품이 출토되었다. 유물 중에 순백의 천마 한 마리가 하늘로 날아 올라가는 그림이 그려진 자작나무 껍질로 만든 천마도가 출토되어 이것이란 이름이 붙여졌다.',
    answer: '천마총',
  },
  {
    question:
      '1967년 7월 24일 대한민국의 사적 제158호로 지정되었다. 삼국통일을 이룬 문무왕이 자신이 용이 되어 침입해 들어오는 왜구를 막겠다며, 자신의 시신을 불교식으로 화장하여 유골을 동해에 묻어 달라한 유언을 따라서 장사한 것이다. 이 바위를 대왕암 또는 대왕바위라 하며, 해중왕릉은 세계적으로 유례가 없다.',
    answer: '문무대왕릉',
  },
  {
    question:
      '1967년 7월 24일 대한민국의 사적 제158호로 지정되었다. 삼국통일을 이룬 문무왕이 자신이 용이 되어 침입해 들어오는 왜구를 막겠다며, 자신의 시신을 불교식으로 화장하여 유골을 동해에 묻어 달라한 유언을 따라서 장사한 것이다. 이 바위를 대왕암 또는 대왕바위라 하며, 해중왕릉은 세계적으로 유례가 없다.',
    answer: '문무대왕릉',
  },
  {
    question:
      '얼음을 저장하기 위하여 만든 석조 창고로서 겨울에 얼음을 채취하여 저장하였다가 여름에 사용하였다.',
    answer: '석빙고',
  },
];

export const GYEONG_JU_WORDS_LIST_EASY = getList(
  GYEONG_JU_WORDS,
  '경주',
  'easy',
);
export const SEOUL_WORDS_LIST_EASY = getList(SEOUL_WORDS, '서울', 'easy');

export const EASY_WORDS = [
  ...GYEONG_JU_WORDS_LIST_EASY,
  ...SEOUL_WORDS_LIST_EASY,
];

export const WORDS = [...EASY_WORDS];

export const WORDS_LIST = getRandomArray(
  WORDS.map((el, i) => ({
    ...el,
    id: i,
    isClear: false,
  })),
);
