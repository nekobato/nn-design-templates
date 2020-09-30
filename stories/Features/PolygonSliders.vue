<template>
  <div class="polygon-sliders-container">
    <svg
      class="value-container-polygon"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <polygon
        fill="rgba(255, 255, 255, 0.48)"
        stroke="#ff9e05"
        stroke-width="5"
        :points="valueGroupContainerPolygonPoints"
      />
    </svg>
    <div class="value-group">
      <div
        class="value-container-row"
        v-for="(value, index) in values"
        :key="index"
        :style="rangeStyle(index)"
      >
        <div class="value-container" :style="reversedRangeStyle(index)">
          <span class="name">{{ labels[index].title }}</span>
          <span class="value">{{ valueFromThresholds(labels[index].thresholds, value) }}</span>
        </div>
      </div>
    </div>
    <div class="polygon-sliders">
      <input
        class="input range-1"
        type="range"
        :min="min"
        :max="max"
        v-for="(input, index) in values"
        :key="index"
        :style="rangeStyle(index)"
        v-model="values[index]"
      />
      <svg
        class="container-polygon"
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <polygon
          fill="rgba(255, 255, 255, 0.48)"
          stroke="#222"
          stroke-width="4"
          :points="containerPolygonPoints"
        />
      </svg>
      <svg class="polygon" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polygon fill="#ff9e05" stroke="transparent" stroke-width="1" :points="polygonPoints" />
      </svg>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: ["min", "max", "step", "count", "defaultValue"],
  data: () => ({
    isDragging: false,
    labels: [
      {
        title: "勇気",
        thresholds: [
          {
            min: 0,
            max: 24,
            value: "なくはない",
          },
          {
            min: 25,
            max: 49,
            value: "頼りになる",
          },
          {
            min: 50,
            max: 74,
            value: "怖い物なし",
          },
          {
            min: 75,
            max: 99,
            value: "冒険者級",
          },
          {
            min: 100,
            max: 100,
            value: "豪傑",
          },
        ],
      },
      {
        title: "根気",
        thresholds: [
          {
            min: 0,
            max: 24,
            value: "若者級",
          },
          {
            min: 25,
            max: 49,
            value: "ねばり気味",
          },
          {
            min: 50,
            max: 74,
            value: "筋金入り",
          },
          {
            min: 75,
            max: 99,
            value: "半端ない",
          },
          {
            min: 100,
            max: 100,
            value: "タフガイ",
          },
        ],
      },
      {
        title: "寛容さ",
        thresholds: [
          {
            min: 0,
            max: 24,
            value: "それなり",
          },
          {
            min: 25,
            max: 49,
            value: "情け深い",
          },
          {
            min: 50,
            max: 74,
            value: "太っ腹",
          },
          {
            min: 75,
            max: 99,
            value: "菩薩級",
          },
          {
            min: 100,
            max: 100,
            value: "オカン級",
          },
        ],
      },
      {
        title: "伝達力",
        thresholds: [
          {
            min: 0,
            max: 24,
            value: "そこそこ",
          },
          {
            min: 25,
            max: 49,
            value: "話し上手",
          },
          {
            min: 50,
            max: 74,
            value: "聞き惚れる",
          },
          {
            min: 75,
            max: 99,
            value: "心に響く",
          },
          {
            min: 100,
            max: 100,
            value: "言霊使い",
          },
        ],
      },
      {
        title: "伝達力",
        thresholds: [
          {
            min: 0,
            max: 24,
            value: "歳相応",
          },
          {
            min: 25,
            max: 49,
            value: "広い",
          },
          {
            min: 50,
            max: 74,
            value: "物知り",
          },
          {
            min: 75,
            max: 99,
            value: "博士級",
          },
          {
            min: 100,
            max: 100,
            value: "生き字引",
          },
        ],
      },
    ],
    values: [],
  }),
  watch: {
    count() {
      this.$data.values = new Array(this.count).fill(this.defaultValue);
    },
  },
  computed: {
    stepValues() {
      return new Array(this.max / this.step).fill(undefined).map((n, i) => (i + 1) * this.step);
    },
    valueGroupContainerPolygonPoints() {
      let string = `160,0`;
      for (let i = 1; i < this.count; i++) {
        const deg = -90 + (360 / this.count) * i;
        string += ` ${160 + Math.cos((deg * Math.PI) / 180) * 160},${
          160 + Math.sin((deg * Math.PI) / 180) * 160
        }`;
      }
      return string;
    },
    containerPolygonPoints() {
      let string = `160,0`;
      for (let i = 1; i < this.count; i++) {
        const deg = -90 + (360 / this.count) * i;
        string += ` ${160 + Math.cos((deg * Math.PI) / 180) * 160},${
          160 + Math.sin((deg * Math.PI) / 180) * 160
        }`;
      }
      return string;
    },
    polygonPoints() {
      let string = `160,${160 - this.$data.values[0] * 1.6}`;
      for (let i = 1; i < this.count; i++) {
        const deg = -90 + (360 / this.count) * i;
        string += ` ${160 + Math.cos((deg * Math.PI) / 180) * this.$data.values[i] * 1.6},${
          160 + Math.sin((deg * Math.PI) / 180) * this.$data.values[i] * 1.6
        }`;
      }
      return string;
    },
  },
  methods: {
    rangeStyle(index) {
      return `transform: rotate(${-90 + (360 / this.count) * index}deg);`;
    },
    reversedRangeStyle(index) {
      return `transform: rotate(${90 - (360 / this.count) * index}deg);`;
    },
    valueFromThresholds(thresholds, value) {
      return (
        thresholds.find((threshold) => {
          return threshold.min <= value && value <= threshold.max;
        })?.value || ""
      );
    },
  },
  mounted() {
    this.$data.values = new Array(this.count).fill(this.defaultValue);
  },
});
</script>

<style lang="postcss" scoped>
.polygon-sliders-container {
  position: relative;
  display: flex;
  place-content: center center;
  width: 600px;
  height: 600px;
  .value-container-polygon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 540px;
    height: 540px;
  }
  .value-group {
    .value-container-row {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 300px;
      display: flex;
      place-content: center flex-end;
      margin: auto;
      width: 50%;
      height: 160px;
      transform-origin: 0 center;
    }
    .value-container {
      display: inline-flex;
      flex-direction: column;
      place-content: center center;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: #ff9e05;
      .name,
      .value {
        margin: 4px auto;
        font-size: 24px;
        font-weight: bold;
      }
      .name {
        color: #222;
      }
      .value {
        color: #fff;
      }
    }
  }
}
.polygon-sliders {
  position: relative;
  margin: auto;
  width: 320px;
  height: 320px;
  input {
    -webkit-appearance: none;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    margin: -1px 0 0 0;
    width: 50%;
    height: 2px;
    background-color: #222;
    transform-origin: center left;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      position: relative;
      border: none;
      width: 12px;
      height: 12px;
      background-color: #222;
      border-radius: 50%;
    }
  }

  .container-polygon {
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }
  .polygon {
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }
}
</style>
