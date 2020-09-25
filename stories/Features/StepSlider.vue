<template>
  <div
    class="step-slider"
    @mouseleave="onMouseLeave"
    @keydown.arrow-down="decrement"
    @keydown.arrow-up="increment"
    tabindex="0"
    role="slider"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-valuenow="value"
  >
    <div
      class="step"
      v-for="(stepValue, index) in stepValues"
      :key="index"
      :class="{ active: value >= stepValue }"
      @mousedown="onMouseDown(index)"
      @mouseenter="onMouseEnter(index)"
    ></div>
    <input type="range" :min="min" :max="max" :step="step" v-model="value" />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: ["min", "max", "step", "value"],
  data: () => ({
    isDragging: false,
  }),
  computed: {
    stepValues() {
      return new Array(this.max / this.step).fill(undefined).map((n, i) => (i + 1) * this.step);
    },
  },
  methods: {
    decrement() {
      if (this.value > this.min || 0) this.$emit("input", this.value - this.step);
    },
    increment() {
      if (this.value < this.max) this.$emit("input", this.value + this.step);
    },
    onMouseDown(index) {
      this.$data.isDragging = true;
      this.$emit("input", (index + 1) * this.step);
    },
    onMouseEnter(index) {
      if (this.$data.isDragging) this.$emit("input", (index + 1) * this.step);
    },
    onMouseLeave() {
      this.$data.isDragging = false;
    },
  },
});
</script>

<style lang="postcss" scoped>
.step-slider {
  display: inline-flex;
  input {
    display: none;
  }
  .step {
    margin-left: 1px;
    width: 8px;
    height: 24px;
    border-radius: 2px;
    background: #ddd;
    &.active:nth-child(1) {
      margin-left: 0;
      background: hsl(120, 60%, 63%);
    }
    &.active:nth-child(2) {
      background: hsl(110, 60%, 63%);
    }
    &.active:nth-child(3) {
      background: hsl(100, 60%, 63%);
    }
    &.active:nth-child(4) {
      background: hsl(80, 60%, 63%);
    }
    &.active:nth-child(5) {
      background: hsl(60, 60%, 63%);
    }
    &.active:nth-child(6) {
      background: hsl(40, 60%, 63%);
    }
    &.active:nth-child(7) {
      background: hsl(30, 60%, 63%);
    }
    &.active:nth-child(8) {
      background: hsl(20, 60%, 63%);
    }
    &.active:nth-child(9) {
      background: hsl(10, 60%, 63%);
    }
    &.active:nth-child(10) {
      background: hsl(0, 60%, 63%);
    }
  }
}
</style>
