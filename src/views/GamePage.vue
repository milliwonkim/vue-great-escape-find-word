<template>
  <div>
    <div class="game-wrapper">
      <div class="question-container">
        {{ WORDS_LIST[questionSelector].question }}
      </div>
      <div>카테고리: {{ WORDS_LIST[questionSelector].category }}</div>
      <div>
        {{ assembleString }}
      </div>
      <div v-if="WORDS_LIST[questionSelector].answer === assembleString">
        <div>정답</div>
      </div>
      <div v-else-if="assembleString">
        <div>오답</div>
      </div>
      <div class="route-question-button-box">
        <button
          class="route-question-button"
          @click="handleRouteQuestion('PREV')"
        >
          이전문제
        </button>
        <button
          class="route-question-button"
          @click="handleRouteQuestion('NEXT')"
        >
          다음문제
        </button>
      </div>
      <!-- <label class="input-label" for="input">
      <input
        type="text"
        :value="inputData"
        @input="handleInput($event)"
        class="input"
        id="input"
      />
    </label> -->

      <div class="string-container">
        <button
          :key="i"
          v-for="(el, i) in strings"
          :class="`string-nested-box${el.isClicked ? '__clicked' : ''}`"
          :disabled="el.name === 'X'"
          @click="handleClick(el.id)"
        >
          <div>
            {{ el.name }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line object-curly-newline
import { defineComponent, onMounted, ref, watch } from 'vue';
import * as Hangul from 'hangul-js';
import getRandomArray from '../utils/getRandomArray';
import { WORDS_LIST } from '../constants/constants';

interface IButton {
  name: string;
  isClicked: boolean;
  id: number;
}

export default defineComponent({
  name: 'GamePage',
  setup() {
    const strings = ref<IButton[]>([]);
    const isClickedArray = ref<
      { name: string; isClicked: boolean; id: number }[]
    >([]);
    const inputData = ref('김기원');
    const assembleArray = ref<
      { name: string; isClicked: boolean; id: number }[]
    >([]);
    const assembleString = ref<string>('');

    const questionSelector = ref(0);

    watch(inputData, (newVal) => {
      const a = Hangul.disassemble(newVal).map((el, index) => ({
        name: el,
        isClicked: false,
        id: index,
      }));

      strings.value = getRandomArray(a);
    });

    function initQuestion() {
      const a = Hangul.disassemble(
        WORDS_LIST[questionSelector.value].answer,
      ).map((el, index) => ({
        name: el,
        isClicked: false,
        id: index,
      }));

      strings.value = getRandomArray(a);
    }

    function initDisassemble(array: IButton[]) {
      const arrayToAssemble = array.map((el) => el.name);
      assembleString.value = Hangul.assemble(arrayToAssemble);
    }

    onMounted(() => {
      initQuestion();
    });

    watch(questionSelector, () => {
      initQuestion();
    });

    watch(assembleArray, (newVal) => {
      initDisassemble(newVal);
    });

    function handleInput(e: Event) {
      const target = e.target as HTMLInputElement;
      inputData.value = target.value;
    }

    function handleClick(id: number) {
      const selectorNumber = strings.value.findIndex((el) => el.id === id);
      strings.value[selectorNumber] = {
        ...strings.value[selectorNumber],
        isClicked: !strings.value[selectorNumber].isClicked,
      };

      if (strings.value[selectorNumber].isClicked) {
        assembleArray.value = [
          ...assembleArray.value,
          strings.value[selectorNumber],
        ];
      } else {
        const removeSelector = assembleArray.value.findIndex(
          (el) => el.id === id,
        );

        assembleArray.value.splice(removeSelector, 1);
        assembleArray.value = [...assembleArray.value];
      }
    }

    function handleRouteQuestion(prevOrNext: string) {
      if (
        // eslint-disable-next-line operator-linebreak
        prevOrNext === 'NEXT' &&
        questionSelector.value < WORDS_LIST.length - 1
      ) {
        questionSelector.value += 1;
        assembleString.value = '';
        assembleArray.value = [];
      } else if (prevOrNext === 'PREV' && questionSelector.value >= 1) {
        questionSelector.value -= 1;
        assembleString.value = '';
        assembleArray.value = [];
      }
    }

    return {
      strings,
      inputData,
      handleInput,
      handleClick,
      isClickedArray,
      assembleString,
      WORDS_LIST,
      questionSelector,
      handleRouteQuestion,
    };
  },
});
</script>
<style lang="scss" scoped>
.string-nested-box {
  display: flex;
  box-sizing: border-box;
  padding: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 100%;
  justify-content: center;
  background: #ffffff;
  border: none;
  cursor: pointer;
  &__clicked {
    @extend .string-nested-box;
    border: none;
    background: red;
    color: #ffffff;
  }

  &:disabled {
    background: #828282;
    color: #ffffff;
  }
}

.string-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  gap: 16px;
}

.input {
  border: none;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.input-label {
  display: inline-block;
  width: 100%;
}

.game-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.question-container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.route-question-button-box {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.route-question-button {
  display: flex;
  background: #ffffff;
  border: none;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
}
</style>
