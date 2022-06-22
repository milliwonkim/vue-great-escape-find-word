export const SEOUL_WORDS = [
  {
    question:
      '서울에서 가장 한국다움을 느낄 수 있는 곳. 600년 전부터 양반층이 살던 곳으로 지금도 실제 주민들이 거주하며 한옥마을을 보존하고 있다. 현재의 가회동, 삼청동, 원서동, 재동, 계동 일대에 해당한다.',
    answer: '북촌한옥마을',
    level: 'easy',
    category: '서울',
  },
];

export const GYEONG_JU_WORDS = [
  {
    question:
      '안압지 서쪽에 위치한 신라 왕궁의 별궁터이다. 다른 부속건물들과 함께 왕자가 거처하는 동궁으로 사용되면서 나라의 경사가 있을 때나 귀한 손님을 맞을 때 이곳에서 연회를 베풀었다고 한다. 신라 경순왕이 견훤의 침입을 받은 뒤, 931년에 왕건을 초청하여 위급한 상황을 호소하며 잔치를 베풀었던 곳이기도 하다.',
    answer: '동궁과월지',
    level: 'easy',
    category: '경주',
  },
  {
    question:
      '신라 중기의 석조 건축물로, 선덕여왕때에 세워진 세계에서 현존하는 가장 오래된 천문대로 알려져 있다. 1962년 12월 20일 국보 제31호로 지정되었다.',
    answer: '첨성대',
    level: 'easy',
    category: '경주',
  },
  {
    question:
      '신라시대인 경덕왕에서 혜공왕 시대에 걸쳐 대규모로 중창되었다. 신라 이후 고려와 조선시대에 이르기까지 여러 번 수축되었으나 임진왜란 때 불타버렸다. 대한불교 조계종 제11교구 본사이고, 1995년 유네스코 세계문화유산으로 지정되었다.',
    answer: '불국사',
    level: 'easy',
    category: '경주',
  },
  {
    question:
      '경북 경주시에 있는 신라 시대의 고분군.본래 사적 경주노동리고분군(慶州路東里古墳群), 사적 경주노서리고분군(慶州路西里古墳群), 사적 경주황남리고분군(慶州皇南里古墳群), 사적 경주황오리고분군(慶州皇吾里古墳群), 사적 경주인왕리고분군(慶州仁旺里古墳群)으로 분리되어 있었으나, 2011년 7월 28일 문화재청이 역사성과 특성을 고려하여 경주 평야 한복판에 서로 인접해 있는 신라 시대의 고분군을 통합하여 재지정하였다.',
    answer: '대릉원',
    level: 'easy',
    category: '경주',
  },
  {
    question:
      '1985년 5월 도투락월드로 개장하였으며, 1991년 10월부터 이것으로 변경되었다. 또한, 옆에 위치한 캘리포니아비치는 지난 2008년 개장한 워터파크이다.',
    answer: '경주월드',
    level: 'easy',
    category: '경주',
  },
  {
    question:
      '신라 22대 지증왕의 능으로 추정되는 경주의 고분이다. 지름 47m, 높이 12.7m이며, 1973년에 발굴되어, 천마도, 금관, 금모 등 11,297점의 부장품이 출토되었다. 유물 중에 순백의 천마 한 마리가 하늘로 날아 올라가는 그림이 그려진 자작나무 껍질로 만든 천마도가 출토되어 이것이란 이름이 붙여졌다.',
    answer: '천마총',
    level: 'easy',
    category: '경주',
  },
  {
    question:
      '1967년 7월 24일 대한민국의 사적 제158호로 지정되었다. 삼국통일을 이룬 문무왕이 자신이 용이 되어 침입해 들어오는 왜구를 막겠다며, 자신의 시신을 불교식으로 화장하여 유골을 동해에 묻어 달라한 유언을 따라서 장사한 것이다. 이 바위를 대왕암 또는 대왕바위라 하며, 해중왕릉은 세계적으로 유례가 없다.',
    answer: '문무대왕릉',
    level: 'easy',
    category: '경주',
  },
];

export const EASY_WORDS = [...GYEONG_JU_WORDS, ...SEOUL_WORDS];

export const WORDS = [...EASY_WORDS];

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

export default getRandomArray;

export const WORDS_LIST = getRandomArray(
  WORDS.map((el, i) => ({
    ...el,
    id: i,
    isClear: false,
  })),
);
